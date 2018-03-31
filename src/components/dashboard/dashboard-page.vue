<template>
  <div id="dashboard-page">
    <dashboard-header></dashboard-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DashboardHeader from './dashboard-header';

export default {
  components: {
    'dashboard-header': DashboardHeader,
  },
  methods: {
    ...mapActions('socket', [
      'connect',
      'disconnect',
    ]),
  },
  created() {
    this.connect();
  },
  destroyed() {
    this.disconnect();
  },
};
</script>

