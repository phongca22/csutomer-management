import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import store from '../index';
import { some } from 'lodash';
import { User } from './user';
class AuthService {
  firstCheck: boolean;

  constructor() {
    this.firstCheck = false;
  }

  hasToken(): boolean {
    return store.getters['auth/hasToken'];
  }

  login({ user, pass }) {
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
}
export default new AuthService();
