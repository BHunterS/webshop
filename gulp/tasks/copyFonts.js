export const copyFonts = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/**/*.*`)
        .pipe(app.gulp.dest(app.path.build.fonts))
}