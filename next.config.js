const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        const { isServer } = options;
        config.plugins.push(
          new NextFederationPlugin({
            name: 'components',
            remotes: {
              container: `container@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
            },
            filename: 'static/chunks/remoteEntry.js',
            exposes: {
            //   './title': './components/exposedTitle.js',
            //   './checkout': './pages/checkout',
            },
            shared: {
              // whatever else
            },
          })
        );
    
        return config;
      },
}

module.exports = nextConfig
