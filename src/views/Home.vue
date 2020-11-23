<template>
  <div class="home text-center">
    <h1 class="text-5xl">Welcome to the Theater</h1>
    <div id="content">
      <Events v-bind:events="events" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Events from '../components/events/Events';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Events,
  },
    data() {
    return {
      events: []      
    }
  },
  created(){
      axios.get('http://localhost:9090/theater/events')
        .then(response => this.events = response.data)
        .catch(err => console.log(err));
       
    }
}
</script>
