// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import { get, post } from './api/http'

import 'css/reset.css'
import 'css/border.css'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.prototype.$post = post
Vue.prototype.$get = get

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.shouldLogin)) {
    // 验证token是否可以使用
    if (store.state.userInfo) {
      next() // 正常跳转
    } else {
      next({path: '/login', query: {url: to.path}}) // 跳转到登录页面后，会携带对应的url参数 这个url就是登录成功后要跳转的path
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
