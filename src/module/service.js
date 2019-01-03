import Vue from 'vue'

function getContactList(){
	return 	Vue.axios.get('contact/list')
}

function getIndexList(){
	return Vue.axios.get('index/list')
}

export {
	getContactList,getIndexList
}