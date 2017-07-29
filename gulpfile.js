'use strict'

var gulp = require('gulp')

var autoprefixer = require('gulp-autoprefixer')
var browserSync = require('browser-sync').create()
var include = require('gulp-include')
var sass = require('gulp-sass')
var shell = require('gulp-shell')
var uglify = require('gulp-uglify')
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

gulp.task('sass', function () {
  return gulp.src('./_src/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'))
})

gulp.task('scripts', function() {
  gulp.src('_src/js/scripts.js')
    .pipe(include())
      .on('error', console.log)
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

gulp.task('versionCSS', shell.task([
  'md5 -r ./css/style.css | awk \'{print $1}\' > _data/hash_css.yml'
]))

gulp.task('versionJs', shell.task([
  'md5 -r ./js/scripts.js | awk \'{print $1}\' > _data/hash_js.yml'
]))

gulp.task('watch', function () {
  watch('./_src/scss/**/*.scss', function() {
    gulp.start('sass')
  })
  watch('./_src/js/**/*.js', function() {
    gulp.start('scripts')
  })
  gulp.watch('./css/style.css', ['versionCSS'])
  gulp.watch('./js/scripts.js', ['versionJs'])
})

gulp.task('default', ['jekyll', 'browserSync', 'watch'])
