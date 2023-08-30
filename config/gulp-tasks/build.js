import gulp from "gulp";
import { deleteAsync } from "del";
import clip from "gulp-clip-empty-files";
import phpMinifier from "@cedx/php-minifier";
import strip from "gulp-strip-comments";
import replace from "gulp-replace";

export const phpBuild = () => {
  return (
    app.gulp
      .src([app.path.rootFolder + "**/*.php", "!node_modules/**", "!build/**"])
      // .pipe(phpMinifier())
      // .pipe(strip({ safe: true }))
      .pipe(clip())
      .pipe(app.gulp.dest(app.path.buildFolder))
  );
};

export const setMinPath = () => {
  return app.gulp
    .src([app.path.buildFolder + "inc/functions/add-js.php", app.path.buildFolder + "inc/functions/add-styles.php"])
    .pipe(replace("libs.js", "libs.min.js"))
    .pipe(replace("scripts.js", "scripts.min.js"))
    .pipe(replace("main.js", "main.min.js"))
    .pipe(replace("main.css", "main.min.css"))
    .pipe(app.gulp.dest(app.path.buildFolder + "inc/functions/"));
};

export const renameTheme = () => {
  return app.gulp
    .src(app.path.buildFolder + "style.css")
    .pipe(replace("m88 Theme dev", app.themeName))
    .pipe(app.gulp.dest(app.path.buildFolder));
};

export const jsBuild = () => {
  return app.gulp.src(app.path.root.jsFolder + "*.js").pipe(app.gulp.dest(app.path.buildFolder + "js"));
};

export const assetsBuild = () => {
  return app.gulp.src(app.path.root.assetsFolder + "**/*").pipe(app.gulp.dest(app.path.buildFolder + "assets"));
};

export const cssBuild = () => {
  return app.gulp.src(app.path.root.cssFolder + "**/*").pipe(app.gulp.dest(app.path.buildFolder + "css"));
};

export const themeFiles = () => {
  return app.gulp
    .src([app.path.rootFolder + "style.css", app.path.rootFolder + "screenshot.png"])
    .pipe(app.gulp.dest(app.path.buildFolder));
};

export const createBuild = gulp.parallel(
  cssBuild,
  assetsBuild,
  jsBuild,
  gulp.series(phpBuild, setMinPath),
  gulp.series(themeFiles, renameTheme)
);

export const clearBuild = () => deleteAsync(app.path.buildFolder, { force: true });
