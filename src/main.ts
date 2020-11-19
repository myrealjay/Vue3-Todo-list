import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import jQuery from 'jquery';
const $=jQuery;
(<any>window).$=$;

createApp(App).mount('#app')
