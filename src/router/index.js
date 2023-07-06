import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFoundView.vue'

import VueNprogress from 'vue-nprogress';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter)
Vue.use(VueNprogress)
Vue.use(NProgress)

const page = (path) => import(`../views/${path}.vue`);

const routes = [
  {
    path: '*',
    component:  NotFound
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about.html',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: () => page('AboutView')
  },
  {
    path: '/foods',
    name: 'foods',
    component : () => import('../views/FoodsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
export default router
