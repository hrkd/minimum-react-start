'use strict'

const gulp                 = require('gulp');
const browserSync          = require('browser-sync').create();
const config               = require('../config');
const webpack              = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig        = require('../../webpack.config');
const bundler = webpack(webpackConfig);


// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    port: 5500,
    server: {
      baseDir: config.distPath,
      middleware: [
        webpackDevMiddleware(bundler, {
          publicPath: webpackConfig.output.publicPath,
          stats: { colors: true }
          // http://webpack.github.io/docs/webpack-dev-middleware.html
        }),
        webpackHotMiddleware(bundler)
      ]

    },
    notify: false,
    files: [
      config.distPath+"**/*.html",
      config.distPath+"**/*.css"
    ],
    ghostMode:false,
    open: false
  });
});
