<template>
    <div class="p-10 bg-gray-400 rounded-lg shadow-xl" v-if="!register">
        <form @submit="login">
            <label>Email Adress</label>
            <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" type="text" name="email"/>
            <label>Password</label>
            <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" type="password" name="password" />
            <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4" type="submit">Sign In</button>
            <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4 float-right" type="button" v-on:click="turnRegister(true)">Register</button>
        </form>
    </div>

    <div class="p-10 bg-gray-400 rounded-lg shadow-xl" v-else>
        <form>
            <label>Email Adress</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" type="text" name="email"/>
            <label>Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" type="text" name="email"/>
            <label>Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" type="password" name="password" />
            <label>Confirm Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" type="password" name="password" />
            <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4 float-right" type="button">Register Account</button>
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
      register: false    
    }
  },
    methods: {
        turnRegister(value){
            this.register = value;
        },

        login(e){
            e.preventDefault();

            const user = {

                email: this.email, 
                password: this.password

                };

            this.$emit('login', user);
        }
    }
}
</script>

<style scoped>

.is-visible{
    display: none;
}
</style>