<template>
  <main>
    <header>
      <nav class="logo">
        <router-link to="/" class="logoName" title="go to home">CH</router-link>
      </nav>
      <nav @click="dropDownApps()">
        <span class="route-to">services</span>
      </nav>
      <transition name="fade">
        <div id="app-list" v-if="showApps">
          <h1>our courses and services</h1>
          <ul>
            <li>
              <a href="https://advancedtechacademy.herokuapp.com"
                ><i class="fa-solid fa-graduation-cap"></i>academy</a
              >
            </li>
            <li>
              <a href="/course/crypto"
                ><i class="fa-solid fa-calendar-check"></i>dairy</a
              >
            </li>
            <li>
              <a href="/course/forex"
                ><i class="fa-brands fa-bitcoin"></i>cryptoswap</a
              >
            </li>
            <li>
              <a href="/https://advancedtechacademy.herokuapp.com"
                ><i class="fa-solid fa-music"></i>piano lessons</a
              >
            </li>
          </ul>
        </div>
      </transition>
      <nav>
        <router-link to="/Register" class="route-to">sign up</router-link>

        <router-link to="/login" class="route-to">sign in</router-link>
      </nav>
    </header>
    <header class="small-screens">
      <nav v-if="toggled" class="sidebar">
        <div>
          <h1 class="sidebar-logo">condingHerald.com</h1>
          <span class="close" title="Close page" @click="untoggle()"
            >&times;</span
          >
        </div>
        <div class="sidebar-content-div" title="Click to see all Directories">
          <span>directories</span> <i class="fas fa-arrows-alt"></i>
        </div>

        <div class="sidebar-content-div">sign up</div>
        <div class="sidebar-content-div">
          <router-link to="/Demo" class="route-to-sidebar-content"
            >demo</router-link
          >
        </div>
        <div class="sidebar-content-div">
          <router-link to="/Page" class="route-to-sidebar-content"
            >ACTA</router-link
          >
        </div>
      </nav>

      <nav
        class="
          logo
          d-flex
          justify-content-center
          align-items-center
          flex-md-column
          text-capitalize
        "
        title="In Christ alone#TeamJesus4Life"
      >
        codingHerald
      </nav>
      <nav id="bars" v-if="clicked" @click="toggleMenu()">
        <i class="fa fa-bars" id="menu-bar" title="menu/projects"></i>
      </nav>
    </header>
  </main>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Header",
  setup() {
    let toggled = ref(false);
    let clicked = ref(true);
    let showApps = ref(false);

    function toggleMenu() {
      toggled.value = true;
      clicked.value = false;
    }
    function untoggle() {
      toggled.value = false;
      clicked.value = true;
    }

    function dropDownApps() {
      showApps.value = !showApps.value;
    }

    return { showApps, clicked, toggled, toggleMenu, untoggle, dropDownApps };
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: fit-content;
  header {
    width: 95%;
    height: 15vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    position: relative;

    nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 30%;
      height: 100%;

      .route-to {
        text-decoration: none;
        color: teal;
        font: 600 17px "Poppins", sans-serif;
        text-transform: capitalize;
        cursor: pointer;
      }
    }

    .logo {
      width: 20%;

      .logoName {
        color: rgb(176, 77, 38);
        font: 800 50px "Poppins", sans-serif;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 90px;

        &::before {
          content: "";
          width: 100px;
          height: 100px;
          border-radius: 100%;
          position: absolute;
          top: 0;
          right: 0;
          border: 3px solid rgb(176, 77, 38);
        }

        &::after {
          content: "";
          width: 100px;
          height: 100px;
          border-radius: 100%;
          position: absolute;
          top: 0;
          right: 0;
          border: 4px solid teal;
          transform: rotateY(80deg);
        }

        &::first-letter {
          color: teal;
        }
      }
    }

    #app-list {
      width: 100vw;
      height: 17vh;
      background: white;
      position: absolute;
      bottom: -100%;
      left: -2.5%;
      z-index: 1;

      h1 {
        padding: 5px;
        text-transform: capitalize;
        font: 600 15px "Poppins", sans-serif;
        text-align: center;
        color: rgb(176, 77, 38);
      }

      ul {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        li {
          list-style-type: none;
          width: 16%;
          height: 9vh;
          cursor: pointer;

          a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-transform: capitalize;
            font: 600 16px "Poppins", sans-serif;
            color: teal;

            i {
              padding-right: 5px;
              font-size: 19px;
              color: rgb(176, 77, 38);
            }
          }
        }
      }
    }

    #bars {
      font-size: 2em;
      width: 15%;
      text-align: center;
      position: relative;
      color: rgb(2, 126, 109);
      cursor: pointer;
      transition: all 0.3s ease;

      #menu-bar {
        transition: all 0.2s ease;

        &:hover {
          transform: rotateZ(-90deg);
        }
        &:active {
          font-size: 1.5em;
        }
      }
    }
  }

  .small-screens {
    display: none;
  }
}
</style>