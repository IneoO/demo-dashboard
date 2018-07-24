<template>
  <aside class="menu">
    <div v-for="menu in menus"
      :key="menu.id">
      <p class="menu-label">
        {{menu.text}}
      </p>
      <ul class="menu-list">
        <li v-for="submenu in menu.submenus"
          :key="submenu.id">
          <a>
            <i :class="[...cssClass, submenu.icon]"></i>
            <span>{{submenu.text}}</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script src="./Menu.js"></script>
<style scoped src="./Menu.scss" lang="scss"></style>
