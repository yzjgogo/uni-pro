
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from '@/store/store.js'
//request-miniprogram官网：https://www.npmjs.com/package/@escook/request-miniprogram
//使用request-miniprogram步骤2：导入网络请求的包
import {$http} from '@escook/request-miniprogram'
//使用request-miniprogram步骤3：uni类似原生小程序的wx对象，类似前端的window对象，是全局的。把$http挂到uni顶级对象上方便使用
uni.$http = $http
//使用request-miniprogram步骤4：设置baseUrl
$http.baseUrl = 'https://www.uinav.com'
//使用request-miniprogram步骤5：请求拦截器,这里再请求开始时弹出loading
$http.beforeRequest = function(options){
	uni.showLoading({
		title:'数据加载中...'
	})
}
//使用request-miniprogram步骤6：响应拦截器，这里再响应回来后隐藏loading
$http.afterRequest = function(){
	uni.hideLoading()
}

//封装toast挂到uni对象上，方便简单弹出toast
uni.$showMsg = function(title='数据请求失败',duration=1500){
	uni.showToast({
		title,
		duration,
		icon:'none'
	})
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif