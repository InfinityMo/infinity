import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // 重定向到首页
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  // 404页面
  {
    path: '*',
    name: 'None',
    component: () => import('@/views/404/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
