'use strict';

var gulp = require('gulp')
    , BrowserSync = require('browser-sync').create()
    , htmlInjector = require("bs-html-injector");


gulp.task('css', function () {
    return gulp.src("styles.css").pipe(BrowserSync.stream());
});

gulp.task('serve', function () {
    BrowserSync.use(htmlInjector, {
        files: "*.html"
    });
    BrowserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("styles.css", ['css']);
    gulp.watch("main.js", BrowserSync.reload);
    gulp.watch("*.html", htmlInjector);
});