import { scss } from "./scss.js";
import { images } from "./images.js";
import { svg } from "./svg.js";
import { webServerCreate } from "./webserver.js";
import { favicons } from "./favicons.js";
import { concatLibs, concatScripts, minJS } from "./js.js";

export const watch = () => {
  app.gulp.watch(app.path.rootFolder + "**/*.php").on("all", webServerCreate.reload);
  app.gulp.watch(app.path.root.cssFolder + "**/*").on("all", webServerCreate.reload);
  app.gulp.watch(app.path.root.jsFolder + "**/*").on("all", webServerCreate.reload);

  app.gulp.watch(app.path.root.jsFolder + "libs/**/*").on("all", app.gulp.series(concatLibs));

  app.gulp.watch(app.path.root.jsFolder + "scripts/**/*").on("all", app.gulp.series(concatScripts));

  app.gulp.watch(app.path.root.scssFolder + "**/*").on("all", app.gulp.series(scss));
  app.gulp.watch(app.path.src.imagesFolder + "**/*").on("all", app.gulp.series(images));
  app.gulp.watch(app.path.src.svgFolder + "**/*").on("all", app.gulp.series(svg));
  app.gulp.watch(app.path.src.faviconsFolder + "**/*").on("all", app.gulp.series(favicons));
};
