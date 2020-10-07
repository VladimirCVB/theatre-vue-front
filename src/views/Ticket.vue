<template>
  <div class="home text-center">
    <div id="content">
        <div id="seats" class="inline-block m-12 font-bold w-1/2">
            <header class="text-white font-bold bg-blue-600 w-full mb-6">
                <h1 class="text-4xl">{{event.name}}</h1>
            </header>
            <div id="seatRow" class="border-2 border-black">
                <Seats v-bind:seats="seats" v-on:sel-seat="selectSeat" />
            </div>
            <label>Seat Selector</label>
        </div>
        <div id="ticket" class="inline-block p-10 float-right m-12 w-1/3 text-white font-bold bg-blue-600">
            <h1 class="text-2xl mb-4">Ticket</h1>
            <ul id="example-1">
                <li v-for="seat in selSeats" :key="seat.id">
                    <span class="float-left">Seat: {{seat.number}}</span>
                    <span class="">Price: {{seat.price}}$</span>
                </li>
            </ul>
            <button class="bg-white text-black rounded w-56 font-bold mt-4 h-12">Buy</button>
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
      seats: [],
      event: [],
      selSeats: []      
    }
  },
  methods: {
      selectSeat(seat){
          this.selSeats.push(seat);
      }
  },
  created(){    
        axios.get('http://localhost:9090/theater/events/' + this.id + '/seats')
        .then(response => this.seats = response.data)
        .catch(err => console.log(err));

        axios.get('http://localhost:9090/theater/events/' + this.id)
        .then(response => this.event = response.data)
        .catch(err => console.log(err));
    }
}
</script>