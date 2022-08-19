<template>
  <footer class="d-flex flex-row justify-content-between align-items-start p-5">
    <div>
      <h3>ABOUT</h3>
      <li class="text-left text-capitalize text-white">
        <a href="https://codingherald.herokuapp.com/contact">Contact</a>
      </li>
      <li class="text-left text-capitalize text-white">
        <a href="https://advancedtechacademy.herokuapp.com/blog">Blog</a>
      </li>
      <li class="text-left text-capitalize text-white">
        <a href="https://advancedtechacademy.heorkuapp.com/blog">Community</a>
      </li>
    </div>
    <div>
      <h3>HELP</h3>
      <li class="text-left text-capitalize text-white">
        <a href="">Client support</a>
      </li>
      <li class="text-left text-capitalize text-white">Guides</li>
      <li class="text-left text-capitalize text-white">
        <a href="https://github.com/kukwa-clovisn">Github</a>
      </li>
    </div>

    <div class="text-white">
      <i class="fa fa-user-circle"></i>
      <span class="mx-2">Codingherald</span>
    </div>
    <div class="text-white">
      <h2>online handles</h2>
      <div class="d-flex justify-content-evenly align-items-center">
        <a
          href="https://www.youtube.com/channel/UCKu1y3terjWMgZxyz73RucQ"
          class="route"
        >
          <i class="fab fa-youtube"></i
        ></a>

        <a href="https://www.facebook.com/237atech/" class="route">
          <i class="fa-brands fa-facebook"></i
        ></a>
        <a href="https://wa.link/geye6o" class="route"
          ><i class="fa-brands fa-whatsapp"></i
        ></a>
        <a href="https://twitter.com/KukwaNgong" class="route"
          ><i class="fa-brands fa-twitter"></i
        ></a>
        <a href="https://www.linkedin.com/in/codingherald/" class="route"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  background: rgb(39, 38, 44);
  width: 100%;
  min-height: 30vh;
  flex-wrap: wrap;
  position: relative;
  h3 {
    font-size: 20px;
    color: rgb(118, 74, 219);
    text-align: left;
  }
  li {
    list-style-type: none;
    text-align: left;
    margin: 10px 0;
    cursor: pointer;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  div {
    min-width: 230px;
    margin-top: 1%;
    padding: 10px;

    .icon {
      font-size: 32px;
      cursor: pointer;
      margin-right: 15px;
    }
    h2 {
      color: goldenrod;
      font-size: 19px;
      text-align: center;
      padding: 5px;
      transition: all 0.3s ease;
    }

    a {
      text-decoration: none;
      color: rgb(234, 231, 231);
      cursor: pointer;

      i {
        font-size: 21px;
      }
    }
  }
}
</style>