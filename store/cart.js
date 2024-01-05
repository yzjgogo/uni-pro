
export default {
	namespaced: true,
	//箭头函数的方式定义state，返回一个对象
	state: () => {
		return {
			cartList: ["电脑", "手机"]
		}
	},
	
	//对于箭头函数，如果函数体只有一行则可以省略大括号和return关键字
	// state:() => {
	// 	cartList: ["电脑2", "手机2"]
	// },
	
	//对比上面这种方式，用不用小括号()包裹都一样，效果好只是起到一个整体的作用，这里这个整体就是一个对象，因此可以省略
	// state:() => ({
	// 	cartList: ["电脑1", "手机1"]
	// }),
	
	//直接用一个对象定义对象
	// state:{
	// 		cartList: ["电脑", "手机"]
	// },
	mutations: {

	},
	getters: {

	},
	actions: {

	}
}