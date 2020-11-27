<template>
    <div @click="$emit('sel-seat', seat)" class="cursor-pointer inline-block m-4 p-2 outline-none bg-blue-600 text-white hover:bg-blue-700 shadow-xl rounded-lg">
        <div>
            <i class="fas fa-chair mx-1"></i>
            <label>{{seat.number}}</label><br />
            <i class="fas fa-dollar-sign mx-1"></i>
            <label>{{seat.price}}</label>   
        </div>
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