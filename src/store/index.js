import Vue from 'vue';
import Vuex from 'vuex';

import Menu from '@/store/modules/MenuStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Menu,
  },
  strict: false,
});
