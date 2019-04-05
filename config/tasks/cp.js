'use strict';

const gulp = require('gulp');
const fse = require('fs-extra');
const config = require('../config');

gulp.task('cp', function() {
  const outputPath = process.env.NODE_ENV === 'production' ? config.buildPath : config.distPath;
  fse.copySync('./source/images/', outputPath + 'images/');
  fse.copySync('./source/fonts/', outputPath + 'fonts/');
  fse.copySync('./source/html/mock/', outputPath + 'mock/');
});
