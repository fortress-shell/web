<template>
  <router-link
    :to="{ name: 'project', params: { project_id: id } }"
    exact
    class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img v-if="status == 'success'"
            src="/static/success.svg" alt="Image">
          <img v-else-if="status == 'failure'"
            src="/static/success.svg" alt="Image">
          <img v-else-if="status == 'running'"
            src="/static/success.svg" alt="Image">
          <img v-else-if="status == 'maintenance'"
            src="/static/success.svg" alt="Image">
          <img v-else
            src="/static/new.svg" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p class="fsh-elipsis">
            <strong>{{ name }}</strong>
            <br>
            <small>{{ owner }}</small>
            <br>
            <small v-if="last">{{ last }}</small>
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
    last: String,
    status: String,
    owner: String,
    id: Number,
  },
};
</script>
