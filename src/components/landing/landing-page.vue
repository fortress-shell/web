<template>
  <div id="landing-page">
    <landing-header></landing-header>
    Landing Page
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import LandingFooter from './landing-footer';
import LandingHeader from './landing-header';

export default {
  components: {
    'landing-footer': LandingFooter,
    'landing-header': LandingHeader,
  },
};
</script>

<style>
</style>
