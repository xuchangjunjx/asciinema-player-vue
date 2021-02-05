module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("cast")
      .test(/\.cast$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  }
};
