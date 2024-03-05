// Default Gulp Task

exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

// Build Gulp Task

exports.build = series(scssTask, jsTask);