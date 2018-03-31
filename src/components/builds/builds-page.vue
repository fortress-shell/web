<template>
  <div id="builds-page">
    <br>
    <div v-if="builds.length" class="columns is-multiline">
      <div class="column">
        <build-item></build-item>
      </div>
    </div>
    <div v-else class="container">
      <h1 class="title fsh-primary">
        No builds currently exists push some changes to github&hellip;
      </h1>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BuildItem from './build-item';

export default {
  created() {
    const projectId = this.$route.params.project_id;
    this.prefetch(projectId);
    // this.connection.on(`builds:${}:new`, () => {

    // });
  },
  destroyed() {

  },
  computed: {
    ...mapState('builds', [
      'builds',
    ]),
    ...mapState('socket', [
      'connection',
    ]),
  },
  components: {
    'build-item': BuildItem,
  },
  methods: {
    ...mapActions('builds', [
      'prefetch',
    ]),
  },
};
</script>

<style>
</style>
