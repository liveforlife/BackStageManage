import Vue from 'vue'
import Vuex from 'vuex'
import contactModule from './module/contact.js'
import indexModule from './module/index.js'
Vue.use(Vuex)

/* 
 mapGetters  映射在computed
 mapState 映射在computed
 mapActions 映射在methods
 mapMutations 映射在methods
 
 mutation :{
 	mutationName(state,payload){
 	}
 }
 使用方式：
 	store.commit(‘mutationName’,{amount:10}
 	store.commit({type:‘mutationName’,amount:10})
 	注：需要遵循Vue的响应原则
 		Vue.set(obj,‘newProp’,12);state.obj={…state.obj,newProp:12}
 		常量替代Mutation事件类型
 		Mutation都是同步事务
 */

export default new Vuex.Store({
  state: {  //  this.$store.state
			userListState:1
  },
	getters:{  //  this.$store.getters
		
	},
  mutations: {  // this.$store.commit('xxx')
			changeUserListState(state){
				state.userListState++
			}
  },
  actions: {    // this.$store.dispatch()
			/* changeUserListState(context){
				context.commit('changeUserListState')
			} */
			changeUserListState({commit}){
				setTimeout(()=>{
					commit('changeUserListState')
				},1000)
			}
  },
	modules:{  
		contactModule,indexModule
		/* 
			在带命名空间的模块内访问全局内容（Global Assets）
			在带命名空间的模块注册全局 action
			带命名空间的绑定函数
				根节点状态则为 context.rootState  namespaced: true 
				rootState 和 rootGetter 会作为第三和第四参数传入 getter 
				{ root: true } 作为第三参数传给 dispatch 或 commit 即可。
		 */
	 
	}
})
