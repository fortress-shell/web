import io from 'socket.io-client';

const SOCKET_URL = process.env.SOCKET_URL;
const SOCKET_PATH = process.env.SOCKET_PATH;
const CONNECT = 'CONNECT';
const DISCONNECT = 'DISCONNECT';

const initialState = {
  socket: { connection: null },
};

const mutations = {
  [CONNECT](state, connection) {
    state.socket = Object.freeze({ connection });
  },
  [DISCONNECT](state) {
    state.socket = { connection: null };
  },
};

const actions = {
  connect({ commit, state }) {
    if (!state.socket.connection) {
      const connection = io(SOCKET_URL, {
        path: SOCKET_PATH,
        transports: ['websocket'],
      });
      commit(CONNECT, connection);
    }
  },
  disconnect({ commit, state }) {
    if (state.socket.connection) {
      state.socket.connection.disconnect();
      commit(DISCONNECT);
    }
  },
};

const getters = {
  connection: state => state.socket.connection,
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  getters,
  mutations,
};
