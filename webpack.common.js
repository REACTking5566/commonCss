const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
    entry: './src/App.js',
    plugins: [new HtmlWebpackPlugin({
        title: 'hello world',
        template: './src/index.html',
        filename: 'index.html',
        minify: {
            collapseWhitespace: true,
        },
        hash: true,
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },

            }
        ]
    },
    devServer: {
        watchOptions: {
            ignored: /node_modules/
        }
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    }
});