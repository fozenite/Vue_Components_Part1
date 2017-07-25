import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
Vue.component('app-servers', Home);

const vm = new Vue({
  ...App
})

vm.$mount('#app');

