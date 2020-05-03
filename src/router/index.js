import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    meat: {
      keepAlive: true // 需要被缓存
    },
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
    path: '/user',
    name: 'User',
    component: () => import('../views/User'),
    children: [
      {
        path: 'login',
        component: () => import('../views/User/Login')
      },
      {
        path: 'register',
        component: () => import('../views/User/Register')
      },
      {
        path: '',
        redirect: 'login'
      }
    ]
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
    path: '/read/:id',
    name: 'Read',
    component: () => import('../views/Read')
  },
  {
    path: '/catalog/:id',
    name: 'Catalog',
    component: () => import('../views/Catalog')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }

})

export default router
