import axios from 'axios-observable';
import HttpLoader from './http-loader';

// create a new axios instance
const instance = axios.create({
  baseURL: '/api'
});

// before a request is made start the nprogress
instance.interceptors.request.use(config => {
  //   NProgress.start();
  HttpLoader.show();
  return config;
});

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
  //   NProgress.done();
  HttpLoader.hide();
  return response;
});

export default instance;
