<template>
  <main>
    <transition name="leave">
      <div class="menu" :class="{ squeeze: squeeze }" v-if="!squeeze">
        <div class="logo">
          <h1>coding<span>herald</span></h1>
          <i
            class="fa-solid fa-align-left small-screen"
            @click="squeezeFunc()"
          ></i>
        </div>
        <div class="user">
          <h3 :title="user.username">{{ user.username }}</h3>
          <p :title="user.email">{{ user.email }}</p>
        </div>

        <router-link to="/overview/profile" class="route">
          <i class="fa-solid fa-address-card"></i> profile</router-link
        >
        <router-link to="/overview/todo" class="route">
          <i class="fa-regular fa-address-book"></i>todo app</router-link
        >
        <router-link to="/overview/locked" class="route"
          ><i class="fa-solid fa-bitcoin-sign"></i>crypto</router-link
        >
        <router-link to="/overview/Exchange" class="route"
          ><i class="fa-solid fa-sack-dollar"></i>exchange</router-link
        >
        <router-link to="/overview/weather" class="route"
          ><i class="fa-solid fa-cloud-sun-rain"></i>weather</router-link
        >
        <router-link to="/" @click="logoutFunc()" class="route">
          <i class="fa-solid fa-right-from-bracket"></i>logout</router-link
        >
      </div>
    </transition>
    <transition name="leave">
      <div
        class="menu small-screen"
        :class="{ squeeze: squeeze }"
        v-if="squeeze"
      >
        <div class="logo">
          <h1>codingherald</h1>
          <i
            class="fa-solid fa-align-left small-screen"
            @click="squeezeFunc()"
          ></i>
        </div>
        <div class="user">
          <h3 :title="user.username">{{ user.username }}</h3>
          <p :title="user.email">{{ user.email }}</p>
        </div>

        <router-link
          to="/overview/profile"
          class="route"
          @click="squeezeFunc()"
        >
          <i class="fa-solid fa-address-card"></i> profile</router-link
        >
        <router-link to="/overview/todo" class="route" @click="squeezeFunc()">
          <i class="fa-regular fa-address-book"></i>todo app</router-link
        >
        <router-link to="/overview/locked" class="route" @click="squeezeFunc()"
          ><i class="fa-solid fa-bitcoin-sign"></i>crypto</router-link
        >
        <router-link
          to="/overview/Exchange"
          class="route"
          @click="squeezeFunc()"
          ><i class="fa-solid fa-sack-dollar"></i>exchange</router-link
        >
        <router-link to="/overview/weather" class="route" @click="squeezeFunc()"
          ><i class="fa-solid fa-cloud-sun-rain"></i>weather</router-link
        >
        <router-link to="/" @click="logoutFunc()" class="route">
          <i class="fa-solid fa-right-from-bracket"></i>logout</router-link
        >
      </div>
    </transition>

    <header :class="{ squeeze: squeeze }">
      <i class="fa-solid fa-align-left" @click="squeezeFunc()"></i>
      <h1>Dash<span>board</span></h1>
      <a href="/contact" class="large-screen">contact</a>
      <a href="/contact" class="small-screen"
        ><i class="fa-solid fa-phone"></i
      ></a>
    </header>
    <div class="content" :class="{ squeeze: squeeze }">
      <transition name="move">
        <router-view />
      </transition>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Client",
  setup() {
    const router = useRouter();
    let squeeze = ref(false);

    let user = reactive({
      username: "",
      email: "",
    });
    let getFromLocalStorage = ref(localStorage.getItem("accessId"));
    onMounted(() => {
      if (!getFromLocalStorage.value) {
        return router.push("/login");
      }

      axios("api/todo/" + `${getFromLocalStorage.value}`)
        .then(async (res) => {
          user.username = res.data.username;
          user.email = res.data.email;
        })
        .catch((err) => {
          router.push("/login");
          return err;
        });
    });

    function logoutFunc() {
      localStorage.setItem("accessToken", "");
      router.push("/");
    }

    function squeezeFunc() {
      squeeze.value = !squeeze.value;
    }
    return { squeeze, squeezeFunc, user, logoutFunc };
  },
};
</script>

