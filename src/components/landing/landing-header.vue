<template>
  <header class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img
          src="/static/shield.svg"
          alt="Fortress Shell"
          height="60" width="40"><strong class="fsh-brand">FORTRESS SHELL</strong>
      </a>
      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/" exact active-class="is-active-item">
          Home
        </router-link>
        <router-link class="navbar-item" to="/blog" disabled exact active-class="is-active-item">
          Blog
        </router-link>
        <router-link disabled class="navbar-item" to="/pricing" exact active-class="is-active-item">
          Pricing
        </router-link>
        <router-link class="navbar-item" to="/status" disabled active-class="is-active-item">
          Status
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link
            v-if="isAuthenticated"
            class="button is-success"
            to="/dashboard">
            <span class="icon">
              <i class="fa fa-sign-in"></i>
            </span>
            <span>Go to app</span>
          </router-link>
          <button
            v-else
            class="button is-success"
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
      'isAuthenticated',
      'isExchangeCodeForTokenLoading',
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
