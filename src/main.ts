import { createApp } from 'vue'
import App from './App.vue'

import jQuery from 'jquery';
const $=jQuery;
(<any>window).$=$;

createApp(App).mount('#app')
