<template>
  <div id="projects-page">
    <section v-if="projects.length" class="section">
      <div class="container is-fluid">
        <div class="columns is-multiline is-mobile">
          <div
            v-for="project in projects" v-bind:key="project.id"
            class="column is-one-third-desktop is-half-tablet is-full-mobile">
            <project-item
              :id="project.id"
              :name="project.name"
              :status="project.status"
              :owner="project.owner"
              :last="project.last"
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
import { mapActions, mapState, mapGetters } from 'vuex';
import ProjectItem from './project-item';

export default {
  created() {
    this.prefetch();
    this.connection.on('builds:new', this.update.bind(this));
  },
  destroyed() {
    this.connection.off('builds:new');
  },
  computed: {
    ...mapState('projects', [
      'projects',
    ]),
    ...mapGetters('socket', [
      'connection',
    ]),
  },
  methods: {
    ...mapActions('projects', [
      'prefetch',
      'update',
    ]),
  },
  components: {
    'project-item': ProjectItem,
  },
};
</script>
