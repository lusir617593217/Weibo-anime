import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/cate',
    name: 'Cate',
    component: () => import('../views/Cate')
  },
  {
    path: '/daypub',
    name: 'Daypub',
    component: () => import('../views/Daypub')
  },
  {
    path: '/end',
    name: 'End',
    component: () => import('../views/End')
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('../views/More')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My')
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import('../views/Rank')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
