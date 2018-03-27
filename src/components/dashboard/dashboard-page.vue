<template>
  <div id="dashboard-page">
    Dashboard
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('socket/connect');
  },
  destroy() {
    this.$store.dispatch('socket/disconnect');
  },
};
</script>

<style>
</style>
