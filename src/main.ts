import Vue from 'vue';
import App from './App.vue';
import './quasar';
import router from './router';
import store from './store';
import http from './core/http';
import VueRx from 'vue-rx';

Vue.config.productionTip = false;
Vue.prototype.http = http;
Vue.use(VueRx);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
