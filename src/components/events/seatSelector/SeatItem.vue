<template>
    <div class="seat-item inline-block border-2 border-black m-4 p-2 outline-none">
        <button @click="$emit('sel-seat', seat)">
        <label>{{seat.number}}</label><br />
        <label>{{seat.price}} $</label>
        </button>
    </div>
</template>

<script>
export default {
    name: "SeatItem",
    props: ["seat"],
    data(){
        return {
            selected: false,
        }
    },
    methods: {
    }
}
</script>