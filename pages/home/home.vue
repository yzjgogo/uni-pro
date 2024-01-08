<template>
	<view id="page_container" style="padding-bottom: 50px;">

		<view style="position: sticky;top: 0px;height: 50px;width: 100%;background-color: green;z-index: 999;">吸顶效果演示
		</view>
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

		<view class="one-view">5，打开多个项目的情况：正常情况下，文件->导入->从本地目录导入 或者 文件->打开目录
			，这两种方式打开另一个项目时都是在当前编译器窗口下平行打开另一个项目，如果我们想在新窗口打开项目，则需要用到“单项目窗体”这个概念，
			方法如下：在当年窗口下，要打开的某个项目右键->在新窗体中打开。参考：https://ask.dcloud.net.cn/article/35937</view>

		<view class="two-view">
			6，配置微信小程序并最终运行到微信开发者工具：包括配置微信小程序的appID、微信开发者工具的安装路径、微信开发者工具端的配置、运行等；参考：uni-shop.pdf的page4：1.5 把项目运行到微信开发者工具
		</view>

		<view class="one-view">7，创建页面 和 tabbar页面，参考：uni-shop.pdf的page7：2.tabBar</view>

		<view class="two-view">8，pages.json的用法，去pages.json查看详情</view>

		<view class="one-view">
			9，HX这边如果删除了某些东西，比如这里删除了创建项目自带的pages/index页面，则你要么在微信开发者工具里也手动去删除index页面，要么把微信开发者工具关掉，然后HX重新：运行->运行到小程序模拟器->微信开发者工具
			否则会报错</view>

		<view class="two-view">
			10，使用npm生成package.json文件，引入第三方依赖，这里以引入@escook/request-miniprogram为例，参考图片：package产生步骤1.jpeg package产生步骤2.jpeg
		</view>

		<view class="one-view">11，@escook/request-miniprogram的使用步骤，搜索：使用request-miniprogram步骤*</view>

		<view class="two-view">12，定义公共方法挂到uni对象上，参考：main.js -> uni.$showMsg</view>

		<view class="one-view">13，声明式导航：navigator标签，点击轮播图跳转到商品详情</view>

		<view class="two-view" @click="switchToCateTab">14-1，编程式导航：switchTab,点击本按钮切换到分类tab</view>
		<view class="line-view"></view>
		<view class="two-view" @click="navitageToDetail">14-2，编程式导航：navigateTo</view>

		<view class="one-view" @click="getSystemInfo">
			15，获取系统信息：参考：https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfosync</view>

		<view class="two-view">16，uni的scroll-view的用法：与小程序一样：https://uniapp.dcloud.net.cn/component/scroll-view.html#
		</view>

		<view class="one-view">
			17，可以自定义图标，可以使用字体图标、阿里巴巴矢量图标库，官网：https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html<br>
			<uni-icons type="auth" size="25"></uni-icons>
		</view>

		<view class="two-view">18，自定义组件<br>
			a，如果uni-pro下没有components文件夹，先新建components文件夹；<br>
			b，鼠标在components文件夹右键 -> 新建组件 -> 新建组件弹窗.jpg；<br>
			c，剩下的就和vue一样了
			<my-search :info="'我是传入的属性'" @click.native="doCompClick"></my-search>
		</view>
		<view class="one-view">
			19，吸顶效果：参考顶部的"吸顶效果演示"view；<br>
			a，position:sticky 实现吸顶；<br>
			b，position:0px 距离顶部0px<br>
			c，z-index:999 防止被其他view遮挡
		</view>
		<view class="two-view">
			<view>20，uni-app官方提供的标签组件：https://uniapp.dcloud.net.cn/component/uniui/uni-tag.html</view>
			<view>uni-app -> 组件 -> 扩展组件(uni-ui) -> uni-tag标签</view>
			<uni-tag text="标签"></uni-tag>
			<uni-tag text="标签" type="error"></uni-tag>
		</view>
		<view class="one-view">
			<view>21，数据持久化：Storage</view>
			<view>参考：</view>
			<view>https://uniapp.dcloud.net.cn/api/storage/storage.html#setstoragesync</view>
			<view>https://uniapp.dcloud.net.cn/api/storage/storage.html#getstoragesync</view>
			<button size="mini" @click="saveToLocal">保存包本地</button>
			<button size="mini" @click="restoreFromLocal">从本地获取缓存</button>
		</view>
		<view class="two-view">
			<view>22，下拉刷新和触底加载更多</view>
			<button size="mini" @click="gotoMore">跳转到对应页面</button>
		</view>
		<view class="one-view">
			<view>23，block标签不支持点击事件？需要点击时要换成view等其他标签</view>
		</view>
		<view class="two-view">
			<view>24，让页面滚动到最底部，看toBottom()方法，这里onLoad()调用了toBottom()</view>
		</view>
		<view class="one-view">
			<view>25，放大预览图片列表</view>
			<button size="mini" @click="doPreview">放大预览图片列表</button>
		</view>
		<view class="two-view">
			<view>26，uni-app中同样适用rpx</view>
		</view>
		<view class="one-view">
			<view>27，rich-text</view>
			<rich-text nodes="<h1 style='color:green;'>我是html标签</h1>"></rich-text>
		</view>
		<view class="two-view">
			<view>28，uni-goods-nav,一般电商app商品详情页底部的那一排按钮，uni-app已经提供了</view>
			<button size="mini" @click="toDetial">去学习</button>
		</view>
		<view class="one-view">
			<view>29，vuex的用法：参考，Vuex使用步骤1234</view>
			<button size="mini" @click="toVUEX">去学习</button>
		</view>
		<view class="two-view">
			<view>30，@关键字用于路径中访问项目根目录，例如main.js中store的导入；store.js中cart的导入；</view>
		</view>
		<view class="one-view">
			<view>31，给某个tabbar设置红点、数字等
				<button size="mini" @click="setRedPointCount">给购物车设置红点数据</button>
			</view>
		</view>
		<view class="two-view">
			<uni-swipe-action>
				<uni-swipe-action-item :left-options="options" :right-options="options" @click="doSwipeClick">
					<view style="width: 100%;background-color: yellow;">32，支持左右滑动的组件：<br>
						更多详细用法参考官网：https://uniapp.dcloud.net.cn/component/uniui/uni-swipe-action.html <br>
						还支持插槽slot呢！
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</view>
		<view class="one-view">
			33，uni-ui扩展组件数字输入框：https://uniapp.dcloud.net.cn/component/uniui/uni-number-box.html，适用于电商app那种左减右加改变数量的组件
			<uni-number-box v-model="box_num" :min="0" :max="10" @change="doMumberChange"></uni-number-box>
		</view>
		<view class="two-view">
			34，radio和radio-group的用法：https://uniapp.dcloud.net.cn/component/radio.html，微信小程序同样也有
			<radio :checked="false" color="#C00000"></radio>
		</view>
		<view class="one-view">
			35，选择地址API:获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。<br>
			https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html<br>
			https://uniapp.dcloud.net.cn/api/other/choose-address.html#chooseaddress<br>
			注意：在模拟器上只能选择模拟器预置好的那一个地址，且不能新增地址，因此最好用真机扫码操作,在真机上可以新增地址，可以选择地址，这些都是微信app提供的。<br>
			<button size="mini" @click="getAddressCallback">回调方式获取地址</button>
			<button size="mini" @click="getAddressAsync">异步调用同步化获取地址</button>
			<button size="mini" @click="getAddressPromise">Promise标准方式获取地址</button>
		</view>
		<view class="two-view">
			36，弹出小程序自带的弹窗
			<button size="mini" @click="showDialog">弹窗</button>
		</view>
		<view class="one-view">
			37，弹出小程序自带的设置页面
			<button size="mini" @click="openSetting">设置</button>
		</view>
		<view class="one-view">
			38，获取微信小程序用户在微信的用户信息
			<button size="mini" open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</button>
		</view>
		<view class="two-view">
			39，视频中讲到的微信支付，其中设计到了wx/uni.requestPayment({})的使用，参考：uni-shop_day5.pdf -> 10.5微信支付 -> 10.5.5发起微信支付
		</view>
		<view class="one-view">
			40，发布到微信小程序或者打包成Android的apk；参考：uni-shop_day5.pdf -> 11发布小程序。按照这个流程或者结合原视频可以完整的发布微信小程序。
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//轮播图的数据列表
				swiperList: [],
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#C00000'
					}
				}],
				box_num: 2
			};
		},
		//这个onLoad对应微信小程序的onLoad
		onLoad() {
			//页面加载即调用获取轮播图数据
			this.getSwiperList()
			this.toBottom()
		},
		methods: {
			//使用request-miniprogram步骤7：发起get请求,无参数
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
			//https://uniapp.dcloud.net.cn/api/router.html
			switchToCateTab() {
				uni.switchTab({
					url: '/pages/cate/cate'
				})
			},
			//https://uniapp.dcloud.net.cn/api/router.html
			navitageToDetail() {
				uni.navigateTo({
					url: '/subpkg/goods_detail/goods_detail'
				})
			},
			/*
				获取系统信息：https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfosync
				当时这个项目用到了：windowHeight：即可使用窗口高度，是指顶部导航栏与底部tabbar之间的距离
				这个方法返回的信息非常多，具体进官网看看
			**/
			getSystemInfo() {
				let data = uni.getSystemInfoSync()
				console.log("系统信息", data)
			},
			doCompClick() {
				uni.navigateTo({
					url: '/subpkg/search/search'
				})
			},
			saveToLocal() {
				const arr = [1, 2, 3]
				uni.setStorageSync("save_local_key", JSON.stringify(arr))
				console.log("缓存数据成功")
			},
			restoreFromLocal() {
				var result = uni.getStorageSync("save_local_key")
				console.log("获取缓存的结果", result)
			},
			gotoMore() {
				uni.navigateTo({
					url: '/subpkg/more/more'
				})
			},
			toBottom() {
				//同样和小程序的API一样，将uni换成wx即可
				uni.createSelectorQuery().select('#page_container').boundingClientRect(function(rect) {
					// 使页面滚动到底部
					uni.pageScrollTo({
						scrollTop: rect.bottom
					})
				}).exec()
			},
			/**
			 
				有一组图片，点击某个图片放大预览所有图片
				参考：
				微信官网：https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html
				uni-app官网：https://uniapp.dcloud.net.cn/api/media/image.html#previewimage
			 */
			doPreview() {
				// wx.previewImage({
				uni.previewImage({
					//当前点击放大图片所在索引
					current: 2,
					//所有图片列表
					urls: ["https://img0.baidu.com/it/u=189729508,2250841752&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Ff308438a-fbc8-48ce-a7ec-fd389d60459b%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1706169302&t=c9c4f4e610e893681702a40338692f3f",
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F1f0256fe-b59a-4aca-9b89-8f1ac61ac3aa%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1706169303&t=afbf199cd247736ad4678ac3f81bc59a",
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F3b26f478-341a-4549-85a5-fae4a0796346%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1706169335&t=e531fb52b2b6ade8af0b2cce91b5c53a"
					]
				})
			},
			toDetial() {
				uni.navigateTo({
					url: '/subpkg/goods_detail/goods_detail'
				})
			},
			toVUEX() {
				uni.navigateTo({
					url: '/subpkg/for_store/for_store'
				})
			},
			/**
				给某个tabBar设置要显示的红点包含个数，
				对应的还有：showTabBarRedDot({})只显示红点，不显示数字
				微信小程序也有同样的方法
				
				参考官网：https://uniapp.dcloud.net.cn/api/ui/tabbar.html#settabbarbadge
			 */
			setRedPointCount() {
				//微信小程序也有同样的方法
				// wx.setTabBarBadge({
				uni.setTabBarBadge({
					index: 2, //tabbar的索引，从0开始
					text: '99' //只能是字符串
				})
			},
			doSwipeClick(e) {
				//策划点击事件有删除监听，其中参数e，可以知道点击了哪个侧边按钮
				console.log("点击左边还是右边", e) //e.position = left | right
			},
			doMumberChange(e) {
				console.log(e)
			},
			/**
			 * 要使用这个方法，需要在微信开发者工具的app.json中进行声明，参考：https://developers.weixin.qq.com/community/develop/doc/000a02f2c5026891650e7f40351c01
				在app.json中声明方式如下：
				"requiredPrivateInfos": [
					"chooseAddress"
				]
				
				对于uni-app则需要再XBuilder中->项目的manifest.json->源码视图->"mp-weixin"下->
				"requiredPrivateInfos": [
					"chooseAddress"
				]
				
				uni(wx).chooseAddress()支持Promise风格调用，微信官方文档有说明：https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html
				参考：getAddressAsync() 和 getAddressPromise()
			 */
			getAddressCallback() {
				console.log("执行获取地址")
				// wx.chooseAddress({
				uni.chooseAddress({
					success(res) {
						console.log("成功", res)
					},
					fail(err) {
						console.log("失败", err)
					},
					complete(data) {
						console.log("完成", data)
					}
				})
			},
			async getAddressAsync() {
				//实际上uni.chooseAddress返回的是一个Promise对象
				var result = await uni.chooseAddress()
				// var result = await uni.chooseAddress().catch(err=>err) 如果需要catch我们还可以这样，因为catch本身也是返回Promise
				console.log("获取结果：", result)
			},

			getAddressPromise() {
				uni.chooseAddress().then(res => {
					console.log("promise成功", res)
				}).catch(err => {
					console.log("promise失败", err)
				})
			},
			/**
				https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html
				https://uniapp.dcloud.net.cn/api/ui/prompt.html#showmodal
				
				同样支持Promise写法，因此你可以用async/await 或者then/catch
			 */
			showDialog() {
				// wx.showModal({
				uni.showModal({
					content: '检测到您没打开地址权限，是否去设置打开？',
					confirmText: '确定',
					cancelText: '取消'
				}).then(res => {
					const [err, result] = res
					console.log('回调结果', res, err, result)
				})
			},
			/**
			 * openSetting同样支持Promise风格，可以用回调，也可以用async/await 或者then/catch
			 */
			openSetting() {
				// wx.openSetting({
				uni.openSetting({
					success: (settingResult) => {
						console.log("设置成功", settingResult)
					},
					fail: (err) => {
						console.log("设置失败", err)
					}
				})
			},
			getUserInfo(e){
				console.log("获取用户信息",e)
				
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

	.one-view {
		background-color: antiquewhite;
		padding: 10rpx;
	}

	.two-view {
		background-color: #D9FDF0;
		padding: 10rpx;
	}

	.line-view {
		background-color: #D0CECE;
		height: 1px;
		width: 100%;
	}
</style>