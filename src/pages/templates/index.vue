<template>
  <div class="templates-container">
    <Header />
    <div class="landing-page">
      <div class="slider-container">
        <slider :images="images" />
      </div>
      <div class="landing-page-wrapper">
        <h2>get the best out of the best</h2>
        <h1>coding <span>herald</span> <br /><span>templates</span></h1>
        <a href="#templates">get started</a>
      </div>
    </div>
    <div id="templates">
      <h1>browse our amazing templates and try them out for free</h1>
      <div class="template-header">
        <div class="template-header-wrapper">
          <router-link
            to="/templates"
            class="template-button"
            data-aos="slide-up"
            >All templates</router-link
          >
          <router-link
            to="/templates/header-templates"
            class="template-button"
            data-aos="slide-up"
            >Header</router-link
          >
          <router-link
            to="/templates/footer-templates"
            class="template-button"
            data-aos="slide-up"
            >footer</router-link
          >
          <router-link
            to="/templates/e-commerce-templates"
            class="template-button"
            data-aos="slide-up"
            >E-commerce</router-link
          >
          <router-link
            to="/templates/Landing-pages-templates"
            class="template-button"
            data-aos="slide-up"
            >landing pages</router-link
          >
          <router-link
            to="/templates/menu-templates"
            class="template-button"
            data-aos="slide-up"
            >menu templates</router-link
          >
          <router-link
            to="/templates/form-templates"
            class="template-button"
            data-aos="slide-up"
            >forms</router-link
          >
          <router-link
            to="/templates/dashboard-templates"
            class="template-button"
            data-aos="slide-up"
            >dashboards</router-link
          >
          <router-link
            to="/templates/button-templates"
            class="template-button"
            data-aos="slide-up"
            >buttons</router-link
          >
          <router-link
            to="/templates/button-templates"
            class="template-button"
            data-aos="slide-up"
            >animations</router-link
          >
          <router-link
            to="/templates/alert-templates"
            class="template-button"
            data-aos="slide-up"
            >alerts(modals)</router-link
          >
        </div>
      </div>

      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import slider from "@/components/slider.vue";
import { ref } from "vue";
import templateImageOne from "@/assets/woman-with-phone.jpeg";
import templateImageTwo from "@/assets/quality-app.jpeg";
import templateImageThree from "@/assets/team.jpg";
import templateImageFour from "@/assets/hchat.jpg";

const images = ref([
  templateImageOne,
  templateImageTwo,
  templateImageThree,
  templateImageFour,
]);
</script>

<style lang="scss" scoped>
.templates-container {
  width: 100vw;
  height: fit-content;

  .landing-page {
    width: 100%;
    height: 87vh;
    padding-top: 14vh;
    position: relative;

    .slider-container {
      width: 100%;
      height: 74vh;

      position: absolute;
      top: 13%;
      left: 0;
    }

    .landing-page-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      padding-top: 13vh;

      h1 {
        text-transform: uppercase;
        color: white;
        padding: 10px;
        text-align: center;
        font: 800 50px "Montserrat", "Nunito Sans", sans-serif;
        line-height: 80px;
        letter-spacing: 1px;

        span {
          color: gold;
        }
      }

      h2 {
        color: white;
        position: relative;
        position: relative;
        text-align: center;
        text-transform: capitalize;
        color: white;
        font: 600 20px "Montserrat", "Nunito Sans", sans-serif;
      }

      a {
        margin: 20px auto;
        text-decoration: none;
        width: 200px;
        height: 50px;
        border-radius: 30px;
        background: rgb(250, 226, 13);
        color: rgb(12, 82, 106);
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        font-weight: bold;

        @media screen and (max-width: 400px) {
          width: 80%;
        }
      }
    }
  }
  #templates {
    width: 100vw;
    height: fit-content;

    h1 {
      font: 700 30px "Montserrat", sans-serif;

      text-align: center;
      text-transform: capitalize;
      padding: 20px 5px;
    }
    .template-header {
      width: 100%;
      height: fit-content;

      .template-header-wrapper {
        width: 90%;
        margin: 20px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 30px 20px;

        .template-button {
          text-decoration: none;
          border: none;
          width: max-content;
          height: max-content;
          padding: 10px 25px;
          border-radius: 30px;
          background: #ffffff;
          color: rgb(39, 38, 38);
          text-transform: capitalize;
          transition: all 0.4s ease;

          &:hover {
            background: rgb(19, 77, 102);
            color: white;
          }
        }

        .router-link-exact-active {
          background: rgb(255, 162, 0);
          color: white;
        }
      }
    }
  }
}
</style>