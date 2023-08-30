import gulp from "gulp";
import svgSprite from "gulp-svg-sprite";
import imagemin from "gulp-imagemin";
import rename from "gulp-rename";
import newer from "gulp-newer";
import svgmin from "gulp-svgmin";
import cheerio from "gulp-cheerio";
import replace from "gulp-replace";

export const toSvgSprite = () => {
  return (
    app.gulp
      .src(app.path.src.svgFolder + "**/*.svg")
      .pipe(newer(app.path.root.assetsFolder + "svg-sprite"))
      // minify svg
      .pipe(
        svgmin({
          js2svg: {
            pretty: true,
          },
        })
      )
      // remove all fill, style and stroke declarations in out shapes
      .pipe(
        cheerio({
          run: function ($) {
            $("[fill]").removeAttr("fill");
            $("[stroke]").removeAttr("stroke");
            $("[style]").removeAttr("style");
          },
          parserOptions: { xmlMode: true },
        })
      )
      // cheerio plugin create unnecessary string '&gt;', so replace it.
      .pipe(replace("&gt;", ">"))
      // build svg sprite
      .pipe(
        svgSprite({
          mode: {
            symbol: {
              sprite: "../sprite.svg",
              example: true,
              render: {
                scss: {
                  dest: "../../../scss/base/_sprite.scss",
                  template: app.path.root.configFolder + "_sprite_template.scss",
                },
              },
            },
          },
        })
      )
      .pipe(app.gulp.dest(app.path.root.assetsFolder + "svg-sprite/"))
  );
};

export const toPHP = () => {
  return (
    app.gulp
      .src(app.path.src.svgFolder + "**/*.svg")
      .pipe(newer(app.path.root.assetsFolder + "svg-php"))
      // minify svg
      .pipe(
        svgmin({
          js2svg: {
            pretty: true,
          },
        })
      )
      // remove all fill, style and stroke declarations in out shapes
      .pipe(
        cheerio({
          run: function ($) {
            $("[fill]").removeAttr("fill");
            $("[stroke]").removeAttr("stroke");
            $("[style]").removeAttr("style");
          },
          parserOptions: { xmlMode: true },
        })
      )
      // cheerio plugin create unnecessary string '&gt;', so replace it.
      .pipe(replace("&gt;", ">"))
      .pipe(
        rename(function (path) {
          path.extname = ".php";
        })
      )
      .pipe(app.gulp.dest(app.path.root.assetsFolder + "svg-php/"))
  );
};

export const minSVG = () => {
  return (
    app.gulp
      .src(app.path.src.svgFolder + "**/*.svg")
      .pipe(newer(app.path.root.assetsFolder + "svg"))
      // minify svg
      .pipe(
        svgmin({
          js2svg: {
            pretty: true,
          },
        })
      )
      // remove all fill, style and stroke declarations in out shapes
      .pipe(
        cheerio({
          run: function ($) {
            $("[fill]").removeAttr("fill");
            $("[stroke]").removeAttr("stroke");
            $("[style]").removeAttr("style");
          },
          parserOptions: { xmlMode: true },
        })
      )
      // cheerio plugin create unnecessary string '&gt;', so replace it.
      .pipe(replace("&gt;", ">"))
      .pipe(app.gulp.dest(app.path.root.assetsFolder + "svg/"))
  );
};

export const svg = gulp.parallel(toSvgSprite, minSVG, toPHP);
