import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/hall', component: () => import('pages/hall/Hall') },
    { path: '/order', component: () => import('pages/order/Order') },
    { path: '/profile', component: () => import('pages/profile/Profile') },
    { path: '/search', component: () => import('pages/search/Search') }
  ]
})
