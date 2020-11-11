<template>
  <div class="about flex items-center justify-center h-screen">
    <Connection v-on:login="login"/>
  </div>
</template>

<script>

import Connection from '../components/connectivity/Connection';
import axios from 'axios';

export default {
  name: "Connectivity",
  components: {
    Connection
  },
  methods: {
    login(user){
      const {email, password} = user;

        axios.get('http://localhost:9090/theater/events', {
        email,
        password
      })
      .then(res => alert(res.data + "Event created successfuly!"))
      .catch(err => alert("There has been an error! " + err));
    }
  }
}
</script>
