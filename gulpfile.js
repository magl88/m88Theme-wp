import gulp from "gulp";
import { path, webServerProxyURL, themeName, prodFolder } from "./config/gulp-settings.js";

// set global const app
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  isWebP: !process.argv.includes("--nowebp"),
  isImgOpt: !process.argv.includes("--noimgopt"),
  isFontsReW: process.argv.includes("--rewrite"),
  gulp: gulp,
  path: path,
  webServerProxyURL: webServerProxyURL,
  themeName: themeName,
  prodFolder: prodFolder,
};

// import gulp tasks
import { webServer } from "./config/gulp-tasks/webserver.js";
import { watch } from "./config/gulp-tasks/watch.js";

import { scss } from "./config/gulp-tasks/scss.js";
import { images } from "./config/gulp-tasks/images.js";
import { svg } from "./config/gulp-tasks/svg.js";
import { favicons } from "./config/gulp-tasks/favicons.js";

import { minCss } from "./config/gulp-tasks/css.js";
import { concatLibs, concatScripts, minJS } from "./config/gulp-tasks/js.js";
import { createProd, clearProd } from "./config/gulp-tasks/prod.js";
import { createBuild, clearBuild } from "./config/gulp-tasks/build.js";
import { ftp } from "./config/gulp-tasks/ftp.js";
import { clearPhp, clearAll, delEmptyFiles, delAssets } from "./config/gulp-tasks/clear.js";

const start = gulp.series(
  delAssets,
  gulp.parallel(concatLibs, concatScripts, favicons, scss, images, svg),
  gulp.parallel(webServer, watch)
);

const dev = gulp.series(gulp.parallel(webServer, watch));

const buildCss = gulp.series(scss, minCss);
const buildJS = gulp.series(concatLibs, concatScripts, minJS);
const buildImgSvg = gulp.parallel(images, svg);
const build = gulp.series(clearBuild, gulp.parallel(buildCss, buildJS, buildImgSvg), createBuild);
const buildMin = gulp.series(gulp.parallel(buildCss, buildJS), createBuild);
const clearBuildEmpty = gulp.series(clearPhp, delEmptyFiles);

const prod = gulp.series(clearProd, build, createProd, clearBuild);

const buildToFTP = gulp.series(build, ftp, clearBuild);

gulp.task("default", start);
gulp.task("dev", dev);
gulp.task("build", build);
gulp.task("buildMin", buildMin);
gulp.task("prod", prod);
gulp.task("clearBuild", clearBuild);
gulp.task("clearProd", clearProd);
gulp.task("ftp", buildToFTP);
gulp.task("test", clearBuildEmpty);
