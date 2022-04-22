<template>
  <div class="jombotron text-center d-md-none d-sm-block d-lg-block">
    <li>welcome to your world of creativity</li>
    <li>KCN empire</li>
    <li>in Christ alone</li>
  </div>
</template>

<script>
export default {
  name: "Block",
};
</script>

<style lang="scss" scoped>
div {
  width: max-content;
  height: 60px;
  position: absolute;
  top: 28%;
  left: 5%;
  font-weight: 600;
  font-size: 30px;
  overflow: hidden;

  li {
    list-style-type: none;
    text-align: left;
    text-transform: capitalize;
    height: 93px;
    position: relative;
    top: 0px;
    cursor: pointer;
    padding-left: 10px;
    animation: override 30s infinite steps(3);
    transition: all 0.3s ease;
    color: rgb(7, 145, 87);
  }

  @keyframes override {
    to {
      top: -270px;
    }
  }

  @media screen and (max-width: 500px) {
    li {
      font-size: 20px;
    }
  }
}
</style>