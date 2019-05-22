var app = new Vue({
    el: "#app-vue",
    data: {
        age: 30,
        x: 0,
        y: 0
    },
    methods: {
        add: function (inc) {
            return this.age += inc;
        },
        subtract: function (dec) {
            return this.age -= dec;
        },
        updateXY: function (event) {
            //console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopMoving: function (event) {
            event.stopPropagation();
        },
        alert: function () {
            alert("hello, world!");
        }
    }
});
