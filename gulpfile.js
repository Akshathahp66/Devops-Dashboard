var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'app/html/industrypage.html'
        },
    })
  })

gulp.task('watch', ['browserSync'], function (){
    gulp.watch('app/css/*.css', browserSync.reload);
    gulp.watch('app/html/*.html', browserSync.reload); 
    gulp.watch('app/js/*.js', browserSync.reload);
    
  })