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
  computed: {
    ...mapState('build', {
      build: 'build',
      isBuildLoading: 'isLoading',
    }),
    ...mapState('log', {
      isLogsLoading: 'isLoading',
    }),
    ...mapGetters('socket', [
      'connection',
    ]),
    ...mapGetters('log', {
      logs: 'logs',
    }),
    buildStatusClassName() {
      const buildClass = this.buildClassByState[this.build.status] || 'fsh-build-failure';
      return { [buildClass]: true };
    },
  },
  data() {
    return {
      buildClassByState: {
        successful: 'fsh-build-success',
        failed: 'fsh-build-failure',
        maintenance: 'fsh-build-failure',
        created: 'fsh-build-primary',
        scheduled: 'fsh-build-primary',
        timeouted: 'fsh-build-primary',
        running: 'fsh-build-running',
      },
    };
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
    this.newLogEventFn = this.log.bind(this);
    this.updateBuildEventFn = this.update.bind(this);
    this.connection.on(this.newLogEvent, this.newLogEventFn);
    this.connection.on(this.updateBuildEvent, this.updateBuildEventFn);
  },
  destroyed() {
    this.connection.off(this.newLogEvent, this.newLogEventFn);
    this.connection.off(this.updateBuildEvent, this.updateBuildEventFn);
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
