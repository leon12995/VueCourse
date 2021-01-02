const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : " " ,
      confirmedName: ''
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    // submitForm(event) {
    //   event.preventDefault();
    //   alert('Submmit!');
    // },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    add(num){
      this.counter = this.counter + num;
    },
    remove(num){
      if (this.counter <=0) return;
      this.counter = this.counter - num; 
    }
  }
});

app.mount('#events');
