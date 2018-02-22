import Vue from 'vue';
import Vuex from 'vuex';
import counter from '@/modules/main';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter,
  },
  strict: process.env.NODE_ENV !== 'production',
});