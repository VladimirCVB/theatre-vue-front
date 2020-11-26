<template>
  <div class="flex items-center justify-center h-screen">
    <EventCreator v-on:add-event="addEvent" />
  </div>
</template>

<script>
import EventCreator from '../components/events/eventCreation/EventCreator';
import axios from 'axios';

export default {
  name: "CreateEvent",
  data(){
    return{
      events: []
    }
  },
  components: {
    EventCreator
  },
  methods: {
    getCookie(name) {
      const value = document.cookie;
      const parts = value.split(name);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
    addEvent(newEvent){

      if(newEvent == null){
        alert("Please fill in all the fields regarding event information.");
      }

      const { name, description, date, imgSrc, access, seats, price } = newEvent;
      var cookie = this.getCookie("Token");

      axios.post('http://localhost:9090/theater/events', {
        name,
        date,
        description,
        imgSrc,
        access,
        price,
        seats,
        
      }, {
        headers: {
          authorization: "Bearer" + cookie,
        }})
      .then(res => alert(res.data + "Event created successfuly!"))
      .catch(err => alert("There has been an error! " + err));
    }
  },
}
</script>
