<template>
  <div id="spinner">
    <div class="blur"></div>
    <i class="fa-solid fa-spinner spinner"></i>
    <p>
      {{ msg }} <span>{{ rate }}%</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "Spinner",
  props: {
    rate: 0,
    msg: "",
  },
};
</script>
<style lang="scss" scoped>
#spinner {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .blur {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .spinner {
    font-size: 70px;
    animation: spin 1s infinite linear forwards;
    position: relative;
    display: block;
    color: mediumseagreen;
    cursor: pointer;
  }

  p {
    width: fit-content;
    height: fit-content;
    border-radius: 5px;
    background: mediumseagreen;
    padding: 20px;
    color: rgb(243, 243, 243);
    position: relative;
    font: 30px 500 "Poppins", sans-serif;
    animation: loading 1s infinite alternate forwards;
    opacity: 0.1;
    margin-top: 10px;
  }
}

@keyframes spin {
  // from {
  //   color: rgba(65, 140, 228, 1);
  // }
  // 25% {
  //   color: rgba(230, 101, 129, 1);
  // }
  // 50% {
  //   color: #072e54;
  // }
  // 75% {
  //   color: teal;
  // }
  to {
    transform: rotate(360deg);
  }
}

@keyframes loading {
  to {
    opacity: 1;
  }
}
</style>