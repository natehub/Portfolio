const webpack = require('webpack');
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

  loaders.push( { // sass / scss loader for webpack
    test: /\.(sass|scss)$/,
    loader: ExtractTextPlugin.extract({fallback: 'style-loader',
    use:['css-loader', 'sass-loader']})
  });
 


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

var css_sass_text = new ExtractTextPlugin({ // define where to save the file
    filename: '[name].bundle.css',
    allChunks: true
  })


const sync = new BrowserSyncPlugin( 
    {
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    },
    {
      reload: false
    }
  )


module.exports = {
    entry: ['./src/index.js', './src/components/bundle.scss' ],
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: loaders
    },
    plugins: [HtmlWebpackPluginConfig, new DashboardPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),sync,css_sass_text]
}


