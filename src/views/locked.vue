<template>
  <div>
    <i class="fa-solid fa-triangle-exclamation"></i>
    app not available
  </div>
</template>

<script>
export default {
  name: "Locked",
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font: 600 20px "Poppins", sans-serif;
  color: teal;
  background: white;
  text-transform: capitalize;

  i {
    color: crimson;
    font-size: 35px;
  }
}
</style>