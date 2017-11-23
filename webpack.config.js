var webpack = require('webpack');
const path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');
var loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders
    },
    plugins: [HtmlWebpackPluginConfig, new DashboardPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
         new webpack.HotModuleReplacementPlugin()]
}