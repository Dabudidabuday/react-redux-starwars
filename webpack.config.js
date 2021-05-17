const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",

    entry: path.resolve(__dirname, 'src'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/"
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        port: 3000,
        historyApiFallback: true,
        stats: {
            // children: true
        },
        contentBase: path.resolve(__dirname)
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: '@import "./src/styles/variables";',
                            sassOptions: {
                                includePaths: [
                                    path.resolve(__dirname, "./app")
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|webp|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.mp3$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin()
    ],
}