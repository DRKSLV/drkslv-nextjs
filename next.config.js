const webpack = require('webpack')
var isProd = true;
var assetPrefix = isProd ? '/n' : '';

// next.config.js
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
module.exports = withSass(withCSS({
    cssLoaderOptions: {
        url: true
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
        config.module.rules.push({
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                    loader:'url-loader',
                    options: {
                        publicPath: "/_next/",
                        outputPath: "static/images/"
                    }
                },
            ],
            
        });
        config.module.rules.push({
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                {
                    loader:'url-loader',
                    options: {
                        esModule:false
                    }
                },
            ]
            
        });

        return config
    }
}));
