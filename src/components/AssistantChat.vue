<template>
  <div class="md:block mr-6">
          <div class="inline-flex items-center">
            <!-- Profile dropdown -->
            <div class="relative">
              <div>
                  <button
                    v-on:click="enableDropDown"
                    class="focus:outline-none px-3 py-2 rounded-md text-sm font-medium text-black bg-white ease-in duration-200 hover:text-blue-600 hover:bg-black"
                  >
                    <i class="fas fa-headset"></i>
                  </button>
              </div>
              <div v-if="dropDown" class="origin-top-right absolute right-0 mt-2 test rounded-md shadow-lg p-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">

                <div class="mb-1">
                  <i class="fas fa-headset mr-1">:</i>
                  <span>Hello, this is a chat with an assistant. Someone will help you as soon as possible.</span>
                </div>

                <div class="mb-1" v-for="mes in messages" :key="mes">
                  <i v-if="mes.sender == 'other' ||  mes.sender == 'administrator'" class="fas fa-headset mr-1">:</i>
                  <i v-if="mes.sender == 'regular' " class="fas fa-user-circle mr-1 mt-1">:</i>
                  <span>{{mes.value}}</span>
                </div>
                
                <!-- <div v-for="mes in messages" :key="mes" v-if="mes.sender == " class="flex justify-end">
                  <i class="fas fa-user-circle mr-1 mt-1">:</i>
                  <span>{{mes}}</span>
                </div> -->

                <div class="flex justify-center my-2">
                  <input v-model="message" class="border-b-2 outline-none" type="text" placeholder="Type your message here"/>
                  <button v-on:click="sendMessage" class="sm:grid sm:grid-cols-2 bg-blue-600 px-1 ml-2 text-white rounded">Send</button>
                  <button v-on:click="closeConversation" class="sm:grid sm:grid-cols-2 bg-red-600 px-1 ml-2 text-white rounded">End</button>
                </div>

              </div>
            </div>
          </div>
        </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "AssistantChat",
  props: ["token", "parsedToken"],
  data() {
    return {
      dropDown: null,
      check: 0,
      message: '',
      messages: [],
      connection: null,
      user: [],
      userRole: "regular",
    };
  },
  methods: {
    enableDropDown() {
      if (this.check == 0) {
        this.dropDown = true;

        this.check++;
      } else {
        this.dropDown = false;

        this.check--;
      }
    },
    sendMessage(){
      const message = {
        value: this.message,
        sender: this.userRole
      };

      this.messages.push(message);
      this.connection.send(this.message);
    },
    closeConversation(){  
      this.connection.close();
    }
  },
  created(){
    this.connection = new WebSocket("ws://localhost:9090/ws/assistant");

    this.connection.onopen = function(event) {
      console.log(event);
      console.log("Successfully connected to the echo websocket server...");
    };

    this.connection.onmessage = ({data}) => {

        const message = {
          value: data,
          sender: "other"
        };

        this.messages.push(message);
        console.log(this.received);
      };

    if(this.token != null){

      var userId = this.parsedToken.sub;

      axios
        .get("http://localhost:9090/theater/users/" + userId, {
          headers: {
            authorization: "Bearer" + this.token,
          },
        })
        .then(
          response => {
              this.user = response.data;
              this.userRole = this.user.role;
          })
        .catch((err) => console.log(err));
    }
  }
}
</script>
<style scoped>
.test{
  width: 20rem;
}
</style>