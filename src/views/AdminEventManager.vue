<template>
  <div class="adminManager">
    <div id="content" class="mt-12">
      <EventsMager v-bind:events="events" v-on:del-event="deleteEvent" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventsMager from '../components/events/adminScreen/EventsManager.vue';
import axios from 'axios';

export default {
  name: 'AdminEventManager',
  components: {
    EventsMager,
  },
    data() {
    return {
      events: []      
    }
  },
  methods: {
      deleteEvent(id){
        axios.delete(`http://localhost:9090/theater/events/${id}`)
            .then(this.events = this.events.filter(event => event.id != id))
            .catch(err => console.log(err));
    }
  },
  created(){
      axios.get('http://localhost:9090/theater/events')
        .then(response => this.events = response.data)
        .catch(err => console.log(err));
        
    }
}
</script>
