import { deleteAsync } from "del";
import clip from "gulp-clip-empty-files";
import phpMinifier from "@cedx/php-minifier";
import strip from "gulp-strip-comments";

export const createProd = () => {
  return (
    app.gulp
      .src(app.path.buildFolder + "**/*")
      // .pipe(phpMinifier())
      // .pipe(strip({ safe: true }))
      // .pipe(clip())
      .pipe(app.gulp.dest(app.prodFolder))
  );
};

export const clearProd = () => deleteAsync(app.prodFolder, { force: true });
