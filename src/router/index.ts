import AuthService from '@/store/auth/auth.service';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { RoleGuard } from './role.guard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../modules/home/home.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../modules/Admin.vue'),
    meta: {
      auth: true,
      roles: ['test']
    },
    beforeEnter: RoleGuard
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../modules/login/login.vue'),
    beforeEnter: (to, from, next) => {
      if (AuthService.hasToken() && AuthService.isAuthenticated) {
        next('/home');
      } else {
        next();
      }
    }
  },
  {
    path: '/denied',
    name: 'denied',
    component: () => import('../modules/Denied.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta?.auth) {
    if (AuthService.firstCheck) {
      next();
    } else {
      if (AuthService.hasToken()) {
        if (AuthService.isAuthenticated()) {
          next();
        } else {
          AuthService.checkToken().subscribe((result: boolean) => {
            if (result) {
              next();
            } else {
              next('/login');
            }
          });
        }
      } else {
        AuthService.firstCheck = true;
        next('/login');
      }
    }
  } else {
    next();
  }
});

export default router;
