<template>
  <div id="build-page">
    <br>
    <div class="content">
      <pre :class="buildStatusClassName">{{ logs || '...' }}</pre>
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
    this.updateBuildEvent = `builds:${buildId}:update`;
    this.newLogEvent = `logs:${buildId}:new`;
    this.connection.on(this.newLogEvent, this.log.bind(this));
    this.connection.on(this.updateBuildEvent, this.update.bind(this));
  },
  destroyed() {
    this.connection.off(this.newLogEvent);
    this.connection.off(this.updateBuildEvent);
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
    buildStatusClassName() {
      return {
        'fsh-build-success': this.status === 'success',
        'fsh-build-failure': ['failure', 'maintenance'].includes(this.status),
        'fsh-build-primary': ['created', 'scheduled'].includes(this.status),
        'fsh-build-running': this.status === 'running',
      };
    },
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
<style scoped>
  .fsh-build-success {
    border-top: 5px solid #3db39e;
  }
  .fsh-build-failure {
    border-top: 5px solid #f05f60;
  }
  .fsh-build-primary {
    border-top: 5px solid #9c9c9c;
  }
  .fsh-build-running {
    border-top: 5px solid #8080f2;
  }
</style>
