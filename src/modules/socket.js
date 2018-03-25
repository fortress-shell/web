import io from 'socket.io-client';

const SOCKET_URL = process.env.SOCKET_URL;
const SOCKET_PATH = process.env.SOCKET_PATH;

const initialState = {
  connection: null,
};

const mutations = {
  connect(state) {
    if (!state.connection) {
      state.connection = io(SOCKET_URL, {
        path: SOCKET_PATH,
      });
    }
  },
  disconnect(state) {
    state.connection.disconnect();
    state.connection = null;
  },
};

const actions = {
  connect: ({ commit }) => commit('connect'),
  disconnect: ({ commit }) => commit('disconnect'),
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
