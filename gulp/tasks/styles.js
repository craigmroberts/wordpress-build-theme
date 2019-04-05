var gulp = require('gulp'),
    postCss = require('gulp-postcss'),
    autoPrefixer = require('autoprefixer'),
    postCssImport = require('postcss-import')
    postCssVars = require('postcss-simple-vars'),
    postCssNested = require('postcss-nested'),
    postCssMixins = require('postcss-mixins'),
    postCssHexRgba = require('postcss-hexrgba');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postCss([postCssImport, postCssMixins, postCssVars, postCssNested, postCssHexRgba, autoPrefixer]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles/'));
});
