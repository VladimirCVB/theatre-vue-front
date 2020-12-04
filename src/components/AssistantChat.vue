<template>
  <div class="md:block mr-4">
          <div class="flex items-center">
            <!-- Profile dropdown -->
            <div class="relative">
              <div>
                  <button
                    v-on:click="enableDropDown"
                    class="focus:outline-none px-3 py-2 rounded-md text-sm font-medium text-white ease-in duration-200 hover:text-blue-600 hover:bg-white"
                  >
                    <i class="fas fa-headset"></i>
                  </button>
              </div>
              <div v-if="dropDown" class="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg p-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">

                <div>
                  <i class="fas fa-headset mr-1">:</i>
                  <span>Hello</span>
                </div>
                
                <div class="flex justify-end">
                  <i class="fas fa-user-circle mr-1">:</i>
                  <span>Hi</span>
                  
                </div>

                <div class="flex justify-center my-2">
                  <input class="border-b-2 outline-none" type="text" placeholder="Type your message here"/>
                  <button class="bg-blue-600 px-1 ml-2 text-white rounded">Send</button>
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
      loggedIn: null,
      dropDown: null,
      check: 0,
      user: [],
    };
  },
  methods: {
    getCookie(name) {
      const loggedIn = document.cookie;
      const parts = loggedIn.split(name);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
    enableDropDown() {
      if (this.check == 0) {
        this.dropDown = true;

        this.check++;
      } else {
        this.dropDown = false;

        this.check--;
      }
    },
    logOut() {
      document.cookie =
        "Token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

      this.dropDown = false;
      this.check = 0;
      this.loggedIn = null;
      this.user = [];
    },
  },
}
</script>