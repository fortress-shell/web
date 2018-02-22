<template>
  <div class="hello">
    Clicked: {{ count }} times, count is {{ _self['counter/evenOrOdd'] }}
        <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

const log = (message) => store.dispatch('logs/add', message);

export default {
  computed: {...mapGetters({
    'counter/evenOrOdd': 'counter/evenOrOdd',
    count: 'counter/count'
  })},
  const viewed = [];
  const result = [];
  for (const item of items.sort()) {
    if (viewed.includes(item.id)) {
        result.push()
    } else {
        viewed.push(item.id);
    }
  }
  methods: mapActions('counter', [
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
  ]),
  onBuild
  async created() {
    this.$socket.on(`build:${this.$route.params.id}`, log);
    await builds.fetch(this.$route.params.id).then(log);
    next();
  },
  fetch() {
    for (const item of arrayFetched) {
        state.all[item.position] = item;
    }
  }
  destroyed() {
    socket.off(`build:${this.$route.params.id}` log);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
