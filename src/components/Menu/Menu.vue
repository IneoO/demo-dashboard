<template>
  <div>
    <aside class="menu desktop-display">
      <div v-for="menu in menus"
        :key="menu.id">
        <p class="menu-label">
          {{menu.text}}
        </p>
        <ul class="menu-list">
          <li v-for="submenu in menu.submenus"
            :key="submenu.id">
            <router-link :to="submenu.href" active-class="is-active" exact>
              <i :class="[...cssClass, submenu.icon]"></i>
              <span>{{submenu.text}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
    <div v-if="isDisplayed" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <aside class="menu mobile-display" v-clickOutside="external">
          <a class="navbar-item header-brand" href="">
            <img src="../../assets/img/getTech.png" alt="GetTech" width="112" height="56">
          </a>
          <div v-for="menu in menus"
            :key="menu.id">
            <p class="menu-label">
              {{menu.text}}
            </p>
            <ul class="menu-list">
              <li v-for="submenu in menu.submenus"
                :key="submenu.id">
                <router-link v-link="submenu.href">
                  <i :class="[...cssClass, submenu.icon]"></i>
                  <span>{{submenu.text}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script src="./Menu.js"></script>
<style scoped src="./Menu.scss" lang="scss"></style>
