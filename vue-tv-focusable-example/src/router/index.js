import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Example',
    component: () => import(/* webpackChunkName: "about" */ '../views/example.vue')
  },
  {
    path: '/Example1',
    name: 'Example1',
    component: () => import(/* webpackChunkName: "about" */ '../views/example1.vue')
  },
  {
    path: '/Example2',
    name: 'Example2',
    component: () => import(/* webpackChunkName: "about" */ '../views/example2.vue')
  },
  {
    path: '/Example3',
    name: 'Example3',
    component: () => import(/* webpackChunkName: "about" */ '../views/example3.vue')
  },
  {
    path: '/Example4',
    name: 'Example4',
    component: () => import(/* webpackChunkName: "about" */ '../views/example4.vue')
  },
  {
    path: '/Example5',
    name: 'Example5',
    component: () => import(/* webpackChunkName: "about" */ '../views/example5.vue')
  },
  {
    path: '/Example6',
    name: 'Example6',
    component: () => import(/* webpackChunkName: "about" */ '../views/example6.vue')
  },
  {
    path: '/Example8',
    name: 'Example8',
    component: () => import(/* webpackChunkName: "about" */ '../views/example8.vue')
  },
  {
    path: '/tv-detail8',
    name: 'tvDetail8',
    component: () => import(/* webpackChunkName: "about" */ '../views/example8-detail.vue')
  },
  {
    path: '/Example9',
    name: 'Example9',
    component: () => import(/* webpackChunkName: "about" */ '../views/example9.vue')
  },
  {
    path: '/Example10',
    name: 'Example10',
    component: () => import(/* webpackChunkName: "about" */ '../views/example10.vue')
  },
  {
    path: '/Example11',
    name: 'Example11',
    component: () => import(/* webpackChunkName: "about" */ '../views/example11.vue')
  },
  {
    path: '/Example12',
    name: 'Example12',
    component: () => import(/* webpackChunkName: "about" */ '../views/example12.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
