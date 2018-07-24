<template>
  <div id="app">
    <!-- <router-view/> -->
    <Header />
    <Menu />
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu.vue';
import Header from '@/components/Header/Header.vue';


export default {
  name: 'App',
  components: {
    Menu, Header,
  },
};
</script>

<style lang="scss">
  @import './assets/scss/main';

  html, body, #app{
    overflow-y: hidden;
    height: 100%;
  }
</style>
