<template>
  <main>
    <div class="landing-page">
      <header>
        <nav class="title"><h1>Web3Academy</h1></nav>
        <nav class="link">
          <a href="#" class="route">sign up</a
          ><a href="#" class="route">login</a>
        </nav>
      </header>
      <div class="content">
        <div class="left-content">
          <canvas class="c1"> </canvas>
          <canvas class="c2"></canvas>
          <div class="c3">Hi</div>
          <h4>welcome! it is now easy</h4>
          <h2>signup and learn coding,</h2>
          <h2 class="g">graphic Design and more...</h2>

          <button>get started</button>
        </div>
        <div class="right-content">
          <div class="box"><h1>codingHerald</h1></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "online",

  setup() {
    const data = reactive({
      online: "welcome to our online classes with",
    });

    const title = ref("codingHerald");
    return {
      data,
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
/**
     setting up headings and color unique to the page to reduce data redundancy */
:root {
  --main-col: rgb(25, 25, 59);
  --main-font: 19px;
}
*,
body {
  transition: all 0.3s ease;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
a,
p {
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  color: var(--main-col);
  padding: 10px;
  text-transform: capitalize;
  position: relative;
}
button {
  cursor: pointer;
  width: 250px;
  height: 55px;
  border-radius: 30px;
  border: none;
  margin: 10px auto;
  background: rgb(25, 25, 59);
  color: white;
  text-transform: capitalize;
  position: relative;
  display: block;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-size: var(--main-font);
    color: white;
  }

  &:hover {
    transform: scale(0.95);
  }
  &:active {
    transform: scale(0.1);
  }
}

main {
  width: 100vw;
  height: fit-content;
  .landing-page {
    width: 100vw;
    height: 100vh;
    padding: 10px 20px;

    header {
      width: 90%;
      height: 20vh;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        width: fit-content;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        h1 {
          font-size: 50px;
          font-weight: 800;
          background: linear-gradient(
            to right,
            rgb(255, 145, 71),
            rgb(19, 19, 61)
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .link {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
          text-transform: capitalize;
          font-weight: 700;
          &:hover {
            color: purple;
          }
        }
      }
    }

    .content {
      width: 80%;
      height: 78vh;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;

      .left-content {
        width: fit-content;
        height: 90%;
        margin: auto;
        padding: 20px;
        h4 {
          border-radius: 5px;
          width: fit-content;
          padding: 10px 30px;
          cursor: pointer;
          font-weight: 700;
          font-size: 40px;
          position: relative;
          z-index: 1;

          &:hover {
            font-weight: 650;
          }
        }
        h2 {
          width: fit-content;
          padding: 10px 35px;
          border-radius: 5px;
          margin: 20px auto;
          font-size: 20px;
          font-weight: 600;
          transition: all 0.5s ease;

          &:hover {
            background: linear-gradient(to bottom, purple, rgb(19, 19, 61));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
            cursor: pointer;
            border: none;
          }
        }
        h2.g {
          left: 50px;
        }
        button {
          margin: 35px 0;
          left: 200px;
          top: 20px;
          height: 70px;
          width: 330px;
          background: linear-gradient(to bottom, purple, rgb(19, 19, 61));
          font-weight: 800;
        }
        .c1,
        .c2,
        .c3 {
          width: 400px;
          height: 400px;
          border-radius: 100%;
          background: linear-gradient(
            180deg,
            rgb(255, 145, 71),
            rgb(19, 19, 61)
          );
          position: absolute;
          top: 30%;
          left: 2%;
          filter: blur(2px);
          opacity: 0.2;
          animation: hide 5s infinite linear alternate forwards;
          transform: rotateY(40deg);
        }

        .c2 {
          left: 41%;
          top: 52%;
          width: 100px;
          height: 100px;
          transform: rotateY(10deg);
        }
        .c3 {
          opacity: 1;
          filter: blur(0);
          top: 54%;
          left: 13%;
          width: 100px;
          height: 100px;
          background: linear-gradient(to bottom, purple, rgb(19, 19, 61));
          animation-delay: 2s;
          transform: rotateX(45deg);
          border-radius: 100% 100% 100% 0;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: 800;
          font-size: 35px;
        }
      }

      @keyframes hide {
        to {
          opacity: 0;
        }
      }
      .right-content {
        width: 35%;
        height: 70%;
        position: relative;
        left: -1%;
        display: flex;
        justify-content: center;
        align-items: center;

        &::before {
          content: "";
          background: linear-gradient(
            300deg,
            rgb(255, 145, 71),
            white,
            rgb(24, 46, 81)
          );
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          transform: skew(40deg, 10deg);
        }
        &::after {
          content: "HB~Design";
          display: flex;
          justify-content: center;
          align-items: center;
          text-transform: capitalize;
          width: 50%;
          font-size: 1.4em;
          height: 50%;
          position: absolute;
          bottom: 30%;
          right: 23%;
          transform: skew(45deg, 15deg);
          background: rgb(212, 216, 228);
        }

        .box {
          width: 400px;
          height: 400px;
          background: goldenrod;
          z-index: 1;
          transform: rotateX(80deg) rotateZ(70deg);
          position: absolute;
          top: -85%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
          background: linear-gradient(
            318deg,
            rgb(255, 145, 71),
            white,
            rgb(24, 46, 81)
          );

          h1 {
            font-weight: 700;
            padding: 20px;
            background: rgb(212, 216, 228);
            color: rgb(76, 2, 76);
            transform: rotateZ(-55deg);
          }
        }
      }
    }
  }
}
</style>
