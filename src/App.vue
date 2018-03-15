<template>
  <div id="app">
    <fs-header></fs-header>
    <router-view></router-view>
    <fs-footer></fs-footer>
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
