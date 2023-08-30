import gulp from "gulp";
import avif from "gulp-avif";
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";
import newer from "gulp-newer";

export const toAvif = () => {
  return app.gulp
    .src(app.path.src.imagesFolder + "**/*.*")
    .pipe(newer(app.path.root.assetsFolder + "avif"))
    .pipe(avif({ quality: 50 }))
    .pipe(app.gulp.dest(app.path.root.assetsFolder + "avif/"));
};

export const toWebp = () => {
  return app.gulp
    .src(app.path.src.imagesFolder + "**/*.*")
    .pipe(newer(app.path.root.assetsFolder + "webp"))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.root.assetsFolder + "webp/"));
};

export const toImageMin = () => {
  return app.gulp
    .src(app.path.src.imagesFolder + "**/*.*")
    .pipe(newer(app.path.root.assetsFolder + "img"))
    .pipe(imagemin())
    .pipe(app.gulp.dest(app.path.root.assetsFolder + "img/"));
};

export const images = gulp.parallel(toAvif, toWebp, toImageMin);

// gulp.task('sprite:build', function () {
//   var spriteData = gulp.src(path.build.icon).pipe(
//     spritesmith({
//       imgName: 'sprite.png',
//       cssName: '_sprite.scss',
//       algorithm: 'diagonal',
//       imgPath: '../img/sprite.png',
//     })
//   );
//   spriteData.img.pipe(gulp.dest(path.build.imgPath));
//   spriteData.css.pipe(gulp.dest(path.build.sassPath));
// });

// gulp.task('img:build', function () {
//   gulp
//     .src(path.build.img)
//     .pipe(
//       imagemin({
//         progressive: true,
//         svgoPlugins: [{ removeViewBox: false }],
//         use: [imageminPngquant()],
//         interlaced: true,
//       })
//     )
//     .pipe(gulp.dest(path.build.img))
//     .pipe(reload({ stream: true }));
// });
