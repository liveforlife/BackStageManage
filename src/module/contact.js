import {getContactList} from './service.js'
require('@/mock/index.js') 

let contactModule={
	state:{
		contactList:[]
	},
	getters:{
		
	},
	mutations:{
		getList(state,params){
			console.log(params)
			state.contactList=params
		}
	},
	actions:{
		async getContactList({commit}){
			await getContactList().then(({data})=>{
				commit('getList',data)
				console.log(data)
			})
		}
	}
}
export default contactModule