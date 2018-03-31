<template>
  <div id="landing-page">
    <landing-header></landing-header>
    <slogan></slogan>
    <sign-up></sign-up>
    <timeline></timeline>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import LandingFooter from './landing-footer';
import LandingHeader from './landing-header';
import Timeline from './timeline';
import Slogan from './slogan';
import SignUp from './sign-up';

export default {
  components: {
    slogan: Slogan,
    timeline: Timeline,
    'landing-footer': LandingFooter,
    'landing-header': LandingHeader,
    'sign-up': SignUp,
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
