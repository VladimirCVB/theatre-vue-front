<template>
    <div class="seat-item">
        <p>
            <input type="checkbox" />
            {{seat.id}}
            </p>
    </div>
</template>

<script>
export default {
    name: "SeatItem",
    props: ["seat"]
}
</script>