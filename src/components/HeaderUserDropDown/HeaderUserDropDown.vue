<template>
  <div class="user-area">
    <div class="user-avatar" @click="internal">
     <i class="icon fas fa-user fa-lg"></i>
    </div>
      <ul v-if="isVisible" class="user-Dropdown" v-clickOutside="external">
        <li><span>My Profile</span></li>
        <li><span>Projects</span></li>
        <li><span>Settings</span></li>
        <li><span>Logout</span></li>
      </ul>
  </div>
</template>

<script src="./HeaderUserDropDown.js"></script>
<style scoped src="./HeaderUserDropDown.scss" lang="scss"></style>
