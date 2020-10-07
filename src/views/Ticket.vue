<template>
  <div class="home text-center">
    <div id="content">
        <div id="seats" class="inline-block m-12 font-bold w-1/2">
            <header class="text-white font-bold bg-blue-600 w-full">
                <h1 class="text-4xl">Event Name</h1>
            </header>
            <div id="seatRow" class="border-2 border-black">
                <Seats v-bind:seats="seats" />
            </div>
        </div>
        <div id="ticket" class="inline-block p-10 float-right m-12 text-white font-bold bg-blue-600">
            <h1 class="text-2xl">Ticket</h1>
            <button class="bg-white text-black rounded w-56 font-bold h-12">Buy</button>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Seats from '../components/events/seatSelector/Seats';

export default {
  name: 'Ticket',
  components: { 
      Seats
  },
    data() {
    return {
      id: this.$route.params.id,
      seats: []      
    }
  },
  created(){    
        axios.get('http://localhost:9090/theater/events/' + this.id + '/seats')
        .then(response => this.seats = response.data)
        .catch(err => console.log(err));
    }
}
</script>