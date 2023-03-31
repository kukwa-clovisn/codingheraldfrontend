<template>
  <main>
    <header class="header" data-aos="slide-right">
      <h1 data-aos="slide-up">being in a world of creativity</h1>
      <h3 data-aos="slide-up">Go through our various applications</h3>
    </header>
    <div class="courses-div">
      <div id="container">
        <div class="card-container" data-aos="flip-left">
          <div class="card-header">
            <div class="img">
              <img data-aos="slide-up" src="../assets/list.svg" alt="" />
            </div>
            <div class="card-media">
              <a href="https://www.facebook.com/237atech/" class="route">
                <i class="fa-brands fa-facebook"></i></a
              ><a href="https://wa.link/geye6o" class="route"
                ><i class="fa-brands fa-whatsapp"></i></a
              ><a href="https://twitter.com/KukwaNgong" class="route"
                ><i class="fa-brands fa-twitter"></i></a
              ><a href="https://www.linkedin.com/in/codingherald/" class="route"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title" data-aos="slide-up">Dairy</h2>
            <p class="card-description" data-aos="slide-up">
              Failing to plan is planning to fail. Plan out your day with the
              well structured dairy we provide easy to use
            </p>
            <div class="card-buttons" data-aos="slide-up">
              <router-link
                to="/overview/imageCompressor/compress"
                class="btn"
                data-aos="slide-up"
                >learn more</router-link
              >
              <router-link
                to="/overview/imageCompressor/compress"
                class="btn"
                data-aos="slide-up"
                >Get Started</router-link
              >
            </div>
          </div>
        </div>
        <div class="card-container" data-aos="flip-left">
          <div class="card-header">
            <div class="img">
              <img data-aos="slide-up" src="../assets/auth.png" alt="" />
            </div>
            <div class="card-media">
              <a href="https://www.facebook.com/237atech/" class="route">
                <i class="fa-brands fa-facebook"></i
              ></a>
              <a href="https://wa.link/geye6o" class="route"
                ><i class="fa-brands fa-whatsapp"></i></a
              ><a href="https://twitter.com/KukwaNgong" class="route"
                ><i class="fa-brands fa-twitter"></i></a
              ><a href="https://www.linkedin.com/in/codingherald/" class="route"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title" data-aos="slide-up">Image compressor</h2>
            <p class="card-description" data-aos="slide-up">
              Compress you images to a smaller size but still maintain your
              image quality. Try out our image compressor
            </p>
            <div class="card-buttons">
              <router-link to="/overview/Todo" class="btn" data-aos="slide-up"
                >learn more</router-link
              >
              <router-link to="/overview/Todo" class="btn" data-aos="slide-up"
                >Get Started</router-link
              >
            </div>
          </div>
        </div>
        <div class="card-container" data-aos="flip-left">
          <div class="card-header">
            <div class="img">
              <img data-aos="slide-up" src="../assets/currency.png" alt="" />
            </div>
            <div class="card-media">
              <a href="https://www.facebook.com/237atech/" class="route">
                <i class="fa-brands fa-facebook"></i></a
              ><a href="https://wa.link/geye6o" class="route"
                ><i class="fa-brands fa-whatsapp"></i></a
              ><a href="https://twitter.com/KukwaNgong" class="route"
                ><i class="fa-brands fa-twitter"></i></a
              ><a href="https://www.linkedin.com/in/codingherald/" class="route"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title" data-aos="slide-up">CH swap</h2>
            <p class="card-description" data-aos="slide-up">
              Get to know the exact value of your currency with respect to other
              currencies anytime with out CH swap currency converter.
            </p>
            <div class="card-buttons">
              <router-link to="/overview/Todo" class="btn" data-aos="slide-up"
                >learn more</router-link
              >
              <router-link to="/overview/Todo" class="btn" data-aos="slide-up"
                >Get Started</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import "../utils/style.css";
export default {
  name: "Projects",
};
</script>

<style lang="scss" scoped>
header {
  padding-top: 30px;
  width: 100vw;
  height: auto;

  h1 {
    font-size: 35px;
    text-transform: capitalize;
    font-weight: 700;
    text-align: center;
    padding: 10px;
    font-family: "Poppins", sans-serif;

    @media screen and (max-width: 600px) {
      font-size: 21px;
    }
  }
  h3 {
    text-align: center;
    font-size: 19px;
    color: teal;
    padding: 5px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;

    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
}

.courses-div {
  width: 100vw;
  height: fit-content;
  padding: 0;
  padding-top: 30px;
  padding-bottom: 20px;
  position: relative;
  background: rgb(212, 216, 228);

  h1 {
    padding: 10px;
    text-transform: capitalize;
    font: 800 35px "Poppins", sans-serif;
    position: relative;
    color: #113b74;

    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
  }
  p {
    width: 95vw;
    padding: 10px;
    padding-bottom: 40px;
    position: relative;
    margin: auto;
    color: #113b74;
  }
}
</style>