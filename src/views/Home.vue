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
import Events from "../components/events/Events";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Events,
  },
  data() {
    return {
      events: [],
    };
  },
  methods: {
    getCookie(name) {
      const value = document.cookie;
      const parts = value.split(name);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
    filterEventByDate(array){
      let today = new Date();

      let day = today.getDate();
      let month = today.getMonth();
      let year = today.getFullYear();

      var newArray = array;

      for(var i = 0; i < array.length; i++){

        var eventDate = new Date(newArray[i].date);

        let eventDay = eventDate.getDate();
        let eventMonth = eventDate.getMonth();
        let eventYear = eventDate.getFullYear();
        
        if(eventYear < year || eventMonth < month || eventDay < day && eventMonth <= month){
          newArray.splice(i, 1);
        }
      }

      return newArray;
    }
  },
  created() {
    var cookie = this.getCookie("Token");
    console.log(cookie);
    axios
      .get("http://localhost:9090/theater/events", {
        headers: {
          authorization: "Bearer" + cookie,
        },
      })
      .then((response) => (this.events = this.filterEventByDate(response.data)))
      .catch((err) => console.log(err));
  },
};
</script>
