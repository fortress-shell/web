<template>
  <header class="navbar">
    <div class="navbar-brand">
      <router-link
        class="navbar-item"
        to="/"
        exact>
        <img
          src="/static/shield.svg"
          alt="Fortress Shell"
          height="60" width="40">
        <strong>FORTRESS SHELL</strong>
      </router-link>
      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link
          class="navbar-item"
          active-class="is-active-item"
          to="/dashboard"
          exact>
          Dashboard
        </router-link>
        <router-link
          class="navbar-item"
          active-class="is-active-item"
          to="/dashboard/subscriptions"
          exact>
          Subscriptions
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
            <button
              class="button"
              v-bind:class="isLogoutLoadingClass"
              @click="logout">
                <span class="icon">
                  <i class="fa fa-sign-in"></i>
                </span>
                <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('authentication', [
      'isLogoutLoading',
    ]),
    ...mapState('subscriptions', {
      isSubscriptionsLoading: 'isLoading',
    }),
    ...mapState('projects', {
      isProjectsLoading: 'isLoading',
    }),
    ...mapState('project', {
      isProjectLoading: 'isLoading',
    }),
    ...mapState('builds', {
      isBuildsLoading: 'isLoading',
    }),
    ...mapState('build', {
      isBuildLoading: 'isLoading',
    }),
    isLogoutLoadingClass() {
      return {
        'is-loading': this.isLogoutLoading ||
          this.isProjectsLoading ||
          this.isSubscriptionsLoading ||
          this.isBuildsLoading ||
          this.isBuildLoading ||
          this.isProjectLoading,
      };
    },
  },
  methods: {
    ...mapActions({
      logout: 'authentication/logout',
    }),
  },
};
</script>
