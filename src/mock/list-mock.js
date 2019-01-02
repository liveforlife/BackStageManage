const Mock=require("mockjs")
const Random=Mock.Random
const produceList=function(){
	let list=[]
	for (let i=0;i<10;i++) {
		let listObject={
			date: Random.date(),
			name: Random.cname(),
			address: Mock.mock('@county(true)')
		}
		list.push(listObject)
	}
	return list
}
Mock.mock('/list','get',produceList)