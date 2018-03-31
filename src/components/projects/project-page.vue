<template>
  <div id="project-page" class="container" v-if="project">
    <section class="section">
      <article class="container">
        <div>
          <h1 class="title">{{ project.name }}</h1>
          <h2 class="subtitle">{{ project.owner }}</h2>
        </div>
      </article>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  created() {
    const projectId = this.$route.params.project_id;
    this.prefetch(projectId);
  },
  computed: {
    ...mapState('project', [
      'project',
    ]),
  },
  methods: {
    ...mapActions('project', [
      'prefetch',
    ]),
  },
};
</script>
