<template>
    <div>
        <div v-bind:key="event.id" v-for="event in events">
            <EventManagerItem v-bind:event="event" v-on:del-event="$emit('del-event', event.id)" />
        </div>
    </div>
</template>

<script>
import EventManagerItem from './EventManagerItem.vue';

export default {
    name: "EventsManager",
    components: {
        EventManagerItem
    },
    props: ["events"]
}
</script>