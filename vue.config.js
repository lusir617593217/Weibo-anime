module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://manhua.weibo.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
