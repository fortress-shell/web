import HTTP from '@/api';

const PREFETCH = 'PREFETCH';
const PREFETCH_SUCCESS = 'PREFETCH_SUCCESS';
const PREFETCH_FAILURE = 'PREFETCH_FAILURE';
const LOG = 'LOG';
const sortByPosition = (a, b) => a.position - b.position;

export default {
  namespaced: true,
  state: {
    logs: [],
    status: 'created',
    isLoading: false,
    isError: false,
    error: null,
  },
  getters: {
    logs(state) {
      return state.logs
        .concat()
        .sort(sortByPosition)
        .reduce((a, c) => a + c.content, '');
    },
  },
  actions: {
    prefetch({ commit }, { projectId, id }) {
      commit(PREFETCH);
      HTTP.get(`/v1/projects/${projectId}/builds/${id}/logs`)
        .then(response => response.data.logs)
        .then(logs => commit(PREFETCH_SUCCESS, logs))
        .catch(error => commit(PREFETCH_FAILURE, error));
    },
    log({ commit }, payload) {
      commit(LOG, payload);
    },
  },
  mutations: {
    [PREFETCH](state) {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
      state.logs = [];
    },
    [PREFETCH_SUCCESS](state, logs) {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.logs = logs;
    },
    [PREFETCH_FAILURE](state, error) {
      state.isLoading = false;
      state.isError = true;
      state.error = error;
    },
    [LOG](state, payload) {
      state.logs.push(payload);
    },
  },
};
