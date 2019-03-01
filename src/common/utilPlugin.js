let globalUtil={
	fullday:'fuu',
	printConsole(arg){
		console.log(arg)
	},
	printToday(){
		console.log('everyday')
	}
}
export default{
	install: function (Vue, option = {}){
		Vue.globalUtil=globalUtil;
		Vue.prototype.$util=globalUtil;
	}
}