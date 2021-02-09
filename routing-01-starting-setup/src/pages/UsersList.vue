<template>
  <div>
      <button @click="confirmInput">Confirm</button>
      <button @click="saveChanges">Save Change</button>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
  </div>

</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return{
      changedSaved: false,
    }
  },
  methods: {
    confirmInput(){
      //do something
      this.$router.push('/teams');
    },
    saveChanges(){
      this.changedSaved = true;
    }
  },
  beforeRouteLeave(to, from, next){
    console.log('UserList Cmp beforeRouteLeave');
    console.log(to, from);
    console.log(this.changedSaved);
    if(this.changedSaved){
      next();
    }else{
      const userWantstoLeave = confirm('Are you sure> You got unsaved changes');
      next(userWantstoLeave);
    }
  },
  beforeRouteEnter(to ,from, next){
    console.log('UserList Cmp beforeRouterEnter');
    console.log(to, from);
    next();
  },
  unmounted(){
    console.log('unomunted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>