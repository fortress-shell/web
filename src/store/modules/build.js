import HTTP from '@/api';

const BUILD_PREFETCH = 'BUILD_PREFETCH';
const BUILD_PREFETCH_SUCCESS = 'BUILD_PREFETCH_SUCCESS';
const BUILD_PREFETCH_FAILURE = 'BUILD_PREFETCH_FAILURE';
const UPDATE_BUILD = 'UPDATE_BUILD';

export default {
  namespaced: true,
  state: {
    build: null,
    isLoading: false,
    isError: false,
    error: null,
  },
  mutations: {
    [BUILD_PREFETCH](state) {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
      state.build = null;
    },
    [BUILD_PREFETCH_SUCCESS](state, build) {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.build = build;
    },
    [BUILD_PREFETCH_FAILURE](state, error) {
      state.isLoading = false;
      state.isError = true;
      state.error = error;
    },
    [UPDATE_BUILD](state, payload) {
      state.build.status = payload.status;
    },
  },
  actions: {
    prefetch({ commit }, { projectId, id }) {
      commit(BUILD_PREFETCH);
      HTTP.get(`/v1/projects/${projectId}/builds/${id}`)
        .then(response => response.data.build)
        .then(build => commit(BUILD_PREFETCH_SUCCESS, build))
        .catch(error => commit(BUILD_PREFETCH_FAILURE, error));
    },
    update({ commit }, payload) {
      commit(UPDATE_BUILD, payload);
    },
  },
};
