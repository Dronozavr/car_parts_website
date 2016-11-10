'use strict';

var gulp = require("gulp");
var concat = require("gulp-concat");
var uglifyjs = require("gulp-uglifyjs");
var uglifycss = require("gulp-uglifycss");
var sass = require("gulp-sass");
var livereload = require('gulp-livereload');

gulp.task("js" , function(){
	gulp.src([
			'./app/assets/src/js/module.js',
			'./app/assets/src/js/*.js'
		])
		.pipe(concat('all.js'))
		.pipe(uglifyjs())
		.pipe(gulp.dest('./app/assets/dist/js'))
		.pipe(livereload());
});


gulp.task("css" , function(){
	gulp.src('./app/assets/src/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(uglifycss())
		.pipe(gulp.dest('./app/assets/dist/css'))
		.pipe(livereload());
});

gulp.task("watch", function(){
	livereload.listen({
		reloadPage: "./app/index.html"	
	});
	gulp.watch('./app/assets/src/js/*.js', ['js']);
	gulp.watch('./app/assets/src/sass/*.scss', ['css']);
});

gulp.task("default", ["watch", "js", "css"]);
