const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = {
  configureWebpack: { devtool: "source-map" },
  publicPath: '/',
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.symlinks(true);
    config.resolve.alias
      .set("@", resolve("src"))
  },
  css: {
    loaderOptions: {
      less: {
        prependData: `@import "@/assets/style/var.less";`,
      }
    },
  },
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    host: "127.0.0.1",
    port: 3000,
    proxy: {
      "/dev-api": {
        target: "http://192.168.1.68:8088/",
        pathRewrite: {
          "^/dev-api": "/",
        },
        changeOrigin: true,
        ws: true,
      },
    },
  }
};
