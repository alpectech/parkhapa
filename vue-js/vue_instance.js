"use strict"

new Vue({
    el: '#app',
    data: {
        name: 'Shaun',
        age: 21,
        job: 'Ninja',
        website: 'www.derrick.co.uk',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja</a>',
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time + ' ' + this.name;
        },
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (dec) {
            this.age -= dec;
        }
    }
});

new Vue({
    el: '#canvas',
    data: {
        x: 0,
        y: 0
    },
    methods: {
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});

new Vue({
    el: '#keyboard',
    data: {
        name: '',
        age: ''
    },
    methods: {
        logName: function () {
            console.log('You entered your name');
        },
        logAge: function () {
            console.log('You entered your age');
        }
    }
});

new Vue({
    el: '#co',
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    methods: {
        // addToA:function(){
        //     return this.a+this.age;
        // },
        // addToB:function(){
        //     return this.b+this.age;
        // }
    },
    // A more efficient alternative to methods
    computed: {
        addToA: function () {
            return this.a + this.age;
        },
        addToB: function () {
            return this.b + this.age;
        }
    }
});

new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false
    },
    methods: {

    },
    computed: {
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});

// conditionals
new Vue({
    el: '#conditionals',
    data: {
        error: false,
        success: false
    },
    methods: {

    },
    computed: {

    }
});

//v-for
new Vue({
    el:'#v-for',
    data:{
        characters:['Mario','Luigi','Yoshi','Bowser'],
        ninjas:[
            {name:'Ryu', age:25},
            {name:'Yoshi', age:35},
            {name:'Ken', age:55}
        ]
    },
    methods:{

    },
    computed:{

    }
});