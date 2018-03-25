import Vue from 'vue';
import Vuex from 'vuex';
import socket from '@/modules/socket';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    socket,
  },
  strict: process.env.NODE_ENV !== 'production',
});
