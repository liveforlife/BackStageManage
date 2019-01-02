import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
			userListState:1
  },
  mutations: {
			changeUserListState(state){
				state.userListState++
			}
  },
  actions: {
			
  }
})
