var gulp = require('gulp'),
    gutil = require('gulp-util'),
    semanticWatch = require('./semantic/tasks/watch'),
    semanticBuild = require('./semantic/tasks/build'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    newer = require('gulp-newer'),
    eslint = require('gulp-eslint'),
    beep = require('beepbeep');

var browserSync = require('browser-sync').create();

function ignore(s) {
    s.on('error', function() {
        beep()
        gutil.log.apply(this, arguments)
        s.end()
    })
    return s
}

gulp.task('default', ['watch', 'semantic-watch', 'browser-sync']);

gulp.task('watch', ['process-resources'], function() {
    gulp.watch([
        "target/webapp/**"
    ]).on('change', browserSync.reload);

    gulp.watch([
        "public/assets/js/*.js",
        "public/assets/js/*.jsx"
    ], ['process-app-assets']).on('change', function() {});

    gulp.watch([
        "public/assets/js/pages/*.js",
        "public/assets/js/pages/*.jsx",
    ], ['process-page-assets']).on('change', function() {});

    gulp.watch([
        "public/assets/css/*.css",
    ], ['process-css']).on('change', function() {});

    gulp.watch([
        "public/*.html",
    ], ['process-html']).on('change', function() {});

    gulp.watch([
        "semantic/dist/**/*.css",
        "semantic/dist/**/*.js",
    ], ['process-semantic']).on('change', function() {});
});

gulp.task('semantic-watch', 'Watch for semantic changes', semanticWatch);
gulp.task('semantic-build', 'Build Semantic UI', semanticBuild);

gulp.task('browser-sync', ['process-resources'], function() {
    browserSync.init({
        server: {
            baseDir: "target/webapp"
        }
    });
});

gulp.task('process-resources', [
    'process-semantic',
    'process-vendor-assets',
    'process-app-assets',
    'process-page-assets',
    'process-html',
    'process-css',
    'copy-music',
]);

gulp.task('process-semantic', function() {
    return gulp
        .src([
            'semantic/dist/**/*',
        ])
        .pipe(gulp.dest('target/webapp/assets/semantic'));
});

// Copy assets/js/vendor/* to assets/js
gulp.task('process-vendor-assets', function() {
    return gulp
        .src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/react/dist/react.js',
            'node_modules/react-dom/dist/react-dom.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('target/webapp/assets/js'));
});

// Concatenate our app sources to assets/js
gulp.task('process-app-assets', function() {
    return gulp.src([
            'public/assets/js/*.js',
            'public/assets/js/*.jsx',
        ])
        .pipe(ignore(babel()))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('target/webapp/assets/js'));
});

// Copy per-page scripts to assets/js/pages
gulp.task('process-page-assets', function() {
    return gulp.src([
            'public/assets/js/pages/*.js',
            'public/assets/js/pages/*.jsx',
        ])
        .pipe(ignore(babel()))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(gulp.dest('target/webapp/assets/js/pages'));
});

// Copy HTML to target root
gulp.task('process-html', function() {
    return gulp.src([
            "public/index.html"
        ])
        .pipe(gulp.dest('target/webapp'));
});

// Copy stylesheets to assets/css
gulp.task('process-css', function() {
    return gulp.src([
            "public/assets/css/*.css"
        ])
        .pipe(gulp.dest('target/webapp/assets/css'));
});

gulp.task('copy-music', function() {
    return gulp.src([
            'music/*.ogg',
            'music/*.mp3'
        ])
        .pipe(gulp.dest('target/webapp/music'))
});