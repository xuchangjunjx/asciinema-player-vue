function proxy(alias, url) {
  let key = `^/${alias}`;
  return {
    [key]: {
      target: url,
      changeOrigin: true,
      pathRewrite: {
        [key]: ""
      }
    }
  };
}
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/asciinema-player-vue/" : "/",
  outputDir: "docs",
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      minimize: true
    }
  },
  devServer: {
    proxy: {
      // demo中我以/cast开头,自己对应修改 换成自己的服务地址
      ...proxy("cast", "localhost:8080/cast")
    }
  },
  chainWebpack: config => {
    config.module
      .rule("cast")
      .test(/\.cast$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  }
};
