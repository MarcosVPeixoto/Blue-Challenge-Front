import { createApp } from 'vue'
import App from './App.vue'
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import router from './router';
import axios from './axios';


const app = createApp(App)
app.use(router);
app.config.globalProperties.$axios = axios;
app.mount('#app');