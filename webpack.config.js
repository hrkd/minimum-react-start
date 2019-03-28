require('babel-polyfill');
var webpack = require('webpack');
var commonConfig = require('./webpack.common.config');

module.exports = Object.assign(commonConfig, {
  mode: 'development',
  entry: ['babel-polyfill', 'webpack-hot-middleware/client', './source/javascripts/index'],
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: '#eval'
});
