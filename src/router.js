import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main.vue'
import Home from './views/Home.vue'
import Index from './components/user/index.vue'
import Info from './components/user/info.vue'
import List from './components/user/userList/list.vue'
import Contact from './components/user/contact.vue'
import Login from './components/login/login.vue'
import NotFound from './components/404.vue'
Vue.use(Router)

let  router=new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '导航一',
      component: Main,
			children:[
				{
					path: '/Index',
					name: 'Index',
					component: Index
				},{
					path: '/Info',
					name: 'Info',
					component: Info
				},{
					path: '/List',
					name: 'List',
					component: List
				},{
					path: '/Contact',
					name: 'Contact',
					component: Contact
				}
			]
    },{
			path: '/login',
			name: 'login',
			component: Login
		},{
			path:'404',
			component:NotFound
		},{
			path: '*',
			redirect: {
				path:'/404'
			}
		}
  ]
})

router.beforeEach(({meta,path,name},from,next)=>{
	let user=sessionStorage.getItem('user');
	if(path !== '/login' && !user){
		return next({ path: '/login' })
	}else if(path === '/login' && user){
		sessionStorage.removeItem('user')
		location.reload()
	}
		next()
})

export default router

