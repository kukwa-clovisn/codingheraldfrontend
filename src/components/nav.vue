<template>
  <nav>
    <router-link to="/" class="route">exchange</router-link>
    <span>|</span>
    <router-link to="/" class="route">liquidity</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 8vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  span {
    color: rgb(31, 199, 212);
    font-size: 32px;
    margin: -0.5%;
  }

  .route {
    text-decoration: none;
    padding: 0 0 0 1%;
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.2s ease;
    color: brown;
    &:active {
      transform: translateX(10px);
    }
    &:first-child {
      padding: 0 1% 0 0;
      color: rgb(118, 74, 219);
      border-bottom: 4px solid rgb(31, 199, 212);
    }
  }
}
</style>