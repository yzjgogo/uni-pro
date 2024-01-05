<template>
	<view>
		看看vuex的数据:{{cartList}}
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			// Vuex使用步骤4：如果我们想使用store中state的数据，可以通过mapState来快捷使用，当然你也可以使用普通的$store.state.xx.xx的方式
			...mapState('cart_module',['cartList'])
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">

</style>
