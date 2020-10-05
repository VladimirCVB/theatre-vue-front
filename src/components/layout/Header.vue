<template>
    <header class="grid gap-4 grid-cols-2 bg-blue-600 h-20 p-10 text-white content-center">
        <div class="text-left inline-block">
            <i class="fas fa-theater-masks fa-2x inline-block"></i>
            <label class="p-10 text-xl font-bold">Theater Manager</label>
        </div>
        <div id="nav" class="text-right inline-block font-bold text-xl">
            <router-link to="/">Home</router-link> |
            <router-link to="/connectivity">Connectivity</router-link> |
            <router-link to="/about">Account</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>