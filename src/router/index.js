import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 引入公共布局
import Layout from '../components/Layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/teaching-system',
    meta: { hasChildren: false, title: '' },
    children: [
      {
        path: 'teaching-system',
        name: 'TeachingSystem',
        component: Home,
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/user',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login/login.vue'),
    meta: { hasChildren: false, title: '登录' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
