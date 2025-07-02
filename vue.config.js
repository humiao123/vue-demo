const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-demo/' : '/',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].minify = false // 关闭 HTML 压缩（方便调试）
      return args
    })
  }
})
