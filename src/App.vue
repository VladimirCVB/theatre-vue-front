<template>
  <div id="nav">
    <Header v-bind:token="token" v-bind:parsedToken="parsedToken" />
  </div>
  <Chat class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg" />
  <router-view v-bind:token="token" v-bind:parsedToken="parsedToken" />
</template>

<script>
import Header from './components/layout/Header';
import Chat from './components/AssistantChat';

export default {
  name: "App",
  components: {
    Header,
    Chat
  },
  data(){
    return{
      token: null,
      parsedToken: null,
    }
  },
  methods: {
      getCookie(name) {
      const loggedIn = document.cookie;
      const parts = loggedIn.split(name);
      if (parts.length === 2){
        this.token = parts.pop().split(";").shift();
      }
    },
    parseToken(){
      var base64Url = this.token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      this.parsedToken = JSON.parse(jsonPayload);
    }
  },
  created(){
    this.getCookie("Token");
    this.parseToken();
  }
}
</script>