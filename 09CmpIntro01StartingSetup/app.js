const app = Vue.createApp({
    data(){
        return{
            friends:[
                {id: 'manual',
                 name: "Manual Lorenz",
                phone: '01234 5678 991',
                email:'manaul@localhost.com'
                },
                {id: 'julie',
                name: "Julie Junes",
                phone: '09876 543 221',
                email:'julie@localhost.com'
               },
            ]
        }
    },
});
app.component('friend-contact',{
    template: `        
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails()">{{detailsAreVisible ? 'Hide' : 'Show'}}Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
    </li>
    `,
    data(){
        return{
            detailsAreVisible: false,
            friend:
                {id: 'manual',
                 name: "Manual Lorenz",
                phone: '01234 5678 991',
                email:'manaul@localhost.com'
                },
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});
app.mount('#app');