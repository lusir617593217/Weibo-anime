module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 设置页面根元素字体大小，一般默认就好
      propList: ['*']
    }
  }
}
