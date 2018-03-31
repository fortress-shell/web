import Vue from 'vue';
import Vuex from 'vuex';
import socket from '@/modules/socket';
import authentication from '@/modules/authentication';
import projects from '@/modules/projects';
import project from '@/modules/project';
import subscriptions from '@/modules/subscriptions';
import ui from '@/modules/ui';
import build from '@/modules/build';
import builds from '@/modules/builds';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    socket,
    projects,
    authentication,
    project,
    subscriptions,
    ui,
    build,
    builds,
  },
  strict: process.env.NODE_ENV !== 'production',
});
