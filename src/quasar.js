import Vue from 'vue';
import './styles/quasar.scss';
import iconSet from 'quasar/icon-set/mdi-v4.js';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/mdi-v4/mdi-v4.css';
import { Quasar, Notify, QAjaxBar } from 'quasar';

Notify.setDefaults({
  position: 'bottom-right',
  timeout: 2500,
  textColor: 'white'
});

Vue.use(Quasar, {
  config: {
    Notify,
    brand: {
      primary: '#3f51b5',
      secondary: '#e91e63',
      accent: '#9C27B0',

      dark: '#1d1d1d',

      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    }
  },
  components: {
    QAjaxBar
    /* not needed if importStrategy is not 'manual' */
  },
  directives: {
    /* not needed if importStrategy is not 'manual' */
  },
  plugins: {
    Notify
  },
  iconSet: iconSet
});

Vue.prototype.notify = Vue.prototype.$q.notify;
