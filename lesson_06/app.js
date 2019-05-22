var app = new Vue({
    el: "#app-vue",
    data: {
        changeColor: false,
        changeLength: false
    },
    methods: {

    },
    computed: {
        compClasses:function () {
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
});
