<template>
  <nav class="bg-blue-600">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <i class="fas fa-theater-masks text-white fa-2x inline-block"></i>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <div class="mr-5">
                <span class="text-white text-lg font-bold"
                  >Theatre Manager</span
                >
              </div>
              <router-link
                to="/"
                class="px-3 py-2 rounded-md text-sm font-medium text-white ease-in duration-200 hover:text-blue-600 hover:bg-white"
                >Home</router-link
              >

              <router-link
                v-if="loggedIn == null"
                to="/connectivity"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 ease-in duration-200 hover:text-blue-600 hover:bg-white"
                >Connect</router-link
              >

              <router-link
                to="/about"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 ease-in duration-200 hover:text-blue-600 hover:bg-white"
                >About</router-link
              >
              <router-link
                v-if="user.role == 'administrator'"
                to="/admin/eventmanager"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 ease-in duration-200 hover:text-blue-600 hover:bg-white"
                >Event Manager</router-link
              >
              <router-link
                v-if="user.role == 'administrator'"
                to="/admin/eventcreator"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 ease-in duration-200 hover:text-blue-600 hover:bg-white"
                >Event Creator</router-link
              >
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <!-- Profile dropdown -->
            <div v-if="loggedIn != null" class="ml-3 relative">
              <div>
                <button
                  class="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <button
                    v-on:click="enableDropDown"
                    v-if="user != null"
                    class="focus:outline-none px-3 py-2 rounded-md text-sm font-medium text-white ease-in duration-200 hover:text-blue-600 hover:bg-white"
                  >
                    {{user.name}}
                  </button>
                </button>
              </div>
              <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div
                v-if="dropDown"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <router-link
                  to="/user/userprofile"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                  role="menuitem"
                  v-on:click="enableDropDown"
                  >Your Profile</router-link
                >

                <router-link
                  to="/connectivity"
                  v-on:click="logOut"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                  role="menuitem"
                  >Log Out</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  props: ["token", "parsedToken"],
  data() {
    return {
      loggedIn: null,
      dropDown: null,
      check: 0,
      user: [],
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
    logOut() {
      document.cookie =
        "Token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

      this.dropDown = false;
      this.check = 0;
      this.loggedIn = null;
      this.user = [];
    },
  },
  created() {
    if (this.token != null) {
      this.loggedIn = this.parsedToken.sub;
      var userId = this.parsedToken.sub;

      axios
        .get("http://localhost:9090/theater/users/" + userId, {
          headers: {
            authorization: "Bearer" + this.token,
          },
        })
        .then(
          (response) => (this.user = response.data)
        )
        .catch((err) => console.log(err));
    }
  },
};
</script>