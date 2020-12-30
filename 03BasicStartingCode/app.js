const app =Vue.createApp({
    // 也可以寫成 data: function(){}
    //data() {} es6的短寫方法
    data () {
        return {
            courseGoalA : 'Finish the course and learn Vue!',
            courseGoalB : "Master Vue and build amazing apps",
            vueLink : "https://google.com",
        }; 
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                // this 指向的是 Vue.createApp 這個物件 
                // 而 data function 會回傳裡面的變數值回去 
                return this.courseGoalA;
            }else{
                return  this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');