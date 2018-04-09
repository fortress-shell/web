import router from '@/router';
import HTTP from '@/api';
import Promise from 'bluebird';

const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCESS = 'LOGOUT_COMPLETE';
const LOGOUT_FAILURE = 'LOGOUT_FAILED';
const EXCHANGE_CODE_FOR_TOKEN = 'EXCHANGE_CODE_FOR_TOKEN';
const EXCHANGE_CODE_FOR_TOKEN_SUCCESS = 'EXCHANGE_CODE_FOR_TOKEN_SUCCESS';
const EXCHANGE_CODE_FOR_TOKEN_FAILURE = 'EXCHANGE_CODE_FOR_TOKEN_FAILURE';

export default {
  namespaced: true,
  state: {
    isMaintanance: !window.SESSION_SCRIPT_LOADED,
    isAuthenticated: window.SESSION_STATE,
    isLogoutLoading: false,
    isLogoutError: false,
    logoutError: null,
    isExchangeCodeForTokenLoading: false,
    isExchangeCodeForTokenError: false,
    exchangeCodeForTokenError: null,
  },
  actions: {
    logout({ commit }) {
      commit(LOGOUT);
      return HTTP.post('/v1/sessions/logout')
        .then(() => commit(LOGOUT_SUCCESS))
        .then(() => router.push('/'))
        .catch(error => commit(LOGOUT_FAILURE, error));
    },
    oauth() {
      window.location = process.env.GITHUB_OAUTH;
    },
    exchangeCodeForToken({ commit }, code) {
      commit(EXCHANGE_CODE_FOR_TOKEN);
      const authenticate = HTTP.post('/v1/sessions', { code });
      const waitIfTooFast = Promise.delay(process.env.PRESTART_WAIT);
      return Promise.all([authenticate, waitIfTooFast])
        .then(() => commit(EXCHANGE_CODE_FOR_TOKEN_SUCCESS))
        .then(() => router.push('/dashboard'))
        .catch(error => commit(EXCHANGE_CODE_FOR_TOKEN_FAILURE, error));
    },
  },
  getters: {
  },
  mutations: {
    [LOGOUT](state) {
      state.isLogoutLoading = true;
      state.isLogoutError = false;
    },
    [LOGOUT_SUCCESS](state) {
      state.isLogoutLoading = false;
      state.isLogoutError = false;
      state.isAuthenticated = false;
    },
    [LOGOUT_FAILURE](state, error) {
      state.isLogoutLoading = false;
      state.isLogoutError = true;
      state.logoutError = error;
    },
    [EXCHANGE_CODE_FOR_TOKEN](state) {
      state.isExchangeCodeForTokenLoading = true;
      state.isExchangeCodeForTokenError = false;
      state.isAuthenticated = false;
    },
    [EXCHANGE_CODE_FOR_TOKEN_SUCCESS](state) {
      state.isExchangeCodeForTokenLoading = false;
      state.isExchangeCodeForTokenError = false;
      state.isAuthenticated = true;
    },
    [EXCHANGE_CODE_FOR_TOKEN_FAILURE](state, error) {
      state.isExchangeCodeForTokenLoading = false;
      state.isExchangeCodeForTokenError = true;
      state.isAuthenticated = false;
      state.exchangeCodeForTokenError = error;
    },
  },
};
