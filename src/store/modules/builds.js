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
const ADD_BUILD = 'ADD_BUILD';
const EDIT_BUILD = 'EDIT_BUILD';

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
  [ADD_BUILD](state, build) {
    state.builds.push(build);
  },
  [EDIT_BUILD](state, payload) {
    const findById = build => build.id === payload.id;
    const buildIndex = state.builds.findIndex(findById);
    state.builds[buildIndex].status = payload.status;
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
  add({ commit }, build) {
    commit(ADD_BUILD, build);
  },
  update({ commit }, build) {
    commit(EDIT_BUILD, build);
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
