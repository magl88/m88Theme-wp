import newer from "gulp-newer";

export const favicons = () => {
  return app.gulp
    .src(app.path.src.faviconsFolder + "**/*.*")
    .pipe(newer(app.path.root.assetsFolder + "favicons"))
    .pipe(app.gulp.dest(app.path.root.assetsFolder + "favicons/"));
};
