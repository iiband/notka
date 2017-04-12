var gulp = require('gulp'),
    gutil = require('gulp-util'),
    semanticWatch = require('./semantic/tasks/watch'),
    semanticBuild = require('./semantic/tasks/build'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    newer = require('gulp-newer'),
    eslint = require('gulp-eslint'),
    beep = require('beepbeep');

function ignore(s) {
    s.on('error', function() {
        beep()
        gutil.log.apply(this, arguments)
        s.end()
    })
    return s
}

gulp.task('default', [ 'process-resources' ] );

gulp.task('semantic-build', 'Build Semantic UI', semanticBuild);

gulp.task('process-resources', [
    'process-html',
    'copy-music',
]);

// Copy HTML to target root
gulp.task('process-html', function() {
    return gulp.src([
            "public/index.html"
        ])
        .pipe(gulp.dest('target/webapp'));
});

gulp.task('copy-music', function() {
    return gulp.src([
            'music/*.ogg',
            'music/*.mp3'
        ])
        .pipe(gulp.dest('target/webapp/music'))
});