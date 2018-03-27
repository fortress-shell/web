import Vue from 'vue';
import Vuex from 'vuex';
import socket from '@/modules/socket';
import authentication from '@/modules/authentication';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    socket,
    authentication,
  },
  strict: process.env.NODE_ENV !== 'production',
});
