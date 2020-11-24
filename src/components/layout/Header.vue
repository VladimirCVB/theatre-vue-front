<template>
    <header class="grid gap-4 grid-cols-2 bg-blue-600 h-20 p-10 text-white content-center">
        <div class="text-left inline-block">
            <i class="fas fa-theater-masks fa-2x inline-block"></i>
            <label class="p-10 text-xl font-bold">Theater Manager</label>
        </div>
        <div id="nav" class="text-right inline-block font-bold text-xl">
            <router-link class="hover:bg-white hover:text-blue-600 ease-in duration-300 p-2 rounded-lg" to="/"><i class="fas fa-home"></i> Home</router-link> |
            <div v-if="loggedIn != null" class="inline-block">
                <button v-on:click="enableDropDown" class="hover:bg-white font-bold hover:text-blue-600 ease-in duration-300 p-2 rounded-lg">{{loggedIn}} <i class="far fa-hand-point-down"></i></button>
                <div v-if="dropDown" class="absolute bg-blue-600 shadow-xl p-3 z-10">
                    <router-link class="hover:bg-white hover:text-blue-600 ease-in duration-300 mb-2 p-1 rounded-lg block" to="/account"><i class="fas fa-user-circle"></i> Account</router-link>
                    <router-link class="hover:bg-white hover:text-blue-600 ease-in duration-300 p-1 rounded-lg block" to="/connectivity"><i class="fas fa-sign-out-alt"></i><button class="font-bold" v-on:click="logOut"> Log Out</button></router-link>
                </div>
            </div>
            <router-link v-if="loggedIn == null" class="hover:bg-white hover:text-blue-600 ease-in duration-300 p-2 rounded-lg" to="/connectivity"><i class="fas fa-sign-in-alt"></i> Connect</router-link> |
            <router-link class="hover:bg-white hover:text-blue-600 ease-in duration-300 p-2 rounded-lg" to="/about"><i class="fas fa-info-circle"></i> About</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
            loggedIn: null,
            dropDown: null,
            check: 0    
            }
        },
        methods: {
            getCookie(name) {
                const loggedIn = document.cookie;
                const parts = loggedIn.split(name);
                if (parts.length === 2) return parts.pop().split(';').shift();
            },
            enableDropDown(){
                if(this.check == 0){
                    this.dropDown = true;

                    this.check++;
                }
                else{
                    this.dropDown = false;

                    this.check--;
                } 
            },
            logOut(){
                document.cookie = "Token" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

                this.dropDown = false;
                this.check = 0;
                this.loggedIn = null;
            }
        },
        created() {

            var token = this.getCookie("Token");

            if(token != null){

                this.loggedIn = true;

                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

                var user = JSON.parse(jsonPayload);
                this.loggedIn = user.sub;

            }     
        }
    }
</script>