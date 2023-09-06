import { create as browserSyncCreate } from "browser-sync";

export const webServerCreate = browserSyncCreate();

export const webServer = () =>
  webServerCreate.init({
    logPrefix: "browserSync",
    https: true,
    proxy: app.webServerProxyURL,
    // reloadDelay: 200,
    // online: true,
    // tunnel: true,
    // tunnel: "my-private-site",
    // online: true,
    // host: 'localhost',
    // logLevel: "debug",
  });
