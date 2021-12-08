new Vue({
    el : '#app', //everything in app i can controle it 
    data: {
        message : "Ensias " 
    },
    methods: {
        sayHy : function(){
            return `hello world im mohamed and now im learning Vue Js ${this.message}` ; 
        }
    },
})