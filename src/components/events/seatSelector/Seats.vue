<template>
    <div class="inline-block" v-bind:key="seat.id" v-for="seat in seats">
        <SeatItem v-bind:seat="seat" v-on:sel-seat="$emit('sel-seat', seat)" />
    </div>
</template>

<script>

import SeatItem from './SeatItem.vue';

export default {
    name: "Seats",
    components: {
        SeatItem
    },
    props: ["seats"]
}
</script>