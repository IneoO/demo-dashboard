<template>
  <nav class="navbar header" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item header-brand" href="">
        <img src="../../assets/img/getTech.png" alt="GetTech" width="112" height="56">
      </a>
      <div class="header-burger">
        <div class="burger-area">
          <div class="burger-icon">
           <i class="icon fas fa-bars fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-menu header-items">
      <div class="navbar-end header-items--end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <UserDropDown />
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script src="./Header.js"></script>
<style scoped src="./Header.scss" lang="scss"></style>
