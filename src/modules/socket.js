import io from 'socket.io-client';

const SOCKET_URL = process.env.SOCKET_URL;
const SOCKET_PATH = process.env.SOCKET_PATH;
const CONNECT = 'CONNECT';
const DISCONNECT = 'DISCONNECT';

const initialState = {
  connection: null,
};

const mutations = {
  [CONNECT](state, connection) {
    state.connection = Object.freeze(connection);
  },
  [DISCONNECT](state) {
    state.connection = null;
  },
};

const actions = {
  connect({ commit, state }) {
    if (!state.connection) {
      const connection = io(SOCKET_URL, {
        path: SOCKET_PATH,
      });
      commit(CONNECT, connection);
    }
  },
  disconnect({ commit, state }) {
    if (state.connection) {
      state.connection.disconnect();
      commit(DISCONNECT);
    }
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
