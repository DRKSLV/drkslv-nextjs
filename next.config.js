const webpack = require('webpack')
var isProd = true;
var assetPrefix =  isProd ? '/n' : '';

// next.config.js
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
module.exports = withSass(withCSS({
  webpack: (config, options) => {
    return config;
  },
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  }
}));