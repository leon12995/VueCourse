const app = Vue.createApp({
    data(){
        return {
            userOutput: "",
            userOutput2: "",
        }
    },
    methods : {
        userInput2(event){
            this.userOutput2 = event.target.value;
        },
        userInput(event){
            this.userOutput = event.target.value; 
        },
        clickButton(){
            alert("You click the button");
        }
    }
})

app.mount("#assignment");