<style lang="scss" scoped>
$tertiaryCol: rgb(224, 222, 222);
$col: #3d566f;
main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  background: rgb(212, 216, 228);
  background: white;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .menu {
    width: 24vw;
    height: 100vh;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 1px 1px 0.2px 0.5px rgb(212, 216, 228);

    .logo {
      height: 12vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        font: 600 30px "Grand Hotel", sans-serif;
        color: teal;
        text-align: center;
        span {
          color: #e66581;
        }
      }
      .small-screen {
        display: none;
        margin-left: 10px;
      }
    }

    .user {
      width: 90%;
      margin: 7px auto;
      padding: 0 10px;
      color: teal;

      h3 {
        font: 600 15px "Poppins", sans-serif;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p {
        font: 500 12px "Poppins", sans-serif;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .route {
      width: 80%;
      height: 40px;
      text-decoration: none;
      font: 500 17px "Poppins", sans-serif;
      cursor: pointer;
      // background: linear-gradient(to bottom, rgb(55, 220, 193), teal);
      // background-clip: text;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      color: teal;
      padding: 10px;
      margin: 8px auto;
      margin-left: 18%;
      text-transform: capitalize;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      i {
        width: 40px;
        margin-right: 8px;
        font-size: 25px;
      }

      &.router-link-exact-active {
        background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
        font-weight: 600;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    @media screen and (max-width: 850px) {
      display: none;
      width: 40vw;
      z-index: 1;

      @media screen and (max-width: 700px) {
        width: 100vw;
        overflow-y: scroll;
        .logo {
          height: 20vh;
          justify-content: space-between;
          padding: 0 40px;

          h1 {
            font-size: 40px;
          }
          .small-screen {
            display: block;
            font-size: 41px;
            color: teal;
          }
        }

        .user {
          h3 {
            font-size: 40px;
          }
        }
        .route {
          height: 60px;
          font-size: 24px;
          margin: 10px auto;

          i {
            width: 60px;
            font-size: 30px;
            margin-right: 13px;
          }
        }
      }
    }
  }
  .menu.small-screen {
    display: none;
  }

  .menu.squeeze {
    display: none;

    @media screen and (max-width: 850px) {
      display: block;
    }
  }

  header {
    width: 76vw;
    height: 12vh;
    position: fixed;
    top: 0;
    right: 0;
    background: white;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-shadow: 2px 1px 1px 0.5px rgb(212, 216, 228);

    i {
      color: teal;
      font-weight: 900;
      font-size: 27px;
      cursor: pointer;
    }

    h1 {
      color: #e66581;
      font: 500 30px "Grand Hotel", cursive;
      span {
        color: teal;
      }
    }

    a {
      text-decoration: none;
      color: teal;
      cursor: pointer;
      font: 500 30px "Grand Hotel", cursive;
    }
    a.small-screen {
      display: none;
    }

    @media screen and (max-width: 850px) {
      width: 100vw;

      @media screen and (max-width: 550px) {
        a.large-screen {
          display: none;
        }
        a.small-screen {
          display: block;
        }
      }
    }
  }
  header.squeeze {
    width: 100vw;
    @media screen and (max-width: 850px) {
      width: 60vw;
      @media screen and (max-width: 700px) {
        display: none;
      }
    }
  }
  .content {
    width: 76vw;
    height: 88vh;
    position: fixed;
    right: 0;
    top: 12vh;
    overflow-y: scroll;
    background: rgb(212, 216, 228);

    @media screen and (max-width: 850px) {
      width: 100vw;
    }
  }
  .content.squeeze {
    width: 100vw;
  }
}
</style>
