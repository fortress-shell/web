<template>
  <section id="maintenance-page" class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img class="image is-inline" width="370" src="/static/fence.svg"/>
        <p>
          <a @click="reload" class="button is-danger is-outlined">
            <span class="icon">
              <i class="fa fa-cog"/>
            </span>
            <span>Update Status</span>
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    reload() {
      window.location = window.location;
    },
  },
};
</script>
