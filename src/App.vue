<template>
  <div id="app" class="is-marginless is-paddingless">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  max-height: 100%;
  min-height: 100%;
  overflow: auto;
}
$primary: #9c9c9c;
$info: #9c9c9c;
$danger: #f05f60;
$success: #3db39e;
$link: grey;
$fa-font-path: "~font-awesome/fonts";

.fsh-brand {
  color: #848484 !important;
}

.fsh-primary {
  color: $success !important;
}

.fsh-subtitle {
  color: #666 !important;
}

.is-active-item {
  border-bottom: 2px solid $info;
}

a[disabled] {
    pointer-events: none;
}

@import "~bulma";
@import "~bulma-timeline";
@import "~bulma-switch";
@import "~font-awesome/scss/font-awesome";

.media {
  align-items: center;
}

.fsh-elipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>

