<template>
  <nav class="navbar header" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
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
