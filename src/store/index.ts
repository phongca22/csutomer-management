import Vue from 'vue';
import Vuex from 'vuex';
import { AuthStoreModule } from './auth/auth.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: AuthStoreModule
  }
});
