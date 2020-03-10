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
    );
    config.rules.push({
       test: /\.(png|svg|jpg|gif)$/,
       use: [
          'file-loader',
       ]
    });
    config.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ]
    });

    return config
  }
}));
