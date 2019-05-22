var app = new Vue({
    el: "#app-vue",
    data: {
        name: "hello",
        age: null
    },
    methods: {
        logName: function () {
            this.name = this.$refs.name.value;
        },
        logAge: function () {
            this.age = this.$refs.age.value;
        }
    }
});
