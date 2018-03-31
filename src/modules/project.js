import HTTP from '@/api';

const initialState = {
  project: null,
  isLoading: false,
  isError: false,
  error: null,
};

const SET_PROJECT = 'SET_PROJECT';
const SET_PROJECT_SUCCESS = 'SET_PROJECT_SUCCESS';
const SET_PROJECT_FAILURE = 'SET_PROJECT_FAILURE';

const mutations = {
  [SET_PROJECT](state) {
    state.isLoading = true;
    state.isError = false;
    state.error = null;
  },
  [SET_PROJECT_SUCCESS](state, project) {
    state.project = project;
    state.isLoading = false;
    state.isError = false;
    state.error = null;
  },
  [SET_PROJECT_FAILURE](state, error) {
    state.isLoading = false;
    state.isError = true;
    state.error = error;
    state.project = [];
  },
};

const actions = {
  prefetch({ commit }, id) {
    commit(SET_PROJECT);
    HTTP.get(`/v1/projects/${id}`)
      .then(response => response.data.project)
      .then(project => commit(SET_PROJECT_SUCCESS, project))
      .catch(error => commit(SET_PROJECT_FAILURE, error));
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
