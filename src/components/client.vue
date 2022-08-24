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
        <div class="user" @click="toProfile()">
          <div class="img">
            <img :src="user.photo" v-if="user.photo" alt="" />
            <img src="../assets/todo.jpg" v-else alt="" />
          </div>
          <div class="user-info">
            <h3 :title="user.username">{{ user.username }}</h3>
            <p :title="user.description">{{ user.description }}</p>
          </div>
        </div>

        <router-link to="/overview/profile" class="route">
          <i class="fa-solid fa-address-card"></i><span>profile</span>
        </router-link>
        <router-link to="/overview/todo" class="route">
          <i class="fa-regular fa-address-book"></i><span>todo app</span>
        </router-link>
        <router-link to="/overview/imageCompressor/" class="route"
          ><i class="fa-solid fa-minimize"></i><span>imageCompressor</span>
        </router-link>
        <router-link to="/overview/Exchange" class="route"
          ><i class="fa-solid fa-sack-dollar"></i><span>exchange</span>
        </router-link>
        <router-link to="/overview/weather" class="route"
          ><i class="fa-solid fa-cloud-sun-rain"></i><span>weather</span>
        </router-link>
        <router-link to="/" @click="logoutFunc()" class="route">
          <i class="fa-solid fa-right-from-bracket"></i><span>logout</span>
        </router-link>
      </div>
    </transition>
    <transition name="leave">
      <div
        class="menu small-screen"
        :class="{ squeeze: squeeze }"
        v-if="squeeze"
      >
        <div class="logo">
          <h1>coding<span>herald</span></h1>
          <i
            class="fa-solid fa-align-right small-screen"
            @click="squeezeFunc()"
          ></i>
        </div>
        <div class="user" @click="toProfile()">
          <div class="img">
            <img :src="user.photo" v-if="user.photo" alt="" />
            <img src="../assets/todo.jpg" v-else alt="" />
          </div>
          <div class="user-info">
            <h3 :title="user.username">{{ user.username }}</h3>
            <p :title="user.description">{{ user.description }}</p>
          </div>
        </div>

        <router-link
          to="/overview/profile"
          class="route"
          @click="squeezeFunc()"
        >
          <i class="fa-solid fa-address-card"></i><span>profile</span>
        </router-link>
        <router-link to="/overview/todo" class="route" @click="squeezeFunc()">
          <i class="fa-regular fa-address-book"></i><span>todo app</span>
        </router-link>
        <router-link
          to="/overview/imageCompressor/"
          class="route"
          @click="squeezeFunc()"
          ><i class="fa-solid fa-minimize"></i><span>imageCompressor</span>
        </router-link>
        <router-link
          to="/overview/Exchange"
          class="route"
          @click="squeezeFunc()"
          ><i class="fa-solid fa-sack-dollar"></i><span>exchange</span>
        </router-link>
        <router-link to="/overview/weather" class="route" @click="squeezeFunc()"
          ><i class="fa-solid fa-cloud-sun-rain"></i> <span>weather</span>
        </router-link>
        <router-link to="/" @click="logoutFunc()" class="route">
          <i class="fa-solid fa-right-from-bracket"></i><span>logout</span>
        </router-link>
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
      <router-view v-slot="{ Component }">
        <transition name="move">
          <component :is="Component" />
        </transition>
      </router-view>
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
      description: "",
      photo: null,
    });
    let getFromLocalStorage = ref(localStorage.getItem("accessId"));
    onMounted(() => {
      if (!getFromLocalStorage.value) {
        return router.push("/login");
      }

      axios("api/todo/" + `${getFromLocalStorage.value}`)
        .then(async (res) => {
          user.username = res.data.username;
          user.description = res.data.description;
          user.photo = `data:image/png;base64,` + res.data.image;
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

    function toProfile() {
      router.push("/overview/profile");
    }
    return { squeeze, squeezeFunc, user, logoutFunc, toProfile };
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
    overflow: auto;
    overflow-x: hidden;
    box-shadow: 1px 1px 0px 0.5px whitesmoke;

    .logo {
      height: 16vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: teal;
      margin: 0;

      h1 {
        font: 600 30px "Grand Hotel", sans-serif;
        color: white;
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
      width: 100%;
      height: fit-content;
      margin: 0;
      padding: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: whitesmoke;
      cursor: pointer;

      .img {
        width: 90px;
        height: 90px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: Center;
        overflow: hidden;
        box-shadow: 0 0 4px rgb(225, 225, 225);

        img {
          height: 100%;
          width: auto;
          cursor: pointer;
        }
      }

      .user-info {
        width: 55%;
        padding-left: 10px;

        h3 {
          font: 550 18px "Poppins", sans-serif;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: rgb(87, 87, 87);
          padding: 0;
          margin: 0;
        }
        p {
          font: 500 15px "Poppins", sans-serif;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: rgb(150, 148, 148);
          margin: 0;
          padding: 3px 0;
        }
      }
    }

    .route {
      width: 100%;
      height: 60px;
      text-decoration: none;
      cursor: pointer;
      text-transform: capitalize;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background: white;

      i {
        width: 40px;
        margin-right: 8px;
        font-size: 25px;
        color: rgb(190, 193, 193);
      }

      span {
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        font-weight: 400;
        font-family: Arial, Helvetica, sans-serif;
        color: rgb(50, 50, 50);
        border-bottom: 1px solid rgb(229, 228, 228);
        transform: none;
      }

      &.router-link-exact-active {
        background: whitesmoke;

        span,
        i {
          font-weight: 600;
          font-size: 1.1rem;
          color: #e66581;
        }
      }

      &:hover {
        transform: none;
      }
    }

    @media screen and (max-width: 850px) {
      display: none;
      width: 40vw;
      z-index: 1;

      @media screen and (max-width: 700px) {
        width: 100vw;
        overflow-y: auto;
        .logo {
          height: 20vh;
          justify-content: space-between;
          padding: 0 40px;

          h1 {
            font-size: 40px;
          }
          i {
            color: white;
          }
          .small-screen {
            display: block;
            font-size: 41px;
          }
        }

        .user {
          h3 {
            font-size: 40px;
          }
        }
        .route {
          height: 60px;

          i {
            width: 60px;
            font-size: 30px;
          }
          span {
            font-size: 19px;
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
    box-shadow: 2px 1px 0px 0.5px whitesmoke;

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
    background: whitesmoke;

    @media screen and (max-width: 850px) {
      width: 100vw;
    }
  }
  .content.squeeze {
    width: 100vw;
  }
}
</style>
