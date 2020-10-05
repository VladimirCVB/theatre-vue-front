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

export default {
  name: 'Home',
  components: {
    Events,
  },
    data() {
    return {
      events: [
        {
          id: 0,
          title: "Title One",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit tellus, ultrices id commodo eget, iaculis id nunc. In interdum tellus nisl, vitae rhoncus libero mollis ac. Nulla orci magna, ultricies ut tristique at, sodales id purus. Donec euismod scelerisque orci, ac rhoncus massa ultricies et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur non massa vitae nisi luctus cursus a id purus. Mauris purus urna, bibendum et nisi quis, dictum posuere massa. Sed ornare gravida quam ut venenatis. Donec convallis felis dolor, a porta nulla facilisis in. Morbi rhoncus non ligula sit amet venenatis. Pellentesque semper diam quis felis volutpat tempus. Integer lacus sem, porttitor et feugiat vel, pharetra commodo mauris. Morbi tristique dolor vel lectus vulputate gravida. Fusce eu turpis eget felis pellentesque mollis.",
          date: "12.09.2020",
          src: "https://www.laiasi.ro/wp-content/uploads/2018/02/Teatrul-National-Iasi-inaugurat-la-1-decembrie-1896-laiasi.ro_.jpg",
          access: true
        },
        {
          id: 1,
          title: "Title Two",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit tellus, ultrices id commodo eget, iaculis id nunc. In interdum tellus nisl, vitae rhoncus libero mollis ac. Nulla orci magna, ultricies ut tristique at, sodales id purus. Donec euismod scelerisque orci, ac rhoncus massa ultricies et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur non massa vitae nisi luctus cursus a id purus. Mauris purus urna, bibendum et nisi quis, dictum posuere massa. Sed ornare gravida quam ut venenatis. Donec convallis felis dolor, a porta nulla facilisis in. Morbi rhoncus non ligula sit amet venenatis. Pellentesque semper diam quis felis volutpat tempus. Integer lacus sem, porttitor et feugiat vel, pharetra commodo mauris. Morbi tristique dolor vel lectus vulputate gravida. Fusce eu turpis eget felis pellentesque mollis.",
          date: "13.09.2020",
          src: "https://www.laiasi.ro/wp-content/uploads/2018/02/Teatrul-National-Iasi-inaugurat-la-1-decembrie-1896-laiasi.ro_.jpg",
          access: false
        }
      ]      
    }
  }
}
</script>
