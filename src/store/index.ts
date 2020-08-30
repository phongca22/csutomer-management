import Vue from 'vue';
import Vuex from 'vuex';
import { AuthStoreModule } from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: AuthStoreModule
  }
});
