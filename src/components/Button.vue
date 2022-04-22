<template>
  <button>
    {{ btn }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btn: String,
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 200px;
  height: 50px;
  cursor: pointer;

  background: linear-gradient(
    to bottom,
    rgb(2, 158, 62) 10%,
    rgb(2, 126, 109) 100%
  );
  border: none;
  border-radius: 30px;
  color: white;
  margin: 2%;
  padding: 10px 20px;
  position: relative;
  top: 0;
  text-transform: capitalize;
  transition: all 0.4s ease;

  &:hover {
    background: rgb(28, 34, 33);
  }

  &:active {
    transform: scale(0.8);
  }
}
</style>