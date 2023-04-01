<template>
  <div class="slider-main">
    <el-carousel :interval="4000" arrow="always" direction="horizontal">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <div class="blur-wrapper"></div>

        <img class="carousel-image" :src="image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
const props = defineProps({
  images: Array,
});
</script>


<style lang="scss" scoped>
.slider-main {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  margin: 0 auto;
}

h1 {
  display: block;

  position: absolute;
  top: 40%;
  left: 20%;
  color: white;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 16px;
  z-index: 1;
}

.el-carousel.el-carousel--horizontal,
.el-carousel {
  height: 100%;

  .el-carousel__item.is-active,
  .el-carousel__item {
    width: 100% !important;
    height: 94vh;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    @media screen and (max-width: 500px) {
      height: 100vh;

      @media screen and (max-width: 450px) {
        height: 120vh;
      }
    }
  }
}
</style>