<template>
  <div id="build-page" v-if="!isBuildLoading && !isLogsLoading">
    <br>
    <div class="content">
      <pre width="80" :class="buildStatusClassName">{{ logs || '...' }}</pre>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  created() {
    const projectId = this.$route.params.project_id;
    const id = this.$route.params.id;
    this.prefetchLogs({
      projectId,
      id,
    });
    this.prefetchBuild({
      projectId,
      id,
    });
    this.updateBuildEvent = `builds:${id}:update`;
    this.newLogEvent = `logs:${id}:new`;
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
    ...mapState('build', {
      build: 'build',
      isBuildLoading: 'isLoading',
    }),
    ...mapState('log', {
      isLogsLoading: 'isLoading',
    }),
    ...mapGetters('log', {
      logs: 'logs',
    }),
    buildStatusClassName() {
      const { status } = this.build;
      return {
        'fsh-build-success': status === 'successful',
        'fsh-build-failure': ['failed', 'maintenance'].includes(status),
        'fsh-build-primary': ['created', 'scheduled', 'timeouted']
          .includes(status),
        'fsh-build-running': status === 'running',
      };
    },
  },
  methods: {
    ...mapActions('log', {
      prefetchLogs: 'prefetch',
      log: 'log',
    }),
    ...mapActions('build', {
      prefetchBuild: 'prefetch',
      update: 'update',
    }),
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
  pre {
    white-space: -moz-pre-wrap; /* Mozilla, supported since 1999 */
    white-space: -pre-wrap; /* Opera */
    white-space: -o-pre-wrap; /* Opera */
    white-space: pre-wrap; /* CSS3 - Text module (Candidate Recommendation) http://www.w3.org/TR/css3-text/#white-space */
    word-wrap: break-word; /* IE 5.5+ */
  }
</style>
