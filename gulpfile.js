var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

// Default Gulp Task

exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

// Build Gulp Task

exports.build = series(scssTask, jsTask);