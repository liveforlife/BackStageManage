import {getIndexList} from './service.js'

let indexModule={
	namespaced:true,
	state:{
		indexList:[]
	},
	getters:{
		
	},
	mutations:{
		changeIndexList(state,params){
			state.indexList=params
		}
	},
	actions:{
		getIndexList({commit}){
			getIndexList().then(({data})=>{
				commit('changeIndexList',data)
			})
		}
	}
}
export default indexModule