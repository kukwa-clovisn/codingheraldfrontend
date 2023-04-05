<template>
  <div class="landing-pages-container">
    <Header />
    <div class="landing-pages-content">
      <div class="template-head"><TemplateHeader /></div>
      <div class="page-intro">
        <h2>landing page templates</h2>
        <p>
          This is a list of already built(coded) landing pages templaetes at a
          very minimal cost. The landing pages span from just custom landing
          pgaes to marketing, portfolio landing pages and many many more. If you
          don't find your choice landing page, you can contact us to bring out
          that which you want.
        </p>
        <p>
          You're in the best place to get a quality website for your blog or
          website or company or academy or anything for which you will be
          needing a website for. The templaets we provide are of quality and
          value and will be worth your desire and expectations. Check out the
          templates below and you will be glad you did.
        </p>
      </div>
      <div class="templates-preview">
        <div class="templates-preview-wrapper">
          <div
            class="template"
            v-for="template in templatesArr"
            :key="template"
            data-aos="slide-up"
            @click="$router.push('/templates/template/preview')"
          >
            <div class="template-image">
              <img src="../../../assets/bg.png" alt="" />
            </div>
            <div class="template-info">
              <h2>template name {{ template }}</h2>
              <p>template description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import TemplateHeader from "@/components/templateHeader.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";

const templatesArr = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
</script>

<style lang="scss" scoped>
.landing-pages-container {
  width: 100vw;
  height: fit-content;
  background: white;
  .landing-pages-content {
    padding-top: 13vh;
    width: 100%;
    margin: 0 auto;
    height: fit-content;
  }
  .template-head {
    width: 100%;
    height: fit-content;
    border-radius: 2px;
    background: white;
    box-shadow: 3px 0 17px 7px rgb(230, 230, 230);
  }

  .page-intro {
    width: 75%;
    margin: 20px auto;
    height: fit-content;
    padding: 10px;

    h2 {
      text-align: left;
      text-transform: capitalize;
      font: 600 20px "Nunito Sans", sans-serif;
    }
    p {
      font: 400 16px/23px "Montserrat", sans-serif;
    }
  }
  .templates-preview {
    width: 73%;
    margin: 20px auto;
    height: fit-content;

    .templates-preview-wrapper {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 40px 20px;

      .template {
        width: 288px;
        height: 300px;
        overflow: hidden;
        cursor: pointer;
        background: white;
        box-shadow: 0 0 16px 6px rgb(224, 224, 224);
        border-radius: 3px;

        .template-image {
          width: 100%;
          height: 162px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .template-info {
          width: 100%;
          height: 100px;
          padding: 10px;
          h2 {
            font: 600 18px "Montserrat", "Nunito Sans", sans-serif;
            text-transform: capitalize;
          }
          p {
            font: 400 15px "Montserrat", "Nunito Sans", sans-serif;
          }
        }
      }
    }
  }
}
</style>