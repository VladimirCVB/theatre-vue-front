<template>
  <div class="home">
    <div id="content">
      <div id="seats" class="text-center inline-block m-12 font-bold w-1/2">
        <header class="text-white font-bold bg-blue-600 w-full mb-6 rounded-lg">
          <h1 class="text-4xl">{{ event.name }}</h1>
        </header>
        <div id="seatRow" class="bg-gray-300 rounded-lg shadow-xl">
          <Seats v-bind:seats="seats" v-on:sel-seat="selectSeat" />
          <label class="block bg-blue-600 rounded-b-lg shadow-xl text-white my-3">Seat Selector</label>
        </div>
      </div>
      <div id="ticket" class="inline-block shadow-xl overflow-hidden float-right m-12 mr-16 w-1/4 text-white font-bold bg-gray-300 rounded-lg">
        <div>
          <h1 class="text-2xl mb-4 text-center bg-blue-600">Ticket</h1>
        </div>
        
        <div class="grid grid-cols-6 p-4 text-center text-blue-600">

          <div class="col-span-6 sm:col-span-3">
            <span>Seat</span>
          </div>

          <div class="col-span-6 sm:col-span-3">
            <span>Price</span>
          </div>

        </div>

        <div class="grid grid-cols-6 p-4 text-center text-blue-600">

          <div class="col-span-6 sm:col-span-3">
            <ul>
              <li v-for="seat in selSeats" :key="seat.id">
              <span>{{ seat.number }}</span>
              </li>
            </ul>
          </div>

          <div class="col-span-6 sm:col-span-3">
            <ul>
              <li v-for="seat in selSeats" :key="seat.id">
              <span>{{ seat.price }}$</span>
              <i
                class="far fa-trash-alt ml-2 cursor-pointer"
                @click="removeSeat(seat)"
              ></i>
              </li>
            </ul>
          </div>

        </div>
        <div class="text-center">
          <button
            class="bg-blue-600 text-white rounded w-56 font-bold my-4 h-12 hover:bg-blue-700 ease-in duration-200"
            @click="updateSeatStatus"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Seats from "../components/events/seatSelector/Seats";

export default {
  name: "Ticket",
  components: {
    Seats,
  },
  data() {
    return {
      id: this.$route.params.id,
      seats: [],
      event: [],
      selSeats: [],
    };
  },
  methods: {
    selectSeat(seat) {
      var answer = false;

      for (var i = 0; i < this.selSeats.length; i++) {
        if (this.selSeats[i].id == seat.id) {
          answer = true;
        }
      }

      if (!answer) {
        seat.available = false;
        this.selSeats.push(seat);
      }
    },
    removeSeat(seat) {
      this.selSeats.splice(this.selSeats.indexOf(seat), 1);
      seat.available = true;
    },
    updateSeatStatus() {
      if (this.selSeats.length > 0) {
        axios
          .put("http://localhost:9090/theater/events/" + this.id, {
            seats: JSON.parse(JSON.stringify(this.seats)),
          })
          .then((response) =>
            alert(response.data + "You have successfully reserved the seats!")
          )
          .catch((err) =>
            alert(
              "We are sorry, you must login first in order to reserve seats and buy a ticket. Please access the 'Connectivity' page. " +
                err
            )
          );

        this.selSeats.splice(0);
      } else {
        alert("Please choose one or more seats first!");
      }
    },
  },
  created() {
    axios
      .get("http://localhost:9090/theater/events/" + this.id + "/seats")
      .then((response) => (this.seats = response.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:9090/theater/events/" + this.id)
      .then((response) => (this.event = response.data))
      .catch((err) => console.log(err));
  },
};
</script>