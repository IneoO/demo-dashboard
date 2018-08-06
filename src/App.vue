<template>
  <div id="app">
    <Header @showMenu="showMenu"/>
    <Menu />
    <div class="full-height">
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

  @media screen and (max-width: 1087px) {
    .container {
      margin: 10px;
      max-width: inherit;
      width: auto;
    }
  }

  @media screen and (min-width: 1088px) {
    .container {
      margin-left: 240px;
      margin-top: 30px;
      margin-right: 40px;
      margin-bottom: 40px;
      max-width: inherit;
      width: auto;
    }
  }

  @media screen and (min-width: 1280px) {
    .container {
      margin-left: 240px;
      margin-top: 30px;
      margin-right: 40px;
      margin-bottom: 40px;
      max-width: inherit;
      width: auto;
    }
  }

  @media screen and (min-width: 1472px) {
    .container {
      margin-left: 240px;
      margin-top: 30px;
      margin-right: 40px;
      margin-bottom: 40px;
      max-width: inherit;
      width: auto;
    }
  }

  html, body, #app{
    overflow-y: hidden;
    height: 100%;
  }
</style>
