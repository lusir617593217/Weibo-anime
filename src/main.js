import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 移入公共样式
import './assets/style/base.scss'
// 引入 lib-flexible 自动转换 rem 单位
import 'lib-flexible'
// 引入 swiper 样式
import 'swiper/css/swiper.min.css'
// 图片来加载插件
import VueLazyload from 'vue-lazyload'
// vant 库
import { Dialog } from 'vant'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('@/assets/images/lazy.gif'),
  attempt: 1
})

Vue.use(Dialog)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
