var isProd = true;

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
  assetPrefix: isProd ? '/n' : '',
}));