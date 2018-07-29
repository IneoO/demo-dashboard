<template>
  <div id="app">
    <Header @showMenu="showMenu"/>
    <div class="full-height">
      <Menu />
      <div class="container">
        <router-view />
      </div>
    </div>
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
