<template>
    <div class="p-10 bg-gray-400 rounded-lg shadow-xl">
        <div>
            <form @submit="addEvent">
                <label>Title</label>
                <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" type="text" name="name"/>
                <label>Description</label>
                <textarea v-model="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" type="text" name="description"/>
                <label>Date</label>
                <input v-model="date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" type="date" name="date" />
                <label>Image Link</label>
                <input v-model="imgSrc" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" type="text" name="imgSrc" />
                <label>Event Access to the Public</label><br />
                <input v-model="access" class="shadow py-2 px-3 focus:outline-none focus:shadow-outline my-4" type="checkbox" name="access" value="Event Access" /><br />
                <label>Number of Seats</label>
                <input v-model="seats" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" type="number" name="seats"/>
                <label>Seat Price</label>
                <input v-model="price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4" type="number" name="price"/>
                <input class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4 float-right" value="Create Event" type="submit" />
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: "EventCreator",
    data(){
        return{
            name: null,
            description: null,
            date: null,
            imgSrc: null,
            access: false,
            seats: null,
            price: null,
        }
    },
    methods: {
        addEvent(e){
            e.preventDefault();

            const newEvent = {
                name: this.name,
                description: this.description,
                date: this.date,
                imgSrc: this.imgSrc,
                access: this.access,
                seats: this.seats,
                price: this.price
            }

            let inputs = [this.name, this.description, this.date, this.imgSrc, this.seats, this.price];

            for(var i = 0; i < inputs.length; i++){
                if(!inputs[i]){
                    this.$emit('add-event', null);
                    return false;
                }
            }

            this.$emit('add-event', newEvent);
            this.number = "";
        }
    }
}
</script>