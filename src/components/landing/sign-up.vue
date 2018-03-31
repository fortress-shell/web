<template>
  <section class="container has-text-centered">
    <p>
      <router-link
        v-if="isAuthenticated"
        to="/dashboard"
        class="button is-large is-success">
        <span class="icon">
          <i class="fa fa-sign-in fa-lg"/>
        </span>
        <span>Go to app</span>
      </router-link>
      <button
        v-else
        @click="oauth"
        class="button is-large is-success"
        v-bind:class="loginButtonClasses">
        <span class="icon">
          <i class="fa fa-github fa-lg"/>
        </span>
        <span>Sign up</span>
      </button>
    </p>
    <br/>
    <figure class="content image">
      <img src="/static/app.png"/>
    </figure>
  </section>
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
