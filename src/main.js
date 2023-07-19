import Vue from 'vue'
import App from './App.vue'
import router from './router' //setting vue roter
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// import 'jquery/src/jquery.js';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css';
import axios from "axios";
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';
Object.defineProperty(Vue.prototype, '$axios', { value: axios });
Object.defineProperty(Vue.prototype, '$jQuery', { value: $ });
Vue.use(VueToast)

 
Vue.use(BootstrapVue) 
Vue.use(BootstrapVueIcons) 
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
