<template>
  <main>
    <div class="menu">
      <router-link to="/overview/todo" class="route">todo app</router-link>
      <router-link to="/overview/currency" class="route">crypto</router-link>
      <router-link to="/overview/Exchange" class="route">exchange</router-link>
      <router-link to="/overview/weather" class="route">weather</router-link>
    </div>
    <div class="content">
      <transition name="move">
        <router-view />
      </transition>
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Client",
  setup() {
    const router = useRouter();
    let getFromLocalStorage = ref(localStorage.getItem("codingheraldtoken"));
    onMounted(() => {
      if (!getFromLocalStorage.value) {
        router.push("/login");
      }
      console.log(getFromLocalStorage.value);
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
$tertiaryCol: rgb(224, 222, 222);
$secondCol: rgb(3, 63, 126);
main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  background: rgb(212, 216, 228);
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .menu {
    width: 20vw;
    height: 100vh;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    background: $secondCol;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;

    .route {
      text-decoration: none;
      color: white;
      font: 500 21px "Poppins", sans-serif;
      cursor: pointer;

      padding: 20px 10px;
      text-transform: capitalize;

      &.router-link-exact-active {
        color: #f5ce23;
        background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .content {
    width: 80vw;
    position: fixed;
    right: 0;
    top: 0;
    overflow-y: scroll;
    height: 100vh;
    background: white;
  }
}
</style>
