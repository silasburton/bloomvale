'use strict'

var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var shell = require('gulp-shell')
var watch = require('gulp-watch')

gulp.task('jekyll', shell.task([
  'jekyll build --watch'
]))

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '_site'
    },
    files: ['_site/**/*.css', '_site/**/*.html', 'site.**/*.js'],
    ghostMode: false,
    notify: false,
  })
})

gulp.task('versionCSS', shell.task([
  'md5 -r _site/css/style.css | awk \'{print $1}\' > _data/hash_css.yml'
]))

gulp.task('versionJs', shell.task([
  'md5 -r _site/js/scripts.js | awk \'{print $1}\' > _data/hash_js.yml'
]))

gulp.task('versionWatch', function () {
  gulp.watch('_site/css/style.css', ['versionCSS'])
  gulp.watch('_site/js/scripts.js', ['versionJs'])
})

gulp.task('default', ['jekyll', 'browserSync', 'versionWatch'])
