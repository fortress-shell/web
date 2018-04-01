import HTTP from '@/api';

const initialState = {
  logs: [],
  status: null,
  isLoading: false,
  isError: false,
  error: null,
};

const PREFETCH = 'PREFETCH';
const PREFETCH_SUCCESS = 'PREFETCH_SUCCESS';
const PREFETCH_FAILURE = 'PREFETCH_FAILURE';
const LOG = 'LOG';
const UPDATE = 'UPDATE';

const mutations = {
  [PREFETCH](state) {
    state.isLoading = true;
    state.isError = false;
    state.error = null;
    state.logs = [];
    state.status = 'created';
  },
  [PREFETCH_SUCCESS](state, build) {
    state.isLoading = false;
    state.isError = false;
    state.error = null;
    state.logs = build.logs;
    state.status = build.status;
  },
  [PREFETCH_FAILURE](state, error) {
    state.isLoading = false;
    state.isError = true;
    state.error = error;
  },
  [UPDATE](state, payload) {
    state.status = payload.status;
  },
  [LOG](state, payload) {
    state.logs.push(payload);
  },
};

const actions = {
  prefetch({ commit }, { projectId, buildId }) {
    commit(PREFETCH);
    HTTP.get(`/v1/projects/${projectId}/builds/${buildId}/logs`)
      .then(response => response.data.logs)
      .then(logs => commit(PREFETCH_SUCCESS, logs))
      .catch(error => commit(PREFETCH_FAILURE, error));
  },
  update({ commit }, payload) {
    commit(UPDATE, payload);
  },
  log({ commit }, payload) {
    commit(LOG, payload);
  },
};

const getters = {
  logs(state) {
    return state.logs.reduce((a, c) => a + c.content, '');
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters,
};
