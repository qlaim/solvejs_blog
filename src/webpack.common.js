var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js', // need to add hash in name
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.(css)$/, use: ['style-loader', 'css-loader']},
            {test: /\.(jpg|jpeg|png|webp|gif)$/gi, use: [
                {
                loader: 'url-loader',
            }
            ]}
        ]
    },
    devServer: {
        historyApiFallback: true
    }
}