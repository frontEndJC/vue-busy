import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/hall', component: () => import('pages/hall/Hall'), meta: {shouldLogin: true} },
    { path: '/order', component: () => import('pages/order/Order'), meta: {shouldLogin: true} },
    { path: '/profile', component: () => import('pages/profile/Profile') },
    {
      path: '/login',
      component: () => import('pages/login/login'),
      children: [
        {
          path: '',
          redirect: 'sms'
        },
        {
          path: 'sms',
          component: () => import('pages/login/children/Sms')
        },
        {
          path: 'vercode',
          name: 'VerCode',
          component: () => import('pages/login/children/VerCode')
        }
      ]
    },
    {
      path: '/register',
      component: () => import('pages/register/Register')
    },
    { path: '/search', component: () => import('pages/search/Search') },
    { path: '/info', component: () => import('pages/info/info'), meta: {shouldLogin: true} },
    { path: '/wallet', component: () => import('pages/wallet/Wallet'), meta: {shouldLogin: true} }
  ]
})
