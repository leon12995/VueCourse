const app = Vue.createApp({
    data(){
        return{
            taskArray : [],
            inputTask : '',
            isHidden : false
        }
    },
    computed: {
        buttonCaption(){
            return this.isHidden ? "Show": "Hide";
        }
    },
    methods: {
        addTask(){
            this.taskArray.push(this.inputTask);
            this.inputTask ='';
        },
        hideTask(){
            this.isHidden =  !this.isHidden;
        },
    }
})
app.mount("#assignment");