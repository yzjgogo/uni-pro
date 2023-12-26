<template>
	<view>
		<view>
			下拉刷新步骤：
			1，在pages.json找到对应more/more页面对象，在style里设置enablePullDownRefresh:true，必要时还要设置backgroundColor
			2，在more.vue中添加自带回调函数onPullDownRefresh()，下来就会执行改函数；
			3，下拉加载完毕后，需要调用uni.stopPullDownRefresh()停止下拉状态；
		</view>
		<view style="height: 1px;width: 100%;background-color: aliceblue;"></view>
		<view>
			触底加载更多步骤：
			1，在pages.json找到对应more/more页面对象，在style里设置onReachBottomDistance:150；
			2，当滚动距离底部距离达到指定的150px时，触发onReachBottom()；
			注意，上拉触底事件不像下拉刷新那样可以配置是否开启，只要上拉达到onReachBottomDistance距离即可；
		</view>
		<view style="height: 2000px;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onPullDownRefresh() {
			setTimeout(() => {
				console.log("执行下拉刷新")
				uni.stopPullDownRefresh()
			}, 1000)
		},
		onReachBottom() {
			console.log("执行onReachBottom")
		}
	}
</script>

<style lang="scss">

</style>