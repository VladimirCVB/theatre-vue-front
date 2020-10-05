<template>
    <div>
        <div class="content-between" v-bind:key="event.id" v-for="event in events">
            <EventItem v-bind:event="event" /><br />
        </div>
    </div>
</template>

<script>
import EventItem from './EventItem.vue';

export default {
    name: "Events",
    components: {
        EventItem
    },
    props: ["events"]
}
</script>