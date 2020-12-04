<template>
  <div id="nav">
    <Header />
  </div>
  <Chat class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg" />
  <router-view />
</template>

<script>
import Header from './components/layout/Header';
import Chat from './components/AssistantChat';

export default {
  name: "App",
  components: {
    Header,
    Chat
  }
}
</script>