import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/common/styles/reset.less'
import '@/common/styles/common.less'
import axios from '@/common/network/request'
import debounce from '@/common/utils/debounce'
// 挂载请求
Vue.prototype.$request = axios
// 挂载防抖函数
Vue.prototype.$debounce = debounce
Vue.use(Antd)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
