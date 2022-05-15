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
        './app/style/style-index.css',
    ])
    .pipe(concat('style.css'))
    .pipe(dest('./app/style'));
}

const indexStylesBundle = () => {
    src([
        './app/template-index/src/dimens.css',
        './app/template-index/src/layout.css',
        './app/template-index/src/uix-typography.css',
        './app/template-index/src/uix-buttons.css',
        './app/template-index/src/components-basic.css',
    ])
    .pipe(concat('style.css'))
    .pipe(dest('./app/template-index/dist'));
}

exports.appbundle = appBundle;  // gulp appbundle
exports.stylesbundle = stylesBundle;  // gulp stylesbundle
exports.indexstylesbundle = indexStylesBundle;  // gulp indexstylesbundle