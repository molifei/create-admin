import Vue from 'vue'
import Vuex from 'vuex'
import $tools from '@/utils/tools'

Vue.use(Vuex)
Vue.config.devtools = true;

export default new Vuex.Store({
  state: {
    user: $tools.getS('user', 2) || '',
    userName: $tools.getS('userName', 2) || '',
    token: $tools.getS('token', 2) || '',
    slideStatus: $tools.getS('slideStatus', 2) || false
  },
  getters: {},
  mutations: {
    setUserState(state, user) {
      state.user = user.user
      state.userName = user.userName
      state.token = user.token
    },
    setSlideStatus(state, status) {
      state.slideStatus = status
    },
    logout(state) {
      state.user = ''
      state.userName = ''
      state.token = ''

      $tools.delA(2)
      console.log(1)
    }
  },
  actions: {},
  modules: {}
})
