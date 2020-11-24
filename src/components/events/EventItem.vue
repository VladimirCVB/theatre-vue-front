<template>
    <div class="inline-block event-item w-2/3 border-black border-2 text-center rounded-lg shadow-lg">
        <img :src= event.imgSrc height="800" class="w-full" />
        <h1 class="bg-blue-600 text-white text-2xl font-bold">{{event.name}}</h1>
        <p class="text-justify p-5">{{event.description}}</p>
        <div class="flex items-end h-12">
            <label class="flex-1 bg-green-600 text-center text-white px-4 py-2 m-2 rounded border-green-600 border-2"><i class="far fa-calendar-alt"></i> {{event.date}}</label>
            <a v-if="event.access && value" class="flex-1 bg-blue-600 text-center text-white px-4 py-2 m-2 rounded hover:bg-white hover:text-blue-600 border-blue-600 border-2 ease-in duration-300 p-2 rounded-lg" v-bind:href="'http://localhost:8080/#/' + event.id + '/ticket'"><i class="fas fa-ticket-alt"></i> Buy Ticket</a>
        </div>   
    </div><br />
</template>

<script>
export default {
    name: "EventItem",
    props: ["event", "value"],
    methods: {}
}
</script>