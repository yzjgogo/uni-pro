<template>
	<view style="background-color: chartreuse;">
		我是自定义的组件:{{info}},点击这个绿色区域跳转到搜索页，看uni-app的官方扩展组件uni-search-bar的具体用法
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