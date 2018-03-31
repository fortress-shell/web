// import HTTP from '@/api';
// import Promise from 'bluebird';
const LOAD = 'LOAD';
const UNLOAD = 'UNLOAD';

const initialState = {
  loading: 0,
};

const mutations = {
  [LOAD](state) {
    state.loading += 1;
  },
  [UNLOAD](state) {
    state.loading -= 1;
  },
};

const getters = {
  isLoading(state) {
    return state.loading > 0;
  },
};

const actions = {
  load: ({ commit }) => commit(LOAD),
  unload: ({ commit }) => commit(UNLOAD),
};

export default {
  namespaced: true,
  state: initialState,
  mutations,
  getters,
  actions,
};
