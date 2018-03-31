import HTTP from '@/api';

const initialState = {
  builds: [],
  isLoading: false,
  isError: false,
  error: null,
};

const SET_BUILDS = 'SET_BUILDS';
const SET_BUILDS_SUCCESS = 'SET_BUILDS_SUCCESS';
const SET_BUILDS_FAILURE = 'SET_BUILDS_FAILURE';

const mutations = {
  [SET_BUILDS](state) {
    state.isLoading = true;
    state.isError = false;
    state.error = null;
  },
  [SET_BUILDS_SUCCESS](state, builds) {
    state.builds = builds;
    state.isLoading = false;
    state.isError = false;
    state.error = null;
  },
  [SET_BUILDS_FAILURE](state, error) {
    state.isLoading = false;
    state.isError = true;
    state.error = error;
    state.builds = [];
  },
};

const actions = {
  prefetch({ commit }, id) {
    commit(SET_BUILDS);
    HTTP.get(`/v1/projects/${id}/builds`)
      .then(response => response.data.builds)
      .then(builds => commit(SET_BUILDS_SUCCESS, builds))
      .catch(error => commit(SET_BUILDS_FAILURE, error));
  },
};

const getters = {

};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters,
};
