<template>
  <div id="dashboard-page">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch('socket/connect');
  },
  beforeDestroy() {
    this.$store.dispatch('socket/disconnect');
  },
};
</script>

<style>
</style>
