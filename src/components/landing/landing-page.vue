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
import LandingFooter from '@/components/landing/landing-footer';
import LandingHeader from '@/components/landing/landing-header';
import Timeline from '@/components/landing/timeline';
import Slogan from '@/components/landing/slogan';
import SignUp from '@/components/landing/sign-up';

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
