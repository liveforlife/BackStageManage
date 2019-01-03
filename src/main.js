import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './common/axios'
require('mockjs')

import 'element-ui/lib/theme-chalk/index.css';
window.Axios=axios
Vue.prototype.$axios=axios
//Vue.axios=axios

import ElementUI from 'element-ui'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
