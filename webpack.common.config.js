var webpack = require('webpack');
var path = require('path');
var commonConfig = require('./webpack.common.config');
const config = require('./config/config');

module.exports = {
  output: {
    path: path.resolve(__dirname, config.distPath + 'js'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        },
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};
