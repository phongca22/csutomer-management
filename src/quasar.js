import Vue from 'vue';

import './styles/quasar.scss';
import iconSet from 'quasar/icon-set/mdi-v4.js';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/mdi-v4/mdi-v4.css';
import { Quasar } from 'quasar';

Vue.use(Quasar, {
  config: {},
  components: {
    /* not needed if importStrategy is not 'manual' */
  },
  directives: {
    /* not needed if importStrategy is not 'manual' */
  },
  plugins: {},
  iconSet: iconSet
});
