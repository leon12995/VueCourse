const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      lastName: '',
    };
  },
  // 當data的值被改變時會rexecuted執行watch裡的function
  watch: {
    counter(value){
      if(value > 50){
        setTimeout(()=>{
          const that = this;
          that.counter = 0
        },1000)
        // this.counter = 0 ; 
      }
    }
  //   name(value) {
  //     if(value === ''){
  //       this.fullname = '';
  //     }else{
  //       this.fullname = value + ' ' + " Lin";
  //     }
  //   },
  //   lastName(value){
  //     if(value === ''){
  //       this.fullname = '';
  //     }else{
  //       this.fullname = this.name + ' ' + value;
  //     }
  //   }
  },
  // computed 被呼叫會跟method 不一樣
  // computed 裡的方法用起像是propert 不是 function 所以使用上不加括弧
  // computed 裡的的property 只會在該物件被執行時執行 不會隨整個頁面一起執行
  computed: {
    fullname() {
      console.log("Running again");
      if(this.name === '' || this.lastName === ""){
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {

    outputFullname(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + "Lin";
    },
    resetInput(){
      this.name = ''; 
    },
    setName(event)  {
      this.name = event.target.value ;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
