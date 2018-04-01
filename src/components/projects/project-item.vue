<template>
  <router-link
    :to="{ name: 'project', params: { project_id: id } }"
    exact
    class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64" v-if="last">
          <img v-if="last.status == 'success'"
            src="/static/success.svg" alt="Image">
          <img v-else-if="last.status == 'failure'"
            src="/static/success.svg" alt="Image">
          <img v-else-if="last.status == 'running'"
            src="/static/success.svg" alt="Image">
          <img v-else-if="last.status == 'maintenance'"
            src="/static/success.svg" alt="Image">
            <img v-else-if="last.status=='created'"
              src="/static/new.svg" alt="Image">
        </figure>
        <figure class="image is-64x64" v-else>
          <img src="/static/new.svg" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p class="fsh-elipsis">
            <strong>{{ name }}</strong>
            <br>
            <small>{{ owner }}</small>
            <br>
            <small v-if="last">{{ last.updated_at }}</small>
            <small v-else>Has no builds</small>
          </p>
        </div>
      </div>
    </article>
  </router-link>
</template>
<script>
export default {
  props: {
    name: String,
    builds: Array,
    owner: String,
    id: Number,
  },
  computed: {
    last() {
      return this.builds[this.builds.length - 1];
    },
  },
};
</script>
