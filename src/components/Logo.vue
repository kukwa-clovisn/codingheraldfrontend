<template>
  <div
    class="wrapper d-flex justify-content-center flex-column align-items-center"
  >
    <div class="media d-flex justify-content-evenly align-items-center">
      <div
        class="
          logo
          d-flex
          justify-content-center
          flex-column
          align-items-center
        "
      >
        <li>k</li>
        <li>c</li>
        <li>n</li>
      </div>
      <div class="text-uppercase" title="KCN EMPIRE">media</div>
    </div>

    <div class="list">
      <li>kukwa clovis ngong</li>
      <li>fullstack web developer</li>
      <li>keyboardist</li>
      <li>herald</li>
      <li>christocentric</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss">
.wrapper {
  background: inherit;
  width: 100%;
  height: 32vh;
  position: relative;

  .media {
    width: 220px;
    height: 90px;
    position: absolute;
    top: 10%;
    left: 39%;
    font-size: 32px;
    font-weight: 700;
    color: rgb(2, 126, 109);

    div {
      cursor: pointer;
    }
  }

  .logo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      width: 70px;
      height: 70px;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      border: 3px solid tomato;
      animation: turn 5s infinite;
    }
    &:after {
      content: "";
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 3px solid green;
      position: absolute;
      right: 0;
      bottom: 0;
      animation: turnL 5s infinite linear;
    }

    li {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      list-style-type: none;
      text-transform: uppercase;
      position: relative;
      top: 50px;
      left: 30%;
      display: block;
      font-size: 35px;
      animation: pop 20s steps(3) infinite;
    }
    @keyframes pop {
      to {
        top: -100px;
      }
    }
  }
  @keyframes turn {
    to {
      transform: rotateY(360deg);
    }
  }

  @keyframes turnL {
    to {
      transform: rotateY(-360deg);
    }
  }

  .list {
    width: 650px;
    height: 72px;
    padding: 0;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    margin: auto;
    left: 21%;

    @media screen and (max-width: 768px) {
      left: 2%;
    }

    @media screen and (max-width: 500px) {
      left: -20%;
    }
    li {
      cursor: pointer;
      list-style-type: none;
      width: 100%;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: capitalize;
      position: relative;
      top: 0;
      font-size: 25px;
      font-weight: 800;
      color: rgb(176, 77, 38);
      animation: move 50s steps(5) infinite;

      &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgb(212, 216, 228);
        animation: hide 5s infinite alternate forwards;
      }
    }

    @keyframes move {
      to {
        top: -360px;
      }
    }

    @keyframes hide {
      to {
        left: 81%;
      }
    }
  }
}
</style>