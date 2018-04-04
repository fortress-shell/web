<template>
  <div id="builds-page" v-if="!isLoading">
    <br>
    <div v-if="builds.length" class="columns is-multiline">
      <div class="column is-12"
        v-for="build in builds"
        :key="build.id">
        <build-item
          :id="build.id"
          :branch="build.branch"
          :status="build.status"
          :createdAt="build.created_at"
          :commit="build.commit"
          ></build-item>
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
import { mapState, mapActions, mapGetters } from 'vuex';
import BuildItem from './build-item';

export default {
  created() {
    const projectId = this.$route.params.project_id;
    this.source = this.prefetch(projectId);
    this.newBuildEvent = `builds:${projectId}:new`;
    this.connection.on(this.newBuildEvent, this.add.bind(this));
  },
  destroyed() {
    this.connection.off(this.newBuildEvent);
  },
  computed: {
    ...mapState('builds', [
      'builds',
      'isLoading',
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
    ]),
  },
};
</script>
