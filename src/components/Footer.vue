<template>
  <footer class="d-flex flex-row justify-content-between align-items-start p-5">
    <div>
      <h3>ABOUT</h3>
      <li class="text-left text-capitalize text-white">Contact</li>
      <li class="text-left text-capitalize text-white">Blog</li>
      <li class="text-left text-capitalize text-white">Community</li>
      <li class="text-left text-capitalize text-white">CAKE Token</li>
    </div>
    <div>
      <h3>HELP</h3>
      <li class="text-left text-capitalize text-white">Customer Support</li>
      <li class="text-left text-capitalize text-white">Troubleshooting</li>
      <li class="text-left text-capitalize text-white">Guides</li>
    </div>
    <div>
      <h3>DEVELOPERS</h3>
      <li class="text-left text-capitalize text-white">
        <a href="https://github.com/kukwa-clovisn">Github</a>
      </li>
      <li class="text-left text-capitalize text-white">Documentation</li>
      <li class="text-left text-capitalize text-white">Bug Bounty</li>
      <li class="text-left text-capitalize text-white">Audits</li>
      <li class="text-left text-capitalize text-white">Careers</li>
    </div>
    <div class="text-white">
      <i class="fa fa-user-circle"></i>
      <span class="mx-2">CodingHerald</span>
    </div>
    <div class="text-white">
      <h2>online</h2>
      <div class="d-flex justify-content-evenly align-items-center">
        <i class="fab fa-twitter icon"></i>
        <i class="fab fa-telegram icon"></i>
        <i class="fab fa-whatsapp icon"></i>
        <i class="fab fa-instagram icon"></i>
        <i class="fab fa-youtube icon"></i>
      </div>
    </div>
    <hr />
    <div class="text-white kcn">
      &copy;<i style="color: brown">codingherald</i
      ><span class="text-uppercase" style="color: gold">kcn</span>2021
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
    margin: 3% 0;
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
      font-size: 21px;
      text-align: center;
      padding: 5px;
      transition: all 0.3s ease;
    }
  }
  .kcn {
    position: absolute;
    left: 30%;
    bottom: 2vh;
  }
}
</style>