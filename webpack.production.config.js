require('babel-polyfill');
var webpack = require('webpack');
var path = require('path');
var banner = require('./config/banner.js');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var commonConfig = require('./webpack.common.config');

module.exports = Object.assign(commonConfig, {
  mode: 'production',
  entry: ['babel-polyfill', './source/javascripts/index'],
  output: {
    filename: 'bundle.min.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            dead_code: true,
            drop_console: true,
            unused: true,
            warnings: true
          }
        }
      })
    ]
  },
  plugins: [
    /* DefinePluginの実行 */
    new webpack.DefinePlugin({
      // process.env.NODE_ENVを'production'に置き換える
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      content: path.resolve(__dirname, 'source')
    }),
    new webpack.BannerPlugin(banner)
  ],
  devtool: 'cheap-module-source-map'
});
