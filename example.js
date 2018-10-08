var main = new Vue({
    el: "#main",
    data: {
        active: "home"
    },
    methods: {
        makeActive: function (item) {
            this.active = item
        }
    }
})

// 自定义过滤器 "currency"
Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2)
})

var form = new Vue({
    el: '#form',
    data: {
    	// 定义模型属性 the model properties. The view will loop
        // 视图将循环输出数组的数据
        services: [
        	{
        		name: 'Web Development',
        		price: 300,
        		active:true
        	},{
        		name: 'Design',
        		price: 400,
        		active:false
        	},{
        		name: 'Integration',
        		price: 250,
        		active:false
        	},{
        		name: 'Training',
        		price: 220,
        		active:false
        	}
        ]
    },
    methods: {
    	toggleActive: function (s) {
            s.active = !s.active
    	},
    	total: function () {

        	var total = 0

        	this.services.forEach(function (s) {
        		if (s.active) {
        			total+= s.price
        		}
        	})

    	   return total
        }
    }
})