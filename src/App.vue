<template>
  <div id="nav">
    <Header />
  </div>
  <router-view/>
</template>

<script>
import Header from './components/layout/Header';

export default {
  name: "App",
  components: {
    Header
  }
}
</script>