// 实例化 vue 对象
new Vue({
	// 一定是根容器元素
	el: "#vue-app",
	data: {
		name: "张三",
		website: "https://www.kancloud.cn/yunye/axios/234845",
		value: "miss",
		websiteTag: "<a href='https://www.kancloud.cn/yunye/axios/234845'> 标签 </a>"
	},

	methods: {
		greet: function(str) {
			return str + ' ' + this.name ;
		}
	}

});
