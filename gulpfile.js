const { src, dest } = require('gulp');
const concat = require('gulp-concat');

/*gulp.task('styles', function() {
    return gulp.src('.src/templates/style/*.css')
      .pipe(concat('style.css'))
      .pipe(gulp.dest('./dist/'));
});*/

const appBundle = () => {
    src([
        'src/templates/js/footer.js',
        'src/templates/js/equiplist.js',
        'src/templates/js/spotlist.js',
        'src/templates/js/utils.js',
    ])
    .pipe(concat('app.js'))
    .pipe(dest('./src/templates/js'));
}

const stylesBundle = () => {
    src([
        './app/style/uix-typography.css',
        './app/style/uix-cards.css',
        './app/style/gallery.css',
        './app/style/slider-line.css',
        './app/style/style-main.css',
    ])
    .pipe(concat('style.css'))
    .pipe(dest('./app/style'));
}

exports.appbundle = appBundle;  // gulp appbundle
exports.stylesbundle = stylesBundle;  // gulp stylesbundle