const webpack = require('webpack');
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})


const sync = new BrowserSyncPlugin(
    // BrowserSync options 
    {
      // browse to http://localhost:3000/ during development 
      host: 'localhost',
      port: 3000,
      // proxy the Webpack Dev Server endpoint 
      // (which should be serving on http://localhost:3100/) 
      // through BrowserSync 
      proxy: 'http://localhost:8080/'
    },
    // plugin options 
    {
      // prevent BrowserSync from reloading the page 
      // and let Webpack Dev Server take care of this 
      reload: false
    }
  )


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
        new webpack.HotModuleReplacementPlugin(),sync]
}