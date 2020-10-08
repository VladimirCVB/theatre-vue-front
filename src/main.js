import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/tailwind.css';
import cors from 'cors';

createApp(App).use(router).use(cors).mount('#app')
