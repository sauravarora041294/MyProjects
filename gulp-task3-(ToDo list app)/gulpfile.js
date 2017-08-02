var devpath = "dev/";
var hbs     = devpath+"hbs/"
var proPath = "prod/";
var hbsfile = [hbs+'heading.hbs',hbs+'table.hbs',hbs+'link.hbs',hbs+'editform.hbs',hbs+'form.hbs'];


var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sassLint     = require('gulp-sass-lint');
var minifyCss    = require('gulp-cssnano');

var coffee       = require('gulp-coffee')
var coffeelint   = require('gulp-coffeelint');
var uglify       = require('gulp-uglify');

var handlebars   = require('gulp-handlebars');
var wrap         = require('gulp-wrap');
var declare      = require('gulp-declare');

var gulpSequence = require('gulp-sequence')
var concat       = require('gulp-concat')
var del          = require('del');

var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var browserify   = require('browserify-incremental');
var uglify       = require('gulp-uglify'); 


gulp.task('scsslint', function () {
  return gulp
    .src(devpath+'scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
gulp.task('scss', ["scsslint"], function () {
  return gulp
  	.src(devpath+'scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(proPath+'css'));
});
gulp.task('coffeelint', function () {
  return gulp
    .src(devpath+'coffee/**/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
});
gulp.task('coffee2', ["coffeelint"], function() {
  return gulp
    .src(devpath+'coffee/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(uglify())
    .pipe(gulp.dest(proPath+'js'));
});


gulp.task('coffee', function(){
  let bundle = browserify({
      entries: devpath+'coffee/app.coffee',
      paths: [devpath+"coffee"],
      transform: [ 'coffeeify' ],
      extensions: [ '.coffee' ]
    }).bundle();

    return bundle
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(proPath+"js"))
});


gulp.task('hbs', function(){
  return gulp
    .src(hbsfile)
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat("hbs.js"))
    .pipe(gulp.dest(proPath+'hbs'));
});

gulp.task('clean:prod', function() {
  return del.sync(['prod']);
})
gulp.task('html', function() {
  return gulp
     .src(devpath+'**/*.html')
     .pipe(gulp.dest(proPath));
});
gulp.task('build', gulpSequence('clean:prod', 'scss', 'coffee', 'hbs', 'html', 'watch'));

gulp.task('watch', function() {
    gulp.watch(devpath+'hbs/**/*.hbs', ['hbs']);
    gulp.watch(devpath+'coffee/**/*.coffee', ['coffee']);
    gulp.watch(devpath+'scss/**/*.scss', ['scss']);
    gulp.watch(devpath+'**/*.html', ['html']);
});
