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
  ,
  {
    path: '/foods/:id',
    name: 'foodsdetail',
    component : () => page('FoodsDetailView')
  },
  {
    path: '*',
    name : "404",
    component:  NotFound
  },
  {
    path: '/keranjang',
    name: 'keranjang',
    component : () => page('KeranjangView')
  },
  {
    path: '/Pesanan/sukses',
    name: 'Pesanansukses',
    component : () => page('PesananSuksesView')
  },
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
