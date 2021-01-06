<template>
 <div v-if="!register" class="mt-5 md:mt-0 md:col-span-2">
      <form @submit="login">
        <div class="shadow-xl overflow-hidden sm:rounded-md bg-blue-600">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-8 gap-12">
              <div class="col-span-8">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Email</label>
                <input v-model="email" placeholder="john@email.com" type="text" id="first_name" class="border-black border-2 p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>     

              <div class="col-span-8">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Password</label>
                <input v-model="password" placeholder="************" type="password" id="email_address" class="mt-1 border-black border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 sm:px-6">
            <input class="float-right inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white border-white border-2 ease-in duration-200 bg-blue-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" value="Log In" type="submit" />
            <button v-on:click="turnRegister(true)" class="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white border-white border-2 ease-in duration-200 bg-blue-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
          </div>
        </div>
      </form>
    </div>
    <div v-if="register" class="mt-5 md:mt-0 md:col-span-2">
      <form @submit="registration">
        <div class="shadow-xl overflow-hidden sm:rounded-md bg-blue-600">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-8 gap-12">
              <div class="col-span-8">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Email</label>
                <input v-model="email" placeholder="john@email.com" type="text" id="first_name" class="border-black border-2 p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>     

              <div class="col-span-8">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Name</label>
                <input v-model="name" placeholder="John Doe" type="text" id="email_address" class="mt-1 border-black border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-8">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Password</label>
                <input v-model="password" placeholder="************" type="password" id="email_address" class="mt-1 border-black border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-8">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input v-model="passwordConfirm" placeholder="************" type="password" id="email_address" class="mt-1 border-black border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 sm:px-6">
            <button v-on:click="turnRegister(false)" class="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white border-white border-2 ease-in duration-200 bg-blue-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">To Log In</button>
            <input class="float-right inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white border-white border-2 ease-in duration-200 bg-blue-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" value="Register" type="submit" />
          </div>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: "Connection",
  data() {
    return {
      email: null,
      password: null,
      register: false,
    };
  },
  methods: {
    turnRegister(value) {
      this.register = value;
    },

    login(e) {
      e.preventDefault();

      if(this.email == null || this.password == null){
          alert("Please fill in the form!");
          return;
      }

      const user = {
        email: this.email,
        password: this.password,
      };

      this.$emit("login", user);
    },
    registration(e) {
      e.preventDefault();

      if(this.email == null || this.password == null || this.name == null || this.passwordConfirm == null){
          alert("Please fill in the form!");
          return;
      }

      const userRegistration = {
        email: this.email,
        name: this.name,
        password: this.password,
      };

      this.$emit("registration", userRegistration);
    }
  },
};
</script>