const gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass')); 
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concatcss = require('gulp-concat-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');


function scss() {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(postcss([ cssnano() ]))
        .pipe(gulp.dest('dist/css'));
}
function js() {
    return gulp.src('app/script.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('dist'));
}


exports.default = function() {
    gulp.watch('app/scss/*.scss', scss);
    gulp.watch('app/script.js', js);
};