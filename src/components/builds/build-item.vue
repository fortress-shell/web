<template>
  <router-link
    :to="{ name: 'build', params: { id: id } }"
    class="box">
    <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="imageSourceByStatus">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="fsh-elipsis">
              <strong>{{ branch }} # {{ commit }} # {{ id }}</strong>
              <br>
              <small>{{ createdAtFromNow }}</small>
            </p>
          </div>
        </div>
      </article>
  </router-link>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';

export default {
  created() {
    this.updateBuildStatusFn = this.update.bind(this);
    this.connection.on(`builds:${this.id}:update`, this.updateBuildStatusFn);
  },
  destroyed() {
    this.connection.off(`builds:${this.id}:update`, this.updateBuildStatusFn);
  },
  computed: {
    ...mapGetters('socket', ['connection']),
    createdAtFromNow() {
      return moment(this.createdAt).fromNow();
    },
    imageSourceByStatus() {
      return {
        successful: '/static/success.svg',
        failed: '/static/exclamation-mark.svg',
        running: '/static/running.svg',
        created: '/static/new.svg',
        scheduled: '/static/queue.svg',
        timeouted: '/static/scheduled.svg',
        maintenanced: '/static/fence.svg',
      }[this.status] || '/static/fence.svg';
    },
  },
  methods: {
    ...mapActions('builds', ['update']),
  },
  props: {
    status: String,
    id: Number,
    branch: String,
    createdAt: String,
    commit: String,
  },
};
</script>
