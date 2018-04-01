<template>
  <div id="build-page">
    <br>
    <div class="content" v-if="logs">
      <blockquote>Status: CREATED</blockquote>
      <br>
      <pre>{{ logs }}</pre>
    </div>
    <div class="content" v-else>
      <br>
      <pre>Vm not started yet</pre>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  created() {
    const projectId = this.$route.params.project_id;
    const buildId = this.$route.params.id;
    this.prefetch({
      projectId,
      buildId,
    });
    this.LOG_EVENT = '';
    this.BUILD_UPDATE = '';
    this.connection.on(this.LOG_EVENT, (payload) => {
      this.log(payload);
    });
    this.connection.on(this.BUILD_UPDATE, (payload) => {
      this.update(payload);
    });
  },
  destroyed() {
    this.connection.off(this.LOG_EVENT);
    this.connection.off(this.BUILD_UPDATE);
  },
  computed: {
    ...mapGetters('socket', [
      'connection',
    ]),
    ...mapState('build', [
      'status',
    ]),
    ...mapGetters('build', [
      'logs',
    ]),
  },
  methods: {
    ...mapActions('build', [
      'log',
      'prefetch',
      'update',
    ]),
  },
};
</script>
