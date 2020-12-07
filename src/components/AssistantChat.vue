<template>
  <div class="md:block mr-4">
          <div class="flex items-center">
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
              <div v-if="dropDown" class="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg p-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">

                <div v-for="mes in sent" :key="mes">
                  <i class="fas fa-headset mr-1">:</i>
                  <span>{{mes}}</span>
                </div>
                
                <div class="flex justify-end" v-for="mes in received" :key="mes">
                  <i class="fas fa-user-circle mr-1 mt-1">:</i>
                  <span>{{mes}}</span>
                </div>

                <div class="flex justify-center my-2">
                  <input v-model="message" class="border-b-2 outline-none" type="text" placeholder="Type your message here"/>
                  <button v-on:click="sendMessage" class="bg-blue-600 px-1 ml-2 text-white rounded">Send</button>
                </div>

              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: "AssistantChat",
  data() {
    return {
      dropDown: null,
      check: 0,
      message: '',
      sent: [],
      received: [],
      connection: null,
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
      this.sent.push(this.message);
      this.connection.send(this.message);
    },
  },
  created(){
    this.connection = new WebSocket("ws://localhost:9090/ws/assistant");

    this.connection.onopen = function(event) {
      console.log(event);
      console.log("Successfully connected to the echo websocket server...");
    };

    this.connection.onmessage = ({data}) => {
        this.received.push(data);
        console.log(this.received);
      }
  }
}
</script>