var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js' // need to add hash in name
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.(css)$/, use: ['style-loader', 'css-loader']},
            {test: /\.(jpg|jpeg|png|webp|gif)$/gi, use: [
                {
                loader: 'url-loader',
            }
            ]}
        ]
    }, // need to separate out mode for prod and dev
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}