<template>
	<view>
		商品详情页
		<!-- 
		uni-goods-nav:
		https://uniapp.dcloud.net.cn/component/uniui/uni-goods-nav.html
		 -->
		<uni-goods-nav :fill="false" :options="options" :buttonGroup="buttonGroup" @click="doMenuClick"
			@buttonClick="doButtonClick"></uni-goods-nav>
	</view>
</template>

<script>
	export default {
		/**
			1，如果你不想要客服那一项，你可以把客服锁在obj去掉
			2，如果店铺那一项你不需要显示右上角数字，你只需把店铺的info属性去掉；
		 */
		data() {
			return {
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods:{
			doMenuClick(e){
				console.log("点击左侧的菜单",e)
			},
			doButtonClick(e){
				console.log("点击右侧的按钮",e)
			}
		}
	}
</script>

<style lang="scss">
	.uni-goods-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>