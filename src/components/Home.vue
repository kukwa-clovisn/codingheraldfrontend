<template>
  <Header />
  <Logo />
  <div class="home d-flex justify-content-between align-items-center">
    <Block />
    <img
      src="../assets/desk.svg"
      alt=""
      id="desk"
      class="d-none d-lg-block d-md-block d-sm-none"
    />
    <div
      class="
        code
        d-none d-lg-flex d-md-flex d-sm-none
        align-items-center
        justify-content-evenly
        flex-column
      "
    >
      <li>code all-night</li>
      <li>work hard</li>
      <li>Jesus first</li>
    </div>
  </div>
  <div class="bn d-flex justify-content-evenly align-items-center">
    <button class="start" title="sign up to use our apps and products">
      <router-link to="/login" class="route">get started</router-link>
    </button>
    <button class="demo" title="Get to know more about ACTA...">
      <router-link to="/Demo" id="demo">ACTA</router-link>
    </button>
  </div>
  <br />
  <Projects />
  <br />
  <br />
  <Footer />
</template>

<script>
import Logo from "./Logo.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Block from "./Block.vue";
import Projects from "./Projects.vue";
export default {
  name: "Home",
  components: {
    Block,
    Logo,
    Footer,
    Header,
    Projects,
  },
  data() {
    return {
      desk: "",
      next: true,
      back: false,
      remove: true,
    };
  },
  updated() {
    this.myFunction();
  },
  methods: {
    myFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        // alert("we are moving");
      }
    },
    change() {
      this.next = false;
      this.back = true;
    },
    return_back() {
      this.next = true;
      this.back = false;
    },
    close() {
      this.remove = false;
    },
    view() {
      this.remove = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 35vh;
  width: 100%;
  background: inherit;
  position: relative;

  .code {
    position: absolute;
    background: transparent;
    right: 24%;
    top: 0;
    color: white;
    height: 23px;
    overflow: hidden;
    @media screen and (max-width: 1000px) {
      right: 28%;
    }

    @media screen and (max-width: 768px) {
      right: 30%;
    }

    li {
      list-style-type: none;
      height: 23px;
      font-size: 0.7em;
      text-align: left;
      position: relative;
      padding: 5px;
      text-transform: capitalize;
      top: 23px;
      animation: code 18s steps(3) infinite;
      &::after {
        content: "";
        width: 100%;
        height: 23px;
        position: relative;
        left: 0;
        top: -23px;
        display: flex;
        animation: show 3s infinite alternate forwards;
        background: rgb(51, 50, 61);
      }
    }
  }

  @keyframes code {
    to {
      top: -44px;
    }
  }

  @keyframes show {
    from {
      left: 0;
      width: 100%;
    }
    to {
      left: 100%;
      width: 0;
    }
  }
  #desk {
    width: 300px;
    position: absolute;
    right: 10%;
    cursor: pointer;
  }
}
.bn {
  width: 300px;
  position: relative;
  left: 28%;

  button {
    min-width: 150px;
    height: 50px;
    border-radius: 30px;
    border: none;
    background: teal;
    cursor: pointer;
    position: relative;
    top: 0;
    animation: bounce 3s infinite alternate forwards;

    &:last-child {
      background: linear-gradient(
        to top,
        rgb(110, 42, 8) 0%,
        rgb(145, 43, 3) 100%
      );
      animation: demo 3s infinite alternate forwards;
    }

    .route {
      text-decoration: none;
      color: white;
      text-transform: capitalize;
    }
    #demo {
      width: 100%;
      height: 100%;
      text-decoration: none;
      text-transform: capitalize;
      color: white;
    }
  }
}

@keyframes bounce {
  to {
    top: -30px;
  }
}

@keyframes demo {
  from {
    top: -30px;
  }
  to {
    top: 0;
  }
}

.profile {
  width: 100%;
  height: 70vh;
  background: transparent;
  padding: 20px;
  position: relative;

  .page {
    width: 60%;
    height: 60vh;
    background: white;
    margin: 0 auto;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    position: relative;

    .close {
      font-size: 2em;
      position: absolute;
      right: 13px;
      top: 1px;
      cursor: pointer;
    }

    .heading {
      width: 100%;
      height: 50%;

      img {
        height: 90%;
        display: block;
        margin: auto;
        cursor: pointer;
      }
      h4 {
        cursor: pointer;
      }
    }

    .advert {
      width: 100%;
      height: 10vh;
      padding: 10px;
      background: rgb(233, 236, 239);
      cursor: pointer;
      transition: all 0.4s ease;

      &:active {
        transform: scale(0.8);
      }
      p {
        color: rgb(54, 51, 51);
        font-size: 0.7em;
        text-align: center;
        line-height: 23px;

        .route {
          text-decoration: none;
          color: rgb(255, 145, 0);
          font-weight: 600;
        }
      }
    }

    button {
      min-width: 150px;
      text-transform: capitalize;
    }
  }
}

.profile-one {
  width: 90%;
  margin: auto;
  height: 95vh;
  // background: linear-gradient(
  //   to right,
  //   rgb(36, 36, 36) 0%,
  //   rgb(1, 35, 73) 100%
  // );
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  .photo {
    width: 50%;
    height: 100%;

    img {
      width: 100%;
      display: block;
      margin: auto;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .side-content {
    width: 50%;
    height: 95vh;
    margin-left: 1vw;
    border-radius: 5px;
    background: white;

    @media screen and (max-width: 768px) {
      width: 80%;
    }

    img {
      width: 230px;
      height: 230px;
      border-radius: 50%;
      display: block;
      margin: 4vh auto;
      cursor: pointer;
    }

    h2 {
      font-weight: 700;
      padding: 5px;
      cursor: pointer;
    }

    p {
      text-align: center;
    }

    button {
      width: max-content;
      display: block;
      margin: 1vh auto;
    }
  }
}
</style>
