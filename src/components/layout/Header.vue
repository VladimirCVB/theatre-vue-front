<template>
    <header class="grid gap-4 grid-cols-2 bg-blue-600 h-20 p-10 text-white content-center">
        <div class="text-left inline-block">
            <i class="fas fa-theater-masks fa-2x inline-block"></i>
            <label class="p-10 text-xl font-bold">Theater Manager</label>
        </div>
        <div id="nav" class="text-right inline-block font-bold text-xl">
            <router-link to="/">Home</router-link> |
            <router-link v-if="value != null" to="/connectivity">{{value}}</router-link>
            <router-link v-if="value == null" to="/connectivity">Connectivity</router-link> |
            <router-link to="/about">Account</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
            value: null    
            }
        },
        methods: {
            getCookie(name) {
                const value = document.cookie;
                const parts = value.split(name);
                if (parts.length === 2) return parts.pop().split(';').shift();

            }
        },
        created() {
            if(this.getCookie("Token") != null){
                this.value = true;

                var base64Url = this.getCookie("Token").split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

                var user = JSON.parse(jsonPayload);
                this.value = user.sub;
                //console.log(user);
            }
                
        }
    }
</script>