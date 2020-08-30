import AuthService from '@/store/auth/service';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      auth: true,
      roles: ['test']
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/denied',
    name: 'denied',
    component: () => import('../views/Denied.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta?.auth && AuthService.hasToken()) {
    if (AuthService.isAuthenticated()) {
      if (to.meta?.roles) {
        if (AuthService.hasRole(to.meta.roles)) {
          next();
        } else {
          next('/denied');
        }
      } else {
        next();
      }
    } else {
      if (AuthService.firstCheck) {
        next();
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
