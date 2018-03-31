<template>
  <td class="is-centered">
      <div class="field" >
          <button
            class="button is-outlined is-fullwidth" :class="buttonClasses"
            @click="toggle(id)">
            {{ subscribeAction }}
          </button>
      </div>
  </td>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  props: {
    id: Number,
    subscribed: Boolean,
  },
  computed: {
    isSubscribed() {
      return this.subscribed;
    },
    subscribeAction() {
      return this.subscribed ? 'Unfollow' : 'Subscribe';
    },
    buttonClasses() {
      return {
        'is-danger': this.subscribed,
        'is-success': !this.subscribed,
      };
    },
  },
  methods: {
    ...mapActions('subscriptions', [
      'subscribe',
      'unsubscribe',
    ]),
    toggle(id) {
      if (this.isSubscribed) {
        this.unsubscribe(id);
      } else {
        this.subscribe(id);
      }
    },
  },
};
</script>
