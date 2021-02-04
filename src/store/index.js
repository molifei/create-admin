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
    slideStatus: $tools.getS('slideStatus', 2) || false,
    isFixHeader: $tools.getS('isFixHeader', 2) || false,
  },
  getters: {},
  mutations: {
    // 设置用户信息
    setUserState(state, user) {
      state.user = user.user
      state.userName = user.userName
      state.token = user.token
    },

    // 设置侧边栏收起状态
    setSlideStatus(state, status) {
      state.slideStatus = status
    },

    // 退出登录
    logout(state) {
      state.user = ''
      state.userName = ''
      state.token = ''

      $tools.delA(2)
    },

    // 是否固定头部
    setIsFixHeader(state, status) {
      state.isFixHeader = status
    },

  },
  actions: {},
  modules: {}
})
