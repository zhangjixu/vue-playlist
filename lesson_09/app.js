var app = new Vue({
    el: "#app-vue",
    data: {
        title: "app 的内容"
    },
    methods:{

    },
    computed:{
        greet:function () {
            return "app";
        }
    }
});

var app1 = new Vue({
    el: "#app-vue1",
    data: {
        title: "app1 的内容",
        change: app.title
    },
    methods:{

    },
    computed:{
        greet:function () {
                    return "app1";
                }
    }
});
