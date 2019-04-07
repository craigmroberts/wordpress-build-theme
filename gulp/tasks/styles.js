var gulp = require('gulp'),
    postCss = require('gulp-postcss'),
    autoPrefixer = require('autoprefixer'),
    postCssImport = require('postcss-import')
    postCssVars = require('postcss-simple-vars'),
    postCssNested = require('postcss-nested'),
    postCssMixins = require('postcss-mixins'),
    postCssHexRgba = require('postcss-hexrgba'),
    rename = require("gulp-rename");

gulp.task('styles',['styles1'], function() {
  return gulp.src([
    './app/style.css'])
    .pipe(gulp.dest('./dist/wp-content/themes/omgracing/'));
});

gulp.task('styles1', function() {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postCss([postCssImport, postCssMixins, postCssVars, postCssNested, postCssHexRgba, autoPrefixer]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./app/'));
});
