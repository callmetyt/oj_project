module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "assets",
  indexPath: "index.html",
  filenameHashing: true,
  lintOnSave: false,
  pages: {
    index: {
      entry: "src/pages/index/main.js",
      template: "src/pages/index/index.html",
      filename: "index.html",
      title: "index",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 8033,
    https: false,
  },
};