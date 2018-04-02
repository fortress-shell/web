<template>
  <router-link
    :to="{ name: 'project', params: { project_id: id } }"
    exact
    class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
            <img src="/static/viking-ship.svg" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p class="fsh-elipsis">
            <strong>{{ name }}</strong>
            <br>
            <small>{{ owner }}</small>
          </p>
        </div>
      </div>
    </article>
  </router-link>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    name: String,
    builds: Array,
    owner: String,
    id: Number,
  },
  computed: {
    ...mapGetters('socket', [
      'connection',
    ]),
    last() {
      return this.builds[this.builds.length - 1];
    },
  },
};
</script>
