<template>
  <div id="projects-page" v-if="!isLoading">
    <section v-if="projects.length" class="section">
      <div class="container is-fluid">
        <div class="columns is-multiline is-mobile">
          <div
            v-for="project in projects" v-bind:key="project.id"
            class="column is-one-third-desktop is-half-tablet is-full-mobile">
            <project-item
              :id="project.id"
              :name="project.name"
              :owner="project.owner"
              ></project-item>
          </div>
        </div>
      </div>
    </section>
    <section v-else class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title fsh-primary">
            You have not setup any projects yet&hellip;
          </h1>
          <br>
          <h2 class="subtitle">
            Add
            <router-link
                to="/dashboard/subscriptions">
                subscriptions
            </router-link>
            to build your projects
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import ProjectItem from '@/components/projects/project-item';

export default {
  created() {
    this.source = this.prefetch();
  },
  destroyed() {
    // this.source.cancel();
  },
  computed: {
    ...mapState('projects', [
      'projects',
      'isLoading',
    ]),
  },
  methods: {
    ...mapActions('projects', [
      'prefetch',
    ]),
  },
  components: {
    'project-item': ProjectItem,
  },
};
</script>
