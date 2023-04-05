<template>
  <header>
    <div class="header-wrapper">
      <div class="logo">coding <span>herald</span></div>
      <div class="nav-links">
        <router-link to="/">home</router-link>
        <router-link to="/">header</router-link>
        <router-link to="/templates/landing-pages">landing pages</router-link>
        <router-link to="/">alerts</router-link>
        <router-link to="/">footer</router-link>
        <router-link to="/">dashborad</router-link>
        <button @click="showTemplateMenu = true">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
    <div :class="[{ 'menu-dv': showTemplateMenu }]" v-if="showTemplateMenu">
      <templateMenu />
    </div>
  </header>
</template>

<script setup>
import templateMenu from "@/components/templates/menu.vue";
import { ref } from "vue";

const showTemplateMenu = ref(false);
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 13vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .header-wrapper {
    width: 75%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(20, 80, 91);
      text-transform: capitalize;
      font: 700 26px "Grand Hotel", cursive;

      span {
        color: rgb(222, 153, 4);
        font-family: "Grand Hotel", cursive;
      }
    }

    .nav-links {
      width: 70%;
      height: fit-content;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 10px;

      a {
        text-decoration: none;
        color: rgb(44, 43, 43);
        text-transform: capitalize;
      }
      .router-link-active,
      .router-link-exact-active {
        color: rgb(210, 141, 3);
        border-bottom: 2px solid orange;
      }

      button {
        border: none;
        background: transparent;
        cursor: pointer;
      }
    }
  }
}
</style>