'use strict';

const gulp = require('gulp');
const ejs = require('gulp-ejs');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const fs = require('fs');
const config = require('../config');

gulp.task('ejs', () => {
  const outputPath = process.env.NODE_ENV === 'production' ? config.buildPath : config.distPath;
  let data = {
    production: {
      cssPath: '/stylesheets/styles.min.css',
      jsPath: '/javascripts/bundle.min.js'
    },
    development: {
      cssPath: '/stylesheets/styles.css',
      jsPath: '/bundle.js'
    }
  };

  gulp
    .src(['./source/html/**/*.ejs', '!./source/html/**/_*.ejs'])
    .pipe(plumber())
    .pipe(
      ejs({
        data: data[process.env.NODE_ENV]
      })
    )
    .pipe(
      rename({
        // suffix: '.min',
        extname: '.html'
      })
    )
    .pipe(gulp.dest(outputPath));
});
