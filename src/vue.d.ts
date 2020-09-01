import Vue from 'vue';
import { QVueGlobals } from 'quasar';
import http from '@/core/http';

declare module 'vue/types/vue' {
  interface Vue {
    // $q: QVueGlobals;
    http: http;
    notify: QVueGlobals.notify;
  }
}
