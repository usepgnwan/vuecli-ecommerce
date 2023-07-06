import Vue from 'vue'
import App from './App.vue'
import router from './router' //setting vue roter
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css';
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons) 
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
