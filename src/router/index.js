import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import Home2 from '../views/home/home'
// import Commont from '../views/comment'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    // home主页
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '', // 二级路由 ，可以什么都不写 作为显示组件
      component: Home2
    }, {
      path: 'comment',
      component: () => import('../views/comment/index.vue') // 按需加载
    }, {
      path: 'material', // 素材列表
      component: () => import('../views/material/index.vue') // 按需加载
    }, {
      path: 'articles', // 新建页面 挂载路由
      component: () => import('../views/articles') // 按需加载
    }]

  }, {
    // 登录页
    path: '/login', // 完整地址 相对地址
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

]

const router = new VueRouter({
  routes
})

export default router
