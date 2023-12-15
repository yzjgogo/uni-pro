<template>
	<view style="background-color: chartreuse;">
		我是自定义的组件:{{info}}
	</view>
</template>

<script>
	export default {
		name:"my-search",
		data() {
			return {
				
			};
		},
		props:{
			info:{
				type:String,
				default:"我是默认的信息"
			}
		}
	}
</script>

<style lang="scss">

</style>