import { some } from 'lodash';
import { of } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import store from '../index';
class AuthService {
  firstCheck: boolean;

  constructor() {
    this.firstCheck = false;
  }

  hasToken(): boolean {
    return store.getters['auth/hasToken'];
  }

  login(user: string, pass: string) {
    const token = 'abc';
    localStorage.setItem('token', token);
    return this.getUserProfile().pipe(
      tap((data: any) => {
        store.dispatch('auth/login', {
          user: data,
          token: token
        });
      })
    );
  }

  isAuthenticated() {
    return store.getters['auth/isAuthenticated'];
  }

  hasRole(roles: string[]) {
    const data = ['admin'];
    return !some(roles, (role: string) => !data.includes(role));
  }

  getUserProfile() {
    return of({
      email: 'a@a.com',
      name: 'abc'
    });
  }

  getUser() {
    return store.getters['auth/user'];
  }

  checkToken() {
    return of(true).pipe(
      concatMap(() => this.getUserProfile()),
      tap((data: any) => store.commit('auth/setUser', data)),
      map(() => true)
    );
  }
}
export default new AuthService();
