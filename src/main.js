import { createApp } from 'vue';
import App from './App.vue';
import './index.scss';
import router from './router';
import Toast from 'vue-toastification';
import './assets/tailwind.css'

createApp(App).use(router).use(Toast).mount('#app');