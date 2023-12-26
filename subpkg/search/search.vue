<template>
	<!-- 
		uni-search-bar官网：https://uniapp.dcloud.net.cn/component/uniui/uni-search-bar.html
		uni-app -> 组件 -> 扩展组件 -> uni-search-bar
		引用自： uni-pro\uni_modules\uni-search-bar\components\uni-search-bar\uni-search-bar.vue
		
		1：设置uni-search-bar所处区域的背景色，视频中的方法是找到uni-pro\uni_modules\uni-search-bar\components\uni-search-bar\uni-search-bar.vue
			-> style -> .uni-searchbar{background-color: #fff}修改这个background-color，但是可能是因为视频比较老我进去看到这个background-color是注释掉的
			因此，我通过给包裹uni-search-bar的这个view设置background-color实现背景色的更改。
		2：@input可以实时回调用户的输入内容
		3：radius可以设置搜索框的圆角
		4：cancelButton可以设置是否需要搜索框右边的取消按钮
		5：进入搜索页面，搜索框自动获取焦点；视频中的方法是进入uni-pro\uni_modules\uni-search-bar\components\uni-search-bar\uni-search-bar.vue找到data()，把show和showSync都改为true即可
			而我在官网找到focus属性，发现将focus设置为true和false都可以自动获取焦点，不适用focus默认不自动获取焦点。
			注意：模拟器无法演示自动获取焦点的情况，需要在微开中找到预览生成二维码，然后用微信扫描二维码演示
		6：输入框的防抖处理，看timer,因为输入框每次输入字符都会回调input()这样太频繁，我们希望在用户停止输入一段时间(比如500ms)后才触发搜索,因此设计了timer
	 -->
	<view>
		<view class="search-box" style="background-color: #C00000;">
			<uni-search-bar @input="input" :radius="100" cancelButton="none" focus="true"></uni-search-bar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timer: null
			};
		},
		methods: {
			input(e) {
				clearTimeout(this.timer)//输入间隔小于500ms的timer都会被取消
				this.timer = setTimeout(() => {
					//输入间隔大于500ms后真正触发搜索
					console.log("输入变化")
					console.log(e)
					this.doSearch(e)
				}, 500)
			},
			//使用request-miniprogram步骤8：发起get请求，有参数
			async doSearch(keyword){
				console.log(keyword)
				var mData = await uni.$http.get('/api/public/v1/goods/qsearch',{query:keyword})
				console.log("查询结果：",mData)
			}
		}
	}
</script>

<style lang="scss">

</style>