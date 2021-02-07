module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      minimize: true
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule("cast")
      .test(/\.cast$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  }
};
