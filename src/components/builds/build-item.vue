<template>
  <router-link
    :to="{ name: 'build', params: { id: id } }"
    class="box">
    <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img v-if="status == 'successful'"
              src="/static/success.svg">
            <img v-else-if="status == 'failed'"
              src="/static/exclamation-mark.svg">
            <img v-else-if="status == 'running'"
              src="/static/running.svg">
            <img v-else-if="status == 'maintenanced'"
              src="/static/fence.svg">
            <img v-else-if="status == 'created'"
              src="/static/new.svg">
            <img v-else-if="status == 'scheduled'"
              src="/static/queue.svg">
            <img v-else-if="status == 'timeouted'"
              src="/static/scheduled.svg">
            <img v-else
              src="/static/fence.svg">
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
