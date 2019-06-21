import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  address: '当前地址',
  userInfo: {
    name: 'J灬JC'
  },
  token: 'wdwdqwfwefwefefwef',
  price: 50.10
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
