
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
//新建gulp的任务
gulp.task('less2css',function () {
	gulp.src('less/style.less')
	.pipe(less())
	.pipe(gulp.dest('css'))
	.pipe(rename({suffix:'.min'}))
	.pipe(minify())
	.pipe(gulp.dest('css'))
})

gulp.task('concat',function(){
	gulp.src('js/*.js')
	.pipe(concat('main.js'))
	.pipe(gulp.dest('minify'))  //main.js => main.min.js
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('minify'))
})

gulp.task('all',['less2css','concat']);

gulp.task('watch',['less2css','concat'],function(){
	gulp.watch(['less/style.less','js/*.js'],['less2css','concat'])
})
