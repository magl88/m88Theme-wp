// https://stackoverflow.com/questions/22212278/gulp-task-to-delete-empty-files

import gulp from "gulp";
import { deleteAsync } from "del";
import clip from "gulp-clip-empty-files";
import phpMinifier from "@cedx/php-minifier";
import strip from "gulp-strip-comments";
import removeEmptyLines from "gulp-remove-empty-lines";
import tap from "gulp-tap";
import fs from "fs";

// export const clearPhp = () => {
//   return app.gulp.src(app.path.buildFolder + "**/*").pipe(
//     tap(function (file) {
//       if (file.stat.size === 0) {
//         fs.unlinkSync(file);
//       }
//     })
//   );
// };

export const delEmptyFiles = () => {
  return app.gulp.src(app.path.buildFolder + "**/*.*").pipe(
    tap(function (file) {
      if (file.stat.size === 0) {
        fs.unlinkSync(file.path);
      }
    })
  );
};

export const clearPhp = () => {
  return (
    app.gulp
      .src([
        app.path.buildFolder + "**/*.php",
        `!${app.path.buildFolder}inc/blocks/head.php`,
        `!${app.path.buildFolder}assets`,
        `!${app.path.buildFolder}pages`,
      ])
      // .pipe(phpMinifier())
      .pipe(strip({ safe: false, space: true }))
      .pipe(removeEmptyLines())
      // .pipe(clip())
      .pipe(app.gulp.dest(app.path.buildFolder))
  );
};

export const clearAll = () => {
  return (
    app.gulp
      .src([
        app.path.buildFolder + "**/*.*",
        `!${app.path.buildFolder}**/*.png`,
        `!${app.path.buildFolder}inc/blocks/head.php`,
        `!${app.path.buildFolder}style.css`,
        `!${app.path.buildFolder}assets`,
        `!${app.path.buildFolder}pages`,
      ])
      // .pipe(phpMinifier())
      .pipe(strip({ safe: false, space: true }))
      .pipe(removeEmptyLines())
      // .pipe(clip())
      .pipe(app.gulp.dest(app.path.buildFolder))
  );
};

export const delAssets = () => deleteAsync(app.path.root.assetsFolder, { force: true });
