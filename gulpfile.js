const gulp = require('gulp');
const sass = require('gulp-sass');
const browerSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp
            .src(['./public/scss/index.scss'])
            .pipe(sass())
            .pipe(gulp.dest('./public/css'))
            .pipe(browerSync.stream());
});

gulp.task('js', function() {
    return gulp     
            .src(['./node_modules/bootstrap/dist/js/bootstrap.min.js', './node_modules/popper.js/dist/umd/popper.min.js', './node_modules/jquery/dist/jquery.min.js'])
            .pipe(gulp.dest('./public/js'))
            .pipe(browerSync.stream());
});

gulp.task('server', ['sass'], function() {
    browerSync.init({
        server: './public'
    });
    
    gulp.watch(['./public/scss/*.scss'], ['sass']);
    gulp.watch(['./public/*.html'], browerSync.reload);
});

gulp.task('default', ['server', 'js']);