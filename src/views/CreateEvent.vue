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
  components: {
    EventCreator
  },
  methods: {
    addEvent(newEvent){
      const { name, description, date, imgSrc, id } = newEvent;

      axios.post('http://localhost:9090/theater/events', {
        name,
        description,
        date,
        imgSrc,
        id
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    }
  }
}
</script>
