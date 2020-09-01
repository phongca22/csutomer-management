import { isNil } from 'lodash';
import { Auth } from './auth';
import { User } from './user';

const AuthStoreModule = {
  namespaced: true,
  state: () => ({
    isAuthenticated: false,
    token: localStorage.getItem('token') || null,
    user: null
  }),
  mutations: {
    success(state: Auth, token: string) {
      state.isAuthenticated = true;
      state.token = token;
    },
    setUser(state: Auth, data: User) {
      state.user = data;
    }
  },
  actions: {
    login({ commit }, { token, user }) {
      commit('success', token);
      commit('setUser', user);
    }
  },
  getters: {
    hasToken: (state: Auth) => !isNil(state.token),
    isAuthenticated: (state: Auth) => state.isAuthenticated,
    user: (state: Auth) => state.user
  }
};

export { AuthStoreModule };
