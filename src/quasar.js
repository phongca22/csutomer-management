import Vue from 'vue';

import './styles/quasar.scss';
import iconSet from 'quasar/icon-set/mdi-v4.js';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/mdi-v4/mdi-v4.css';
import { Quasar, Notify } from 'quasar';

Notify.setDefaults({
  position: 'bottom-right',
  timeout: 2500,
  textColor: 'white'
});

Vue.use(Quasar, {
  config: {
    Notify
  },
  components: {
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
