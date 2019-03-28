var webpack = require('webpack');
var commonConfig = require('./webpack.common.config');

module.exports = Object.assign(commonConfig, {
  mode: 'development',
  entry: ['webpack-hot-middleware/client', './source/javascripts/index.tsx'],
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: '#eval'
});
