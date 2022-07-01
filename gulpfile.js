const { src, dest } = require('gulp');
const concat = require('gulp-concat');

/*gulp.task('styles', function() {
    return gulp.src('.src/templates/style/*.css')
      .pipe(concat('style.css'))
      .pipe(gulp.dest('./dist/'));
});*/

const stylesBundle = async () => {
    src([
        './app/src/dimens.css',
        './app/src/layout.css',
        './app/src/uix-typography.css',
        './app/src/uix-buttons.css',
        './app/src/uix-labels.css',
        './app/src/components-basic.css',
        './app/src/gallery.css',
    ])
    .pipe(concat('style.css'))
    .pipe(dest('./app/dist'));
}

const appBundle = async () => {
    src([
        './app/src/footer.js',
        './app/src/spotlist.js',
        './app/src/utils.js',
        './app/src/main.js',
    ])
    .pipe(concat('app.js'))
    .pipe(dest('./app/dist'));
}


exports.stylesbundle = stylesBundle;  // gulp stylesbundle
exports.appbundle = appBundle;  // gulp appbundle