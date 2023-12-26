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
			...mapState('cart_list',['cartList'])
		}
	}
</script>

<style lang="scss">

</style>
