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

      const tok = email + ':' + password;
      const hash = btoa(tok);
      const Basic = 'Basic ' + hash;
      axios.get('http://localhost:9090/theater/users', {headers : {'Authorization' : Basic }})
            .then(function(response) {
              console.log(response);
              window.location.href = "/";
            }).catch(err => console.log(err));
    }
  }
}
</script>
