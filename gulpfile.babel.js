import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import browserify from 'browserify'
import source from 'vinyl-source-stream'

const $ = gulpLoadPlugins()

gulp.task('build', () => {
  browserify({ entries: ['src.babel/Code.js'] })
    .transform('babelify')
    .plugin('gasify')
    .bundle()
    .pipe(source('Code.js'))
    .pipe(gulp.dest('src'))
})

gulp.task('copy', () => {
  gulp.src(['src.babel/*', '!src.babel/*.js'])
    .pipe(gulp.dest('src'))
})

gulp.task('push', ['build', 'copy'], () => {
  gulp.src('.')
    .pipe($.exec('clasp push'))
})
