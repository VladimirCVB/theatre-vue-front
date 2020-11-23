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
      // const {email, password} = user;

      // const tok = email + ':' + password;
      // const hash = btoa(tok);
      // const Basic = 'Basic ' + hash;
      // axios.post('http://localhost:9090/theater/users/login', {headers : {'Authorization' : Basic }})
      //       .then(function(response) {
      //         console.log(response);
      //         window.location.href = "/";
      //       }).catch(err => console.log(err));

      const {email, password} = user;
      var params = new URLSearchParams();
      params.append('username', email);
      params.append('password', password);

      console.log(email);
      console.log(password);

      axios.post('http://localhost:9090/theater/users/login', params)
            .then(function(response) {
              console.log(response.data);
              let d = new Date();
              d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
              let expires = "expires=" + d.toUTCString();
              document.cookie = "Token=" + response.data + ";" + expires + ";path=/";
              //this.$cookies.set("keyName", response.data, "expiring time")
              window.location.href = "/";
            }).catch(err => console.log(err));
    }
  }
}
</script>
