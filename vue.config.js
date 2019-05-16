// https://cli.vuejs.org/config/
module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('iview-loader')
      .loader('iview-loader')
      .options({
        prefix: true
      })
  },
  lintOnSave: true
}
