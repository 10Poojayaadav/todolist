import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './assets/tailwind.css';

const app = createApp(App);

app.use(store); // Use the store on the same app instance
app.mount('#app'); // Mount the app

