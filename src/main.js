import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './utils/request' // 换成我自己的axios 因为我的里边由定义的token
import Component from './components/index'
import './permission'

Vue.config.productionTip = false
Vue.use(Component)
Vue.use(ElementUI)
Vue.prototype.$axios = axios // axios赋值全局属性

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
