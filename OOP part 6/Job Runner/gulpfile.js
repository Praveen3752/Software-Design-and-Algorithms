const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const { server, reload } = require('gulp-connect');

gulp.task('watch', function() {
  gulp.watch('*.js', gulp.series('browserify'));
});


gulp.task('serve', () => {
  server({
    name: 'Job runner',
    root: './dist',
    port: 5000,
    livereload: true,
  });
});

gulp.task('browserify', function() {
  return browserify({
    entries: './start.js',
  })
    .plugin('tsify')
    .bundle()
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
    .pipe(reload());
});

gulp.task(
  'default',
  gulp.series(['browserify', gulp.parallel('serve', 'watch')]),
);
