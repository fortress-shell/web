<template>
  <div id="landing-page">
    <landing-header></landing-header>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import LandingFooter from './landing-footer';
import LandingHeader from './landing-header';

export default {
  components: {
    'landing-footer': LandingFooter,
    'landing-header': LandingHeader,
  },
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
