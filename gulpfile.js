var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var sass = require('gulp-sass');

gulp.task('pug', function () {
  return gulp.src('./src/pug/*.pug')
    .pipe(plugins.plumber())
    .pipe(plugins.pug({
      pretty: true 
    }))
    .pipe(gulp.dest('./dist/')); 
});

gulp.task('pug:watch', function(){
  return gulp.watch('./src/*.pug',gulp.series('pug'));
});

gulp.task('sass', function () { 
  return gulp.src('./src/scss/**/*.scss') 
    .pipe(sass(                    
      {outputStyle: 'expanded'}     
    ).on('error', sass.logError))
    .pipe(gulp.dest('./dist/stylesheets'));
});

gulp.task('sass:watch', function () {
  return gulp.watch('./src/scss/**/*.scss', gulp.series('sass')); 
});

gulp.task('run', gulp.series('pug','sass'));