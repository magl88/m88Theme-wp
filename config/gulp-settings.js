import * as nodePath from "path";
// const rootFolder = nodePath.basename(nodePath.resolve());

const rootFolder = "./";
const buildFolder = `./build/`;
const srcFolder = "./src/";

export const path = {
  nodePath: nodePath,
  rootFolder: rootFolder,
  root: {
    tempFolder: `${rootFolder}.temp/`,
    assetsFolder: `${rootFolder}assets/`,
    configFolder: `${rootFolder}config/`,
    cssFolder: `${rootFolder}css/`,
    incFolder: `${rootFolder}inc/`,
    jsFolder: `${rootFolder}js/`,
    pagesFolder: `${rootFolder}pages/`,
    scssFolder: `${rootFolder}scss/`,
    sectionsFolder: `${rootFolder}sections/`,
    srcFolder: `${rootFolder}src/`,
  },
  buildFolder: buildFolder,
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },

  srcFolder: srcFolder,
  src: {
    fontsFolder: `${srcFolder}fonts/`,
    imagesFolder: `${srcFolder}images/`,
    faviconsFolder: `${srcFolder}favicons/`,
    libsFolder: `${srcFolder}libs/`,
    svgFolder: `${srcFolder}svg/`,
  },
};

export const configFTP = {
  host: "",
  user: "",
  password: "",
  parallel: 5,
  ftpPath: "",
};

export const webServerSettings = {
  proxyURL: "", // local url "https://demo.loc/"
};

export const themeName = "m88 Theme";
export const prodFolder = "../m88Theme/";
