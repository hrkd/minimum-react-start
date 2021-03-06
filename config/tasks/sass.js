'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const config = require('../config');

gulp.task('sass', [], function() {
  const outputPath = process.env.NODE_ENV === 'production' ? config.buildPath : config.distPath;
  gulp
    .src([
      './source/sass/**/*.sass',
      '!./source/sass/**/_*.sass',
      './source/sass/**/*.scss',
      '!./source/sass/**/_*.scss'
    ])
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(
      autoprefixer({
        browsers: ['last 4 versions', 'ie >= 9', 'Android >= 4', 'ios_saf >= 8'],
        cascade: false
      })
    )
    .pipe(gulp.dest(outputPath + 'stylesheets/'));
});
