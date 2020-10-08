<template>
    <div class="event-item m-4 p-5 border-black border-2">
        <h1 class="inline-block font-bold">{{event.name}}</h1>
        <div class="inline-block float-right">
            <label class="font-bold mr-4">Seats {{event.seats.length}}</label> |
            <i class="fas fa-unlock fa-lg cursor-pointer mx-4"></i> |
            <i class="fas fa-edit fa-lg cursor-pointer mx-4"></i> |
            <i class="far fa-trash-alt cursor-pointer mx-4" @click="$emit('del-event', event.id)"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "EventManagerItem",
    props: ["event"],

}
</script>