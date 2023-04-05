<template>
  <div class="menu-container">
    <div class="blur-wrapper"></div>
    <div class="menu-content">
      <div class="menu-wrapper"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .menu-content {
    width: 40vw;
    height: 100vh;
    background: white;
    position: relative;
  }
}
</style>
     