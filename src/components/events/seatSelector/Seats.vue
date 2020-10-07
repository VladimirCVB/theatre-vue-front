<template>
    <div v-bind:key="seat.id" v-for="seat in seats">
        <SeatItem v-bind:seat="seat" />
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