<template>
  <div class="template-preview-container">
    <Header />

    <div class="template-preview-content">
      <div class="tempalte-header">
        <TemplateHeader />
      </div>
      <div class="preview-container">
        <h2>template Name</h2>
        <p>Template description Lorem, ipsum dolor.</p>
        <div class="preview-image">
          <img src="../../assets/bg.png" alt="" />
        </div>
        <h3>template details</h3>
        <div class="template-details">
          <p><span>Author: </span>codingherald</p>
          <p><span>released:</span>April 2023</p>
          <p><span>copyright:</span>&copy;codingherald2023</p>

          <h4>description:</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            excepturi fugit id debitis facere itaque nesciunt beatae maiores
            autem, dolorem consequuntur iste. Voluptates, impedit quod,
            molestias eos minus modi molestiae beatae optio at quas placeat,
            accusantium quia aliquid quidem dignissimos! Omnis, molestias?
            Omnis, ex illo rerum cumque odio error fuga!
          </p>
          <router-link to="/" class="preview-btn"
            ><i class="fa-regular fa-eye"></i>live preview</router-link
          >
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
</script>

<style lang="scss" scoped>
.template-preview-container {
  width: 100vw;
  height: fit-content;
  .template-preview-content {
    width: 100%;
    height: fit-content;
    padding-top: 13vh;
    .template-header {
      width: 100%;
      height: fit-content;
      border-radius: 2px;
      background: white;
      box-shadow: 3px 0 17px 7px rgb(230, 230, 230);
    }

    .preview-container {
      width: 75%;
      margin: 0 auto;
      padding: 30px 0;

      h2 {
        text-transform: capitalize;
        text-align: left;
        padding: 10px;
      }
      p {
        padding: 10px;
      }
      .preview-image {
        width: 100%;
        height: fit-content;

        img {
          width: 100%;
          height: auto;
        }
      }
      h3 {
        text-transform: capitalize;
        padding: 20px;
      }

      .template-details {
        width: 100%;
        padding: 20px 10px;

        p {
          span {
            padding-right: 10px;
            font-weight: bold;
          }
        }
        h4 {
          text-transform: capitalize;
        }
        .preview-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          text-transform: capitalize;
          width: 250px;
          border-radius: 30px;
          color: white;
          background: rgb(196, 138, 1);
          height: 50px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>