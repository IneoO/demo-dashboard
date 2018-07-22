<template>
  <div class="User-area">
    <div class="User-avtar" @click="internal">
     <i class="icon fas fa-user fa-lg"></i>
    </div>
      <ul v-if="isVisible" class="User-Dropdown" v-clickOutside="external">
        <li><span>My Profile</span></li>
        <li><span>Projects</span></li>
        <li><span>Settings</span></li>
        <li><span>Logout</span></li>
      </ul>
  </div>
</template>

<script src="./UserDropDown.js"></script>
<style scoped src="./UserDropDown.scss" lang="scss"></style>
