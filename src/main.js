import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

Vue.config.productionTip = false
Vue.prototype.$axios = axios // axios赋值全局属性

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
