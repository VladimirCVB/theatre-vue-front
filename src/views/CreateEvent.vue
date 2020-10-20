<template>
  <div class="about flex items-center justify-center h-screen">
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
    addEvent(newEvent){
      //var id = this.events.length;
      var access = true;

      const { name, description, date, imgSrc } = newEvent;

      axios.post('http://localhost:9090/theater/events', {
        name,
        date,
        description,
        imgSrc,
        access
      })
      .then(res => alert(res.data + "Event created successfuly!"))
      .catch(err => alert("There has been an error! " + err));
    }
  },
  created(){
    axios.get('http://localhost:9090/theater/events')
        .then(response => this.events = response.data)
        .catch(err => console.log(err));
  }
}
</script>
