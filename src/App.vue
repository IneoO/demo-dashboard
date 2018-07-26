<template>
  <div id="app">
    <!-- <router-view/> -->
    <Header @showMenu="showMenu"/>
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
  methods: {
    showMenu() {
      this.$emit('showMenu');
    },
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
