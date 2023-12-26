import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/cart.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		cart_list: cart
	}
})

export default store