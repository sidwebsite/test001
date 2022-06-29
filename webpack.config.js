const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js?[hash:8]',
        clean: true
    },
    module: {
        rules: [
            // css loader
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ], 
            },
            // sass loader
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/html/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css?[hash:8]'
        })
    ],
    mode: 'development'
};