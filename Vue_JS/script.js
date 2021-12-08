new Vue({
    el : '#app', //everything in app i can controle it 
    data: {
        message : "Ensias " 
    },
    methods: {
        sayHy : function(){
            return `Hy ${this.message}` ; 
        }
    },
})
