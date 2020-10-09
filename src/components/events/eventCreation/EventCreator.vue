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
            name: '',
            description: '',
            date: '',
            imgSrc: '',
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
            }

            this.$emit('add-event', newEvent);
            this.number = "";
        }
    }
}
</script>