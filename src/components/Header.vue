<template>
  <main>
    <header class="large-screens" :class="{ whiteBg: showApps }">
      <nav class="logo">
        <router-link to="/" class="logoName" title="go to home"
          ><img src="../../public/logo-white.jpg" alt=""
        /></router-link>
      </nav>
      <nav>
        <router-link to="/" class="route-to">Home</router-link>
        <span @click="dropDownApps()" class="route-to">about us</span>
        <a href="/#apps" class="route-to">apps</a>
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
              <a href="/overview/Todo"
                ><i class="fa-solid fa-calendar-check"></i>dairy</a
              >
            </li>
            <li>
              <a href="/overview/currency"
                ><i class="fa-brands fa-bitcoin"></i>cryptoswap</a
              >
            </li>
            <li>
              <a href="https://advancedtechacademy.herokuapp.com"
                ><i class="fa-solid fa-music"></i>piano lessons</a
              >
            </li>
          </ul>
        </div>
      </transition>
      <nav>
        <router-link to="/contact" class="route-to">contact</router-link>
        <router-link to="/register" class="route-to"
          >sign up
          <!-- <transition name="trying">
            <span></span>
          </transition> -->
        </router-link>
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
      toggled.value = !toggled.value;
      showApps.value = !showApps.value;
    }

    function dropDownApps() {
      showApps.value = !showApps.value;
    }

    return {
      showApps,
      clicked,
      toggled,
      toggleMenu,
      dropDownApps,
    };
  },
};
</script>

<style lang="scss" scoped>
.trying.enter-from {
  width: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  background: rgb(33, 85, 100);
  animation: hovering-in 1s linear alternate forwards;
}
.trying.enter-to {
  left: 0;
  width: 100%;
}
.trying.leave-to {
  animation: hovering-out 1s linear alternate forwards;
}
main {
  width: 100vw;
  height: fit-content;
  header {
    width: 100%;
    height: 13vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(33, 85, 100);
    z-index: 1;

    nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 30%;
      height: 100%;

      .route-to {
        text-decoration: none;
        color: rgb(255, 255, 255);
        font: 500 13px "Poppins", sans-serif;
        text-transform: capitalize;
        cursor: pointer;
        position: relative;

        span {
          width: 100%;
          height: 3px;
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgb(3, 183, 183);
          border-radius: 30px;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: rgb(241, 210, 3);
          animation: hovering 1s 2 linear alternate forwards;
        }

        &:hover {
          color: rgb(248, 212, 9);
        }
      }
    }

    @keyframes hovering {
      to {
        width: 100%;
      }
    }

    .logo {
      width: 20%;

      .logoName {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &::before {
          content: "";
          width: 80px;
          height: 80px;
          border-radius: 100%;
          position: absolute;
          top: 0;
          right: 0;
          border: 3px solid rgb(27, 79, 94);
        }

        &::after {
          content: "";
          width: 80px;
          height: 80px;
          border-radius: 100%;
          position: absolute;
          top: 0;
          right: 0;
          border: 4px solid rgb(228, 176, 4);
          transform: rotateY(80deg);
        }
      }
    }

    #app-list {
      width: 100vw;
      height: fit-content;
      background: white;
      position: fixed;
      top: 10vh;
      left: 0;
      z-index: 1;

      h1 {
        padding: 10px 5px;
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
          flex-basis: 1;
          flex-grow: 1;
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
            font: 500 11px "Poppins", sans-serif;
            color: teal;

            i {
              padding-right: 5px;
              font-size: 19px;
              color: rgb(176, 77, 38);
            }
          }
        }
      }

      @media screen and (max-width: 500px) {
        height: fit-content;
        top: 10vh;
        left: 0;
        box-shadow: 0 7px 5px rgb(220, 219, 219);
        ul {
          flex-direction: column;
          height: fit-content;
          padding: 0;
          margin: 0;
          width: 100%;
          background: rgb(255, 252, 252);

          li {
            width: 100%;
            flex-grow: 1;
            flex-basis: 1;
            margin: 0;
            border-top: 1px solid rgb(228, 226, 226);

            a {
              padding-left: 20px;
              display: flex;
              justify-content: flex-start;
              align-items: center;

              i {
                padding-right: 20px;
              }
            }
            &:hover {
              background: #ffffff;
              border-left: 5px solid rgb(176, 77, 38);
            }
            &:active {
              transform: scale(1);
            }
          }
        }
      }
    }

    #bars {
      font-size: 28px;
      width: 20%;
      text-align: center;
      position: relative;
      color: rgb(255, 255, 255);
      cursor: pointer;
      transition: all 0.3s ease;

      .menu-bars {
        transition: all 0.2s ease;

        &:hover {
          transform: rotateZ(-90deg);
        }
        &:active {
          font-size: 1.5em;
        }
      }
    }

    @media screen and (max-width: 500px) {
      nav {
        width: 36%;
        .route-to {
          font-size: 9px;
        }
      }
    }
  }

  .large-screens {
    background: rgb(33, 85, 100);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  header.whiteBg {
    background: white;
    box-shadow: none;

    nav .route-to {
      color: teal;
    }
  }
}
</style>