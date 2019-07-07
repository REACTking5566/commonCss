const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/App.js',
    output: {
        filename: 'App.bundle.js',
        path: path.resolve(__dirname, './'),
    },
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
            }
        ]
    }
};