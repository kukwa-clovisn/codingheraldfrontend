<template>
  <header class="bg-white d-flex justify-between items-center">
    <nav class="left-content">
      <div
        class="logo d-flex flex-row justify-content-center align-items-center"
      >
        <i
          class="far fa-user i-logo"
          style="font-size: 21px; color: rgb(118, 74, 219); cursor: pointer"
        ></i>
        <span class="text-uppercase name" style="color: brown">kcn</span>
        <h1 class="text-capitalize">pancakeSwap</h1>
      </div>
      <nav>
        <router-link to="/" class="route text-capitalize text-bold p-1"
          >home</router-link
        >
        <router-link to="/" class="route text-capitalize text-bold p-1">
          trade</router-link
        >
        <router-link to="/" class="route text-capitalize text-bold p-1"
          >earn</router-link
        >
        <router-link to="/" class="route text-capitalize text-bold p-1"
          >win</router-link
        >
        <router-link to="/" class="route text-uppercase text-bold p-1"
          >nft</router-link
        >
      </nav>
    </nav>
    <nav
      class="
        right-content
        d-none d-lg-flex d-md-flex
        justify-content-between
        align-items-center
      "
      style="color: rgb(23, 116, 122)"
    >
      <span
        class="
          d-none d-lg-flex
          justify-content-center
          align-items-center
          bitcoin
        "
      >
        <i
          class="fab fa-bitcoin mx-1"
          style="font-size: 25px; color: brown; cursor: pointer"
        ></i
        >$19.821
      </span>

      <i
        class="fas fa-globe d-none d-lg-flex"
        style="font-size: 22px; cursor: pointer"
      ></i>
      <i
        class="fas fa-cog d-none d-lg-flex"
        style="font-size: 22px; cursor: pointer"
      ></i>
      <Button
        btn="connect to wallet"
        class="d-none d-lg-block d-md-block"
        style="
          height: 35px;
          border-radius: 10px;
          padding: 5px;
          font-size: 13px;
          background: brown;
        "
      />
    </nav>
  </header>
</template>

<script>
// import { ref } from "@vue/reactivity";
import Button from "./Button.vue";
export default {
  name: "Cheader",

  components: {
    Button,
  },

  // setup() {
  //   let name = "this is a name";

  //   const list = ref("");

  //   list.value.classList.add("text-uppercase");

  //   for (let i = 0; i < 10; i++) {
  //     console.log(i);
  //   }

  //   console.log(name);

  //   return {
  //     name,
  //     list,
  //   };
  // },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgb(224, 223, 223);

  .left-content {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1000px) {
      justify-content: center;
      width: 70%;
    }
    @media screen and (max-width: 768px) {
      justify-content: space-between;
    }

    .logo {
      width: 40%;
      height: 100%;
      @media screen and (max-width: 1000px) {
        width: 20%;
      }
      .name {
        font-weight: 700;
        padding: 0 10px;
        font-size: 20px;
        display: none;
        cursor: pointer;
        @media screen and (max-width: 1000px) {
          display: block;
        }
      }
      .i-logo {
        @media screen and (max-width: 1000px) {
          display: none;
        }
      }
      h1 {
        font-size: 20px;
        font-weight: 700;
        height: 100%;
        cursor: pointer;
        margin: 0;
        display: flex;
        align-items: center;
        padding-left: 10px;
        @media screen and (max-width: 1000px) {
          display: none;
        }
      }
    }
    nav {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .route {
        cursor: pointer;
        font-weight: 600;
        color: rgb(58, 56, 58);
        text-decoration: none;
        transition: all 0.2s ease;

        &:active {
          transform: translateX(10px);
        }
        &.router-link-exact-active {
          color: #42b983;
        }
        &:first-child {
          color: rgb(118, 74, 219);
        }
      }
    }
  }

  .right-content {
    width: 400px;
    height: 100%;
    padding-right: 10px;
    @media screen and (max-width: 1000px) {
      width: 200px;
    }
  }
}
</style>