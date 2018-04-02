<template>
  <div id="project-page" class="container" v-if="!isLoading">
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
    this.source = this.prefetch(this.$route.params.project_id);
  },
  destroyed() {
    // this.source.cancel();
  },
  computed: {
    ...mapState('project', [
      'project',
      'isLoading',
    ]),
  },
  methods: {
    ...mapActions('project', [
      'prefetch',
    ]),
  },
};
</script>
