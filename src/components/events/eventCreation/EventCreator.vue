<template>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form @submit="addEvent">
        <div class="shadow-xl overflow-hidden sm:rounded-md bg-blue-600">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-8 gap-12">
              <div class="col-span-8">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Event Title</label>
                <input v-model="name" type="text" id="first_name" class="border-black border-2 p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>     

              <div class="col-span-8">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Description</label>
                <textarea v-model="description" maxlength="250" id="email_address" class="mt-1 border-black border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                <label class="text-xs text-red-500">*You can only add 250 characters to the description of an event.</label>
              </div>

              <div class="col-span-8">
                <label for="street_address" class="block text-sm font-medium text-gray-700">Date</label>
                <input v-model="date" type="date" id="street_address" class="mt-1 border-black border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                <label class="text-xs text-red-500">*If you input a past date the event will not be visible to regular users.</label>
              </div>

              <div class="col-span-8">
                <label for="city" class="block text-sm font-medium text-gray-700">Image Link</label>
                <input v-model="imgSrc" type="text" id="city" class="mt-1 border-black border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-8">
                <label for="postal_code" class="block text-sm font-medium text-gray-700">Event Access To The Public</label>
                <input v-model="access" type="checkbox" name="access" id="postal_code" class="mt-5">
              </div>

              <div class="col-span-8 sm:col-span-4">
                <label for="postal_code" class="block text-sm font-medium text-gray-700">Number of Seats</label>
                <input v-model="seats" type="number" name="price" id="postal_code" class="mt-1 border-black border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-8 sm:col-span-4">
                <label for="postal_code" class="block text-sm font-medium text-gray-700">Seat Price</label>
                <input v-model="price" type="number" name="seats" id="postal_code" class="mt-1 border-black border-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <input class="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white border-white border-2 ease-in duration-200 bg-blue-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" value="Create Event" type="submit" />
          </div>
        </div>
      </form>
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

            this.name = null;
            this.description = null;
            this.date = null;
            this.imgSrc = null;
            this.seats = null;
            this.price = null;
            this.access = false;

            this.$emit('add-event', newEvent);
            this.number = "";
        }
    }
}
</script>