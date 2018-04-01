<template>
  <div id="builds-page">
    <br>
    <div v-if="builds.length" class="columns is-multiline">
      <div class="column" v-for="build in builds" :key="build.id">
        <build-item
          :id="build.id"
          :branch="build.branch"
          :status="build.status"
          ></build-item>
      </div>
    </div>
    <div v-else class="container">
      <build-item :status="'success'" :id="100"></build-item>
      <h1 class="title fsh-primary">
        No builds currently exists push some changes to github&hellip;
      </h1>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import BuildItem from './build-item';

export default {
  created() {
    const projectId = this.$route.params.project_id;
    this.BUILDS_NEW = `builds:${projectId}:new`;
    this.BUILDS_UPDATE = `builds:${projectId}:update`;
    this.prefetch(projectId);
    this.connection.on(this.BUILDS_NEW, (payload) => {
      this.add(payload);
    });
    this.connection.on(this.BUILDS_UPDATE, (payload) => {
      this.update(payload);
    });
  },
  destroyed() {
    this.connection.off(this.BUILDS_NEW);
    this.connection.off(this.BUILDS_UPDATE);
  },
  computed: {
    ...mapState('builds', [
      'builds',
    ]),
    ...mapGetters('socket', [
      'connection',
    ]),
  },
  components: {
    'build-item': BuildItem,
  },
  methods: {
    ...mapActions('builds', [
      'prefetch',
      'add',
      'update',
    ]),
  },
};
</script>

<style>
</style>
