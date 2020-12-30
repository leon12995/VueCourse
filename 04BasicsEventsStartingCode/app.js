const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
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
