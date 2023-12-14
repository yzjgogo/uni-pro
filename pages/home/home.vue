<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="(item,i) in swiperList" :key="i">
				<!-- 声明式导航 open-type='navigate' -->
				<navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id='+item.goods_id">
					<image :src="item.image_src"></image>
				</navigator>
			</swiper-item>
		</swiper>
		<view class="one-view">1，插件安装，例如安装 scss/sass,参考：uni-shop.pdf的page1：1.2.3 安装 scss/sass 编译</view>
		
		<view class="two-view">2，快捷键方案切换：可以切换成你自己习惯的编译器的方案，录入切换成Intellij的：参考：uni-shop.pdf的page2：1.2.4 快捷键方案切换</view>
		
		<view class="one-view">3，修改编辑器的基本设置：代码格式等，参考：uni-shop.pdf的page2：1.2.5 修改编辑器的基本设置</view>
		
		<view class="two-view">4，新建项目:参考图片：new_project.jpg</view>
		
		<view class="one-view">5，打开多个项目的情况：正常情况下，文件->导入->从本地目录导入 或者 文件->打开目录 ，这两种方式打开另一个项目时都是在当前编译器窗口下平行打开另一个项目，如果我们想在新窗口打开项目，则需要用到“单项目窗体”这个概念，
		方法如下：在当年窗口下，要打开的某个项目右键->在新窗体中打开。参考：https://ask.dcloud.net.cn/article/35937</view>
		
		<view class="two-view">6，配置微信小程序并最终运行到微信开发者工具：包括配置微信小程序的appID、微信开发者工具的安装路径、微信开发者工具端的配置、运行等；参考：uni-shop.pdf的page4：1.5 把项目运行到微信开发者工具</view>
		
		<view class="one-view">7，创建页面 和 tabbar页面，参考：uni-shop.pdf的page7：2.tabBar</view>
		
		<view class="two-view">8，pages.json的用法，去pages.json查看详情</view>
		
		<view class="one-view">9，HX这边如果删除了某些东西，比如这里删除了创建项目自带的pages/index页面，则你要么在微信开发者工具里也手动去删除index页面，要么把微信开发者工具关掉，然后HX重新：运行->运行到小程序模拟器->微信开发者工具
		否则会报错</view>
		
		<view class="two-view">10，使用npm生成package.json文件，引入第三方依赖，这里以引入@escook/request-miniprogram为例，参考图片：package产生步骤1.jpeg package产生步骤2.jpeg</view>
		
		<view class="one-view">11，@escook/request-miniprogram的使用步骤，搜索：使用request-miniprogram步骤*</view>
		
		<view class="two-view">12，定义公共方法挂到uni对象上，参考：main.js -> uni.$showMsg</view>
		
		<view class="one-view">声明式导航：navigator标签，点击轮播图跳转到商品详情</view>
		
		<view class="two-view" @click="switchToCateTab">编程式导航：switchTab,点击本按钮切换到分类tab</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//轮播图的数据列表
				swiperList: []
			};
		},
		onLoad() {
			//页面加载即调用获取轮播图数据
			this.getSwiperList()
		},
		methods: {
			//使用request-miniprogram步骤7：发起get请求
			async getSwiperList() {
				const {
					data: res
				} = await uni.$http.get('/api/public/v1/home/swiperdata')
				console.log("我是data---", res)
				if (res.meta.status !== 200) {
					return uni.showToast({
						title: '数据请求失败！',
						duration: 1500,
						icon: 'none'
					})
				}
				uni.$showMsg('数据请求成功')
				this.swiperList = res.message
			},
			switchToCateTab(){
				uni.switchTab({
					url:'/pages/cate/cate'
				})
			}
		}
	}
</script>

<style lang="scss">
	swiper {
		height: 330rpx;

		.swiper-item,
		image {
			width: 100%;
			height: 100%;
		}
	}
	.one-view{
		background-color: antiquewhite;
		padding: 10rpx;
	}
	.two-view{
		background-color: cyan;
		padding: 10rpx;
	}
</style>