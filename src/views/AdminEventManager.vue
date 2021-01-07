<template>
  <div class="adminManager">
    <div id="content" class="mt-12">
      <EventsManager v-bind:events="events" v-on:del-event="deleteEvent" />
    </div>
    <router-link to="/admin/eventcreator" class="bg-blue-600 hover: mx-4 text-white float-right px-4 py-2 rounded-md shadow-sm text-sm font-medium focus:outline-none">Create Event</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import EventsManager from '../components/events/adminScreen/EventsManager.vue';
import axios from 'axios';

export default {
  name: 'AdminEventManager',
  components: {
    EventsManager,
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
