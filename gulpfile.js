const { src, dest } = require('gulp');
const concat = require('gulp-concat');

/*gulp.task('styles', function() {
    return gulp.src('.src/templates/style/*.css')
      .pipe(concat('style.css'))
      .pipe(gulp.dest('./dist/'));
});*/

const testLog = () => {
    console.log("Hello");
};
exports.log = testLog;

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

exports.appbundle = appBundle;