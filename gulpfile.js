const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const preproc = require('gulp-sass');
const babel   = require('gulp-babel');

const config = {
    src: './src',
    css: {
        watch: '/precss/**/*.sass',
        src: '/precss/main.sass',
        dest: '/css'
    },

    js: {
        src: '/js/*.js',
        dest: '/es6'
    },

    html: {
        src: '/index.html'
    }
};

gulp.task("es6", function () {
    return gulp.src(config.src + config.js.src)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(config.src + config.js.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('css', function () {
    gulp.src(config.src + config.css.src)
            .pipe(sourcemaps.init())
            .pipe(preproc())
            .pipe(gcmq())
            .pipe(autoprefixer({
                browsers: ['> 0.1%'],
                cascade: false
            }))
            /*.pipe(cleanCSS({
                level: 2
            }))*/
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(config.src + config.css.dest))
            .pipe(browserSync.reload({
                stream: true
            }));
});


gulp.task('build',  function() {

    const img = gulp.src('src/img/**/*')
          .pipe(gulp.dest('dist/img'));

    const audio = gulp.src('src/audio/**/*')
         .pipe(gulp.dest('dist/audio'));

    const video = gulp.src('src/video/**/*')
         .pipe(gulp.dest('dist/video'));

    const buildFonts = gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
        .pipe(gulp.dest('dist/fonts'));

    const buildJs = gulp.src('src/es6/*.js') // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/js'));

    const libsjs = gulp.src('src/libs/js/*.js') // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/js_libs'));

    const libscss = gulp.src('src/libs/css/*.css') // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/css_libs'));

    const buildCsso = gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css'));

    const buildHtml = gulp.src('src/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('dist'));

});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch(config.src + config.css.watch, ['css']);
    gulp.watch(config.src + config.js.src, ['es6']);
    gulp.watch(config.src + config.html.src, browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: config.src
        },
		tunnel: true
    });
});