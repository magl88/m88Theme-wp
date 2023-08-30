import { configFTP } from "../gulp-settings.js";
import vinylFTP from "vinyl-ftp";

export const ftp = () => {
  // configFTP.log = util.log;
  const ftpConnect = vinylFTP.create(configFTP);
  return (
    app.gulp
      .src(app.path.buildFolder + "**", { buffer: false })
      // .pipe(
      //   app.plugins.plumber(
      //     app.plugins.notify.onError({
      //       title: "FTP",
      //       message: "Error: <%= error.message %>",
      //     })
      //   )
      // )
      // .pipe(conn.newer("/public_html"))
      .pipe(ftpConnect.rmdir(configFTP.ftpPath))
      .pipe(ftpConnect.dest(configFTP.ftpPath))
  );
};
