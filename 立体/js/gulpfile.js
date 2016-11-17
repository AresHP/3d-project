/* 
 * gulp file
 */

/*
 * 插件的意义就是可以执行某些操作， 比方gulp-less这个插件就是把less文件编程成css文件 
 */

var gulp = require('gulp'),                  // 先把gulp插件加载进来     
	less = require('gulp-less'),             // less转译成css     
	minifycss = require('gulp-minify-css'),  // 压缩css插件
	concat = require('gulp-concat'),         // 合并js插件
	rename = require('gulp-rename'),         // 重命名插件
	uglify = require('gulp-uglify');         // 压缩合并js文件插件
	
// 创建一个less2css的任务
gulp.task('less2css', function () {   // 任务名自己定义，终端里面要输入 命令行执行， 例如 gulp less2css
	gulp.src('css/style.less')        // 找到要编译的less文件
	.pipe(less())                     // 执行less方法，让gulp-less插件执行编译操作
	.pipe(gulp.dest('style'))         // 把编译出来的css文件放到目的文件夹里面
	.pipe(rename({suffix: '.min'}))   // 把编译出来的css文件重命名，压缩版的中间都会带上.min
	.pipe(minifycss())                // 把重命名后的style.min.css文件执行压缩操作
	.pipe(gulp.dest('style'))         // 把压缩后的文件放到目的文件夹
})

// 创建js合并压缩的任务
gulp.task('jsopt', function () {
	gulp.src('js/*.js')                  // * 是通配符的意思，这里是把所有的js文件都找出来执行下面的操作
	.pipe(concat('main.js'))             // 把所有的js文件合并成一个新的js文件，文件名叫main
	.pipe(gulp.dest('minify'))           // 把生成出来的文件放到目的文件夹里边
	.pipe(rename({suffix: '.min'}))      // 把合并后的main.js文件重命名，这里我们要放两个版本，1.未压缩版，2.压缩版，压缩版中间加.min区别
	.pipe(uglify())                      // 把重命名后的main.min.js文件执行压缩操作
	.pipe(gulp.dest('minify'))           // 把压缩后的文件放到目的文件夹
})

gulp.task('default', ['less2css', 'jsopt']);             // 新建一个任务可以执行所有的任务，所有的任务放到数组里面， 当输入gulp default时，数组的任务同时执行

gulp.task('watch', ['less2css'], function () {           // 创建监听任务，终端输入gulp watch启动先执行数组里面的任务，紧接着回调函数
	gulp.watch('css/style.less', ['less2css']);          // 监听的文件一有改动，立马执行后面数组的任务
})
	

