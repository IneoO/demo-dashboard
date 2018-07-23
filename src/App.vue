<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
  @import './assets/scss/main';

  html, body {
    overflow-y: hidden;
    height: 100%;
  }
</style>
