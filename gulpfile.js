'use strict'

const gulp        = require('gulp');
//const argv        = require('yargs').argv;
const requireDir = require('require-dir');

requireDir('./config/tasks', {recurse: true});

gulp.task('default',['set-dev-node-env', 'ejs', 'cp', 'sass','browser-sync','watch']);
gulp.task('build',  ['set-prod-node-env','ejs', 'cp', 'webpack', 'sass:build']);
