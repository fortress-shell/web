<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from '@/components/shell/footer-component';
import HeaderComponent from '@/components/shell/header-component';

export default {
  components: {
    'footer-component': FooterComponent,
    'header-component': HeaderComponent,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
