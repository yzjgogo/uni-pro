// Vuex使用步骤1：向Vue中安装Vuex，然后创建store实例并导出；
import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/cart.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	//Vuex使用步骤3：这里并没有给store定义state、mutations、getters、actions，而是某个模块需要用到vuex时，定义自己的module，然后再在这里的modules中引入，例如这里引入了cart.js
	modules: {
		cart_module: cart
	}
})

export default store