var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    common: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './source/javascripts/index.js'
    ],
    sp: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './source/javascripts/index-sp.js',
    ],
    pc: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './source/javascripts/index-pc.js',
    ],
    splist: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './source/javascripts/list-sp.js',
    ],
    pclist: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './source/javascripts/list-pc.js',
    ]
  },
  output: {
    path: path.join(__dirname, '.dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  watch: false,
  devtool: '#eval'
}
