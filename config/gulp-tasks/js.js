import sourcemaps from "gulp-sourcemaps";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import fs from "fs";
import getFolderSize from "get-folder-size";

export const concatLibs = () => {
  const sizelibs = getFolderSize.loose(app.path.root.jsFolder + "libs/");

  if (sizelibs === 0) {
    fs.writeFile(app.path.root.jsFolder + "libs.js", "", function () {
      console.log("libs clear");
    });
    return;
  }

  return app.gulp
    .src(app.path.root.jsFolder + "libs/**/*")
    .pipe(sourcemaps.init())
    .pipe(concat("libs.js"))
    .pipe(sourcemaps.write())
    .pipe(app.gulp.dest(app.path.root.jsFolder));
};

export const concatScripts = () => {
  const sizescripts = getFolderSize.loose(app.path.root.jsFolder + "scripts/");

  if (sizescripts === 0) {
    fs.writeFile(app.path.root.jsFolder + "scripts.js", "", function () {
      console.log("scripts clear");
    });
    return;
  }

  return app.gulp
    .src(app.path.root.jsFolder + "scripts/**/*")
    .pipe(sourcemaps.init())
    .pipe(concat("scripts.js"))
    .pipe(sourcemaps.write())
    .pipe(app.gulp.dest(app.path.root.jsFolder));
};

export const minJS = () => {
  // await setTimeout(() => {}, 1500);
  return (
    app.gulp
      .src(app.path.root.jsFolder + "{main,scripts,libs}.js")
      // .src([
      //   app.path.root.jsFolder + "main.js",
      //   app.path.root.jsFolder + "scripts.js",
      //   app.path.root.jsFolder + "libs.js",
      // ])
      // .pipe(concatLibs())
      // .pipe(concatScripts())
      .pipe(uglify())
      .pipe(
        rename(function (path) {
          path.extname = ".min.js";
        })
      )
      .pipe(app.gulp.dest(app.path.root.jsFolder))
  );
};
