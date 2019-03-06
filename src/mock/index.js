import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
const Mock=require("mockjs")
let userList=[
	{userName:'ccy',password:'123456'},
	{userName:'ttt',password:'111111'},
	{userName:'rrr',password:'111111'}
]
const Random=Mock.Random
const produceList=function(){
	let list=[]
	for (let i=0;i<10;i++) {
		let listObject={
			index:i+1,
			date: Random.date(),
			name: Random.cname(),
			address: Mock.mock('@county(true)')
		}
		list.push(listObject)
	}
	return list
}

let mock=new MockAdapter(axios)
// get请求。不带参
mock.onGet('/list').reply(200,produceList())

mock.onPost('login').reply(function(config){
	let {data}={...config}
	data=JSON.parse(data)
	if(data.userName && data.password){
		let result=userList.filter((item)=>{ return item.userName ===data.userName && item.password === data.password })
		if(result.length>0){
			return [200,{code:200,message:'登录成功',data:'fhwhfjwehfk3424242hwerw'}]
		}else{
			return [200,{code:304,message:'密码错误',data:{}}]
		}
	}else{
		return [200,{code:304,message:'账号或者密码不存在',data:{}}]
	}
})
//get请求，带参
mock.onGet('/list',{params:{searchText:'Json'}}).reply(200,[
	
])
// get请求,返回Function
mock.onGet('/list:config').reply(function(config){
	//config是axios config 
	//返回一个数组[status, data, headers] 
	return [200,[{date: '2016-05-01',name: '王小虎',address: '上海市普陀区金沙江路 1519 弄' }]]
})
//没有具体路径
mock.onPost().reply(500)
//put请求
mock.onPut('/list:put',{id:4,name:'foo'}).reply(500)