const initialState = window.SESSION_LOADED || {
  count: 0,
};

const mutations = {
  increment(state) {
    state.count += 1;
  },
  decrement(state) {
    state.count -= 1;
  },
};

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 1000);
    });
  },
};

const getters = {
  evenOrOdd(state) {
    return state.count % 2 === 0 ? 'even' : 'odd';
  },
  count: state => state.count,
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
