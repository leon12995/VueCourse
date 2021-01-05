const app =Vue.createApp({
    data() {
        return{
            inputClass: '',
            ParagraphIsVisible: false,
            inputBackgroundColor: '',
        }
    },
    computed :{
        paraClass(){
            return {
                user1 : this.inputClass === "user1", 
                user2: this.inputClass === "user2",
                visible: this.ParagraphIsVisible,
                hidden: !this.ParagraphIsVisible
            }            
        }
    },
    methods: {
        toggleParagraphIsVisible(){
            this.ParagraphIsVisible = ! this.ParagraphIsVisible;
        }
    }
});
app.mount('#assignment');