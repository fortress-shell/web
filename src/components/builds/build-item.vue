<template>
  <router-link to="/dashboard" class="box">
    <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <!-- <img v-if="status == 'success'"
              src="/static/success.svg" alt="Image">
            <img v-else-if="status == 'failure'"
              src="/static/success.svg" alt="Image">
            <img v-else-if="status == 'running'"
              src="/static/success.svg" alt="Image">
            <img v-else-if="status == 'maintenance'"
              src="/static/success.svg" alt="Image">
            <img v-else
              src="/static/new.svg" alt="Image"> -->
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="fsh-elipsis">
              <strong>master</strong>
              <br>
              <small>1 hour ago</small>
              <br v-if="false">
              <small v-if="false">{{ false }}</small>
            </p>
          </div>
        </div>
      </article>
  </router-link>
</template>

<script>
export default {
};
</script>

<style>
</style>
