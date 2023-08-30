import * as dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import notify from "gulp-notify";

import rename from "gulp-rename";

export const scss = () => {
  return app.gulp
    .src(app.path.root.scssFolder + "styles.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", notify.onError()))
    .pipe(autoprefixer(["last 5 versions", "> 1%"]))
    .pipe(sourcemaps.write())
    .pipe(rename("main.css"))
    .pipe(app.gulp.dest(app.path.root.cssFolder));
};
