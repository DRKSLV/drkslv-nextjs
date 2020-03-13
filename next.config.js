var isProd = false;
var assetPrefix = isProd ? '/n' : '';

// next.config.js
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
module.exports = withCSS({
    cssLoaderOptions: {
        url: true
    },

    exportPathMap: () => ({
        '/': { page: '/' },
        '/posts': { page: '/posts' },
        '/chat': { page: '/chat' },
        '/accounts': { page: '/accounts' }
    }),
    assetPrefix: assetPrefix,
    webpack: (config, {webpack}) => {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
            }),
        );
        
        config.module.rules.push({ 
            test: /\.s[ac]ss$/i,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        injectType: "lazyStyleTag"
                    }
                },
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        // Prefer `dart-sass`
                        implementation: require('sass'),
                    }
                },
            ],
        })
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
});
