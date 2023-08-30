import rename from "gulp-rename";
import cleanCSS from "gulp-clean-css";
import groupCssMediaQueries from "gulp-group-css-media-queries";

export const minCss = () => {
  return app.gulp
    .src(app.path.root.cssFolder + "main.css")
    .pipe(groupCssMediaQueries())
    .pipe(cleanCSS())
    .pipe(
      rename(function (path) {
        path.extname = ".min.css";
      })
    )
    .pipe(app.gulp.dest(app.path.root.cssFolder));
};
