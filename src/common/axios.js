import axios from 'axios'
import baseUrl from '../config'
axios.create({
	/* baseURl:"127.0.0.1:8082", */
	timeout:1000,
	withCredentials:true
})

axios.interceptors.request.use(
	config =>{
		/* let reqUrl = baseUrl.server
		config.url = reqUrl; */
		return config;
	},
	err =>{
		return Promise.reject(err).catch(err)
	}
)

axios.interceptors.response.use(
	response =>{
		return response
	},
	err =>{
		if(err && err.response){
			switch(err.response.status){
				case 400 :
					err.message ='请求错误'
					break
				case 304 :
					err.message ='数据错误'
					break
				default :
			}
		}else{
			err.message='网络错误，请稍后再试'
		}
		if(err && err.response && err.response.data && err.response.data.message){
			console.warn(err.message.data.message)
		}else{
			console.warn(err.message)
		}
		return Promise.reject(err).catch(err)
	}
)
export default axios