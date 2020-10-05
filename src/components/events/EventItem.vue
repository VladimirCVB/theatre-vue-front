<template>
    <div class="inline-block event-item w-2/3 border-black border-2 text-center rounded-lg shadow-lg">
        <img :src= event.src height="800" class="w-full" />
        <h1 class="bg-blue-600 text-white text-2xl font-bold">{{event.title}}</h1>
        <p class="text-justify p-5">{{event.description}}</p>
        <div class="flex items-end h-12">
            <label class="flex-1 bg-blue-600 text-center text-white px-4 py-2 m-2 rounded">{{event.date}}</label>
            <button v-if="event.access" class="flex-1 bg-blue-600 text-center text-white px-4 py-2 m-2 rounded">Buy Ticket</button>
        </div>   
    </div><br />
</template>

<script>
export default {
    name: "EventItem",
    props: ["event"],
    methods: {}
}
</script>