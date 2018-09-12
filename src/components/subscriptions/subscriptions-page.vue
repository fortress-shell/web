<template>
<div id="subscriptions-page" class="section">
  <div class="columns is-mobile is-centered" v-if="!isLoading">
    <div class="column is-half-desktop is-narrow">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Organization</th>
            <th>Repository</th>
            <th>Subscription</th>
          </tr>
        </thead>
        <tbody v-if="subscriptions.length">
          <tr
            v-for="subscription in subscriptions"
            :key="subscription.id">
            <td class="is-centered">
              <strong>{{ subscription.owner.login }}</strong>
            </td>
            <td class="is-not-centered">
              {{ subscription.name }}
            </td>
            <checkbox
              :subscribed="subscription.subscribed"
              :id="subscription.id"
              :isLoading="subscription.isLoading">
              </checkbox>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td
              colspan="3"
              style="text-align: center">
              There is no repositories try to add using
              <a target="_blank" href="https://github.com">Github</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import Checkbox from '@/components/subscriptions/checkbox';

export default {
  components: {
    Checkbox,
  },
  created() {
    this.source = this.prefetch();
  },
  destroyed() {
    // this.source.cancel();
  },
  computed: {
    ...mapState('subscriptions', [
      'subscriptions',
      'isLoading',
    ]),
  },
  methods: {
    ...mapActions('subscriptions', [
      'prefetch',
    ]),
  },
};
</script>

<style scoped>
tr > th {
  text-align: center;
}
td.is-not-centered {
  padding-left: 20px;
}
td.is-centered {
  text-align: center;
}
a {
  color: green;
}
</style>
