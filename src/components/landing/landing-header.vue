<template>
  <header class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img
          src="/static/shield.svg"
          alt="Fortress Shell"
          height="60" width="40"><strong>FORTRESS SHELL</strong>
      </a>
      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>
        <a class="navbar-item">
          Blog
        </a>
        <a class="navbar-item">
          Pricing
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <button
            class="button is-primary"
            v-on:click="oauth"
            v-bind:class="loginButtonClasses">
            <span>Sign in with Github</span>
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>
          </button>

        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('authentication', [
      'isMaintanance',
      'isAuthenticated',
      'isExchangeCodeForTokenLoading',
      'isExchangeCodeForTokenError',
      'exchangeCodeForTokenError',
    ]),
    loginButtonClasses() {
      return {
        'is-loading': this.isExchangeCodeForTokenLoading,
      };
    },
  },
  methods: {
    ...mapActions({
      oauth: 'authentication/oauth',
    }),
  },
};
</script>

<style>
</style>
