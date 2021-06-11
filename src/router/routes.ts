import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: { title: 'Home' }
  },
  {
    name: 'about',
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/:path(.*)',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]
export default routes
