/*
    ./webpack.config.js
*/
const path = require('path');

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
  plugins: [HtmlWebpackPluginConfig]
}