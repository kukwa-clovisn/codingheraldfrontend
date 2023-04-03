<template>
  <main>
    <header>
      <Header />
    </header>
    <div class="landing-page">
      <!-- <div class="blur-wrapper"></div> -->
      <!-- <Logo /> -->

      <div class="bn d-flex justify-content-evenly align-items-center">
        <button class="start" title="sign up to use our apps and products">
          <a href="#about" class="route">get started</a>
        </button>
        <button class="demo" title="Get to know more about ACTA...">
          <router-link to="/contact" id="demo">contact</router-link>
        </button>
      </div>
    </div>
    <div class="about" id="about">
      <div class="about-wrapper">
        <h1 data-aos="slide-up">About us</h1>
        <p data-aos="slide-up">
          This an IT and mulit service organization, with an online and offline
          academy. We offer services ranging from different IT fields to many
          other custom trainings and services.
          <br />
          We as well have free apps which you can find below to help you ease
          your work.
        </p>

        <div class="flex-container">
          <div class="flex-item" data-aos="slide-up">
            <div class="flex-icon">
              <i class="fa-solid fa-code"></i>
            </div>
            <h2>Web development</h2>
          </div>
          <div class="flex-item" data-aos="slide-up">
            <div class="flex-icon">
              <i class="fa-solid fa-pen"></i>
            </div>
            <h2>Graphic Design</h2>
          </div>
          <div class="flex-item" data-aos="slide-up">
            <div class="flex-icon">
              <i class="fa-solid fa-book"></i>
            </div>
            <h2>Forex Trading</h2>
          </div>
          <div class="flex-item" data-aos="slide-up">
            <div class="flex-icon">
              <i class="fa-solid fa-coins"></i>
            </div>
            <h2>Buy & Sell Of Crypto</h2>
          </div>
          <div class="flex-item" data-aos="slide-up">
            <div class="flex-icon">
              <i class="fa-solid fa-house"></i>
            </div>
            <h2>Real Estate</h2>
          </div>
          <div class="flex-item" data-aos="slide-up">
            <div class="flex-icon">
              <i class="fa-solid fa-code"></i>
            </div>
            <h2>Custom Trainings</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="display" data-aos="slide-left">
      <div class="blur-wrapper"></div>
      <div class="buttons">
        <router-link to="/templates">Browse Templates</router-link>
        <router-link to="/templates">Browse apps</router-link>
      </div>
    </div>
    <Projects id="apps" />

    <Footer />
  </main>
</template>

<script>
import Logo from "./Logo.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Projects from "./Projects.vue";
export default {
  name: "Home",
  components: {
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
  watch() {
    this.myFunction();
  },
  methods: {
    myFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        alert("we are moving");
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
header {
  width: 100%;
  height: 13vh;
  z-index: 1;
  box-shadow: 0 2px 5px rgb(183, 183, 183);
}

.landing-page {
  width: 100%;
  height: 100vh;
  background: url(../assets/atech-blue-1.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  position: relative;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}

.bn {
  width: fit-content;
  margin: 20px auto;
  flex-wrap: wrap;
  position: absolute;
  bottom: 8%;
  left: auto;

  button {
    width: 250px;
    height: 50px;
    border-radius: 30px;
    border: none;

    cursor: pointer;

    position: relative;
    background: linear-gradient(
      to top,
      rgb(226, 178, 3) 0%,
      rgb(172, 110, 2) 100%
    );
    margin: 10px;
    animation: bounce 3s linear infinite alternate forwards;

    &:last-child {
      background: teal;
      animation: demo 3s linear infinite alternate forwards;
    }

    .route {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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

    @media screen and (max-width: 400px) {
      width: 90%;
    }
  }

  @media screen and (max-width: 450px) {
    left: 5%;
  }
}

@keyframes bounce {
  to {
    transform: translateY(-30px);
  }
}

@keyframes demo {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0);
  }
}

.about {
  width: 100vw;
  height: fit-content;
  background: white;
  .about-wrapper {
    width: 100%;
    height: fit-content;
    padding: 20px auto;
    padding-top: 30px;

    h1 {
      text-transform: uppercase;
      font: 700 40px "Montserrat", "Nunito Sans", sans-serif;
      padding: 20px 0;
      padding-bottom: 10px;
      text-align: center;
    }
    p {
      width: 80%;
      margin: 20px auto;

      padding: 10px 0;
      text-align: center;
      span {
        color: rgb(146, 124, 3);
        font-weight: bold;
      }
    }
  }
}
.display {
  width: 100vw;
  height: 90vh;
  background: url(../assets/woman-with-phone-design.jpeg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .blur-wrapper {
    display: none;
    opacity: 0.4;
  }

  .buttons {
    width: 90%;
    height: fit-content;
    display: none;

    a {
      display: flex;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 250px;
      height: 50px;
      padding: 0 25px;
      border: none;
      background: white;
      color: rgb(197, 168, 2);
      text-decoration: none;
      text-transform: capitalize;
      font: 700 17px "Montserrat", "Poppins", sans-serif;
      margin: 20px auto;
      border-radius: 30px;
      position: relative;

      &:last-child {
        background: rgb(207, 176, 2);
        color: white;
      }

      @media screen and (max-width: 400px) {
        width: 90%;
      }
    }
  }

  &:hover {
    .blur-wrapper,
    .buttons {
      display: block;
    }
  }
}
</style>
