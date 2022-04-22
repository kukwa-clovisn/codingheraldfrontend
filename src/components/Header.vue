<template>
  <header class="d-none d-lg-flex justify-content-center align-items-center">
    <nav
      class="
        logo
        d-flex
        justify-content-center
        align-items-center
        text-capitalize
      "
    >
      <router-link to="/" class="logoName" title="go to home"
        >CodingHerald.com</router-link
      >
    </nav>
    <nav class="nav d-flex justify-content-evenly align-items-center">
      <li>
        <router-link to="/Directory" class="route-to-directories"
          >directories</router-link
        >
      </li>
      <li>
        <router-link to="/Register" class="route-to-directories"
          >sign up</router-link
        >
      </li>
    </nav>
    <!-- <nav class="nav d-flex justify-content-between align-items-center">
      <li>
        <router-link to="/Currency" class="a"
          >Currency converter<i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/Exchange" class="a"
          >Currency Exchange<i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/Todo" class="a"
          >todo app<i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/User" class="a"
          >random user app<i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/Watch" class="a"
          >stop watch <i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/Weather" class="a"
          >weather forcast<i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/BMI" class="a"
          >BMI Calculator<i class="fa fa-caret-down"></i
        ></router-link>
      </li>
      <li style="background: rgb(245, 144, 95); color: #fff">
        <router-link to="/Register" class="a text-white">
          sign up <i class="fa fa-caret-down"></i>
        </router-link>
      </li>
      <span class="scroll">></span>
    </nav> -->
  </header>
  <header
    class="
      small-screens
      d-lg-none d-flex
      justify-content-between
      align-items-center
    "
  >
    <nav v-if="toggled" class="sidebar">
      <div
        class="sidebar-header d-flex justify-content-between align-items-center"
      >
        <h1 class="sidebar-logo">condingHerald.com</h1>
        <span class="close" title="Close page" @click="untoggle()"
          >&times;</span
        >
      </div>
      <div
        class="sidebar-content-div"
        title="Click to see all Directories"
        @click="showDirectories = !showDirectories"
      >
        <span>directories</span> <i class="fas fa-arrows-alt"></i>
      </div>
      <div class="sidebar-content" v-if="showDirectories">
        <ul class="list-of-directories">
          <li class="directory">
            <routerLink to="/Currency" class="route-to-directory"
              >Currency app</routerLink
            >
          </li>
          <li class="directory">
            <routerLink to="Todo" class="route-to-directory"
              >todo app</routerLink
            >
          </li>
          <li class="directory">
            <routerLink to="/Exchange" class="route-to-directory"
              >exchange app</routerLink
            >
          </li>
          <li class="directory">
            <routerLink to="/BMI" class="route-to-directory"
              >BMI calculator</routerLink
            >
          </li>
          <li class="directory">
            <routerLink to="/Weather" class="route-to-directory"
              >weather forcast</routerLink
            >
          </li>
          <li class="directory">
            <routerLink to="/Watch" class="route-to-directory"
              >stop watch</routerLink
            >
          </li>
          <li class="directory">
            <routerLink to="/User" class="route-to-directory"
              >random user</routerLink
            >
          </li>
        </ul>
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
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      toggled: false,
      clicked: true,
      scrolled: true,
      showDirectories: false,
    };
  },
  updated() {
    this.scrolled = false;
  },
  methods: {
    toggleMenu() {
      this.toggled = true;
      this.clicked = false;
    },
    untoggle() {
      this.toggled = false;
      this.clicked = true;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 15vh;

  @media screen and (max-width: 1000px) {
    height: 20vh;
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
  .sidebar {
    z-index: 1;
    width: 100vw;
    height: 101vh;
    background: linear-gradient(
      to bottom left,
      rgb(18, 18, 36) 0%,
      rgb(60, 60, 77) 100%
    );
    position: fixed;
    top: -20px;
    left: 0;
    overflow: hidden;
    overflow-y: scroll;
    padding-bottom: 30px;

    .sidebar-header {
      width: 100vw;
      height: 20vh;

      padding: 0 10px;

      .sidebar-logo {
        position: relative;
        left: 5%;
        text-transform: capitalize;
        color: teal;
        font-weight: 800;
        font-size: 45px;
      }
      .close {
        color: whitesmoke;
        font-weight: 700;
        font-size: 50px;
        margin-right: 20px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: rotateZ(-90deg);
        }
        &:active {
          font-size: 0.5em;
        }
      }
    }

    .sidebar-content-div {
      width: 300px;
      height: 55px;
      background: whitesmoke;
      margin: 1vh auto;
      position: relative;
      left: -20px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      color: var(--bs-dark);
      font-weight: 700;
      font-size: 30px;
      cursor: pointer;
      border-radius: 1px;
      transition: all 0.4s ease;

      &:hover {
        background: #333;
        color: white;
      }

      .route-to-sidebar-content {
        text-decoration: none;
        color: var(--bs-dark);
      }
    }

    .sidebar-content {
      width: 50vw;
      height: 55vh;
      position: relative;
      left: 30%;

      .list-of-directories {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;

        .directory {
          list-style-type: none;
          width: 100%;
          height: 40px;
          background: whitesmoke;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 1px;

          &:hover {
            background: transparent;
            border: 0.5px solid wheat;
          }

          .route-to-directory {
            text-decoration: none;
            text-transform: capitalize;
            font-weight: 500;
            width: 100%;
            height: 100%;
            align-self: center;
            padding-left: 20px;
            padding-top: 6px;
            color: var(--bs-dark);
            transition: all 0.3s ease;

            &:hover {
              color: whitesmoke;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  .apps {
    width: 40vw;
    height: 100%;
    margin-right: 2%;
    @media screen and (max-width: 1000px) {
      height: 50%;
    }
  }

  .logo {
    color: rgb(176, 77, 38);
    font-weight: 700;
    font-size: 1.3em;
    cursor: pointer;
    .logoName {
      text-decoration: none;
      cursor: pointer;
      font-weight: 600;
      font-size: 1.5em;
      color: rgb(176, 77, 38);
      letter-spacing: 1.3px;
      position: relative;

      @media screen and (max-width: 1200px) {
        font-size: 1em;
      }

      @media screen and (max-width: 1000px) {
        font-size: 1.8em;
        width: 70%;
        left: -10%;
        font-size: 2em;
      }
    }
  }

  nav {
    width: 40vw;
    padding: 4px;
    font-size: 1.1em;
    @media screen and (max-width: 800px) {
      width: 100%;
      margin: 3% 0;
    }

    .input {
      width: 290px;
      input {
        width: 85%;
        height: 40px;
        border: none;
        border-radius: 5px 0 0 5px;
        outline: none;
        padding: 10px 20px;
        cursor: pointer;
      }
      button {
        width: 15%;
        height: 40px;
        border: none;
        padding: 5px;
        border-radius: 0 5px 5px 0;
      }
    }
  }

  .nav {
    width: 45vw;
    overflow: hidden;
    flex-wrap: nowrap;
    position: relative;

    li {
      min-width: 210px;
      height: 40px;
      list-style-type: none;
      cursor: pointer;
      background: white;
      border-radius: 3px;
      transition: all 0.3s ease;

      &:hover {
        background: rgb(24, 26, 25);
        .route-to-directories {
          color: var(--bs-light);
        }
      }
      &:active {
        transform: scale(0.9) translateX(20px);
      }
      @media screen and (max-width: 768px) {
        &:hover {
          background: red;
        }
      }

      .route-to-directories {
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: rgb(2, 158, 62);
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        i {
          padding-right: 10px;
        }
      }

      @media screen and (max-width: 1200px) {
        font-size: 0.5em;
      }
    }
    .scroll {
      position: sticky;
      right: 0;
      top: 4vh;
      background: transparent;
      color: rgb(71, 66, 66);
      width: 40px;
      height: 40px;
      font-size: 2em;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;

      animation: scroll 2s linear infinite alternate forwards;
    }

    @keyframes scroll {
      to {
        right: 20px;
      }
    }
  }
}
</style>