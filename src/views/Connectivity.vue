<template>
  <div class="about flex items-center justify-center h-screen">
    <Connection v-on:login="login"/>
  </div>
</template>

<script>
import Connection from '../components/connectivity/Connection';

export default {
  name: "Connectivity",
  components: {
    Connection
  },
  methods: {
    // login(user){
    //   const {email, password} = user;
    // }
  }
}
</script>
