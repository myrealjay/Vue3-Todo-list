import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {store} from './store';
import router from './router';
import jQuery from 'jquery';
import VueRouter from 'vue-router';
const $=jQuery;
(<any>window).$=$;

createApp(App)
.use(store)
.use(router)
.mount('#app')
