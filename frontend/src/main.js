// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

const app = createApp(App);

// Tenta fazer o auto-login sempre que o app for carregado
store.dispatch('tryAutoLogin');

app.use(store);
app.use(router);
app.mount('#app');
