<template>
  <header class="header">
    <h1>being in a world of creativity</h1>
    <h3>Go through our various applications</h3>
  </header>
  <div class="projects">
    <span class="fas fa-sun c1"></span>
    <i class="fas fa-star c2"></i>
    <div class="project chat">
      <div class="content" id="content">
        <div class="left-div">
          <h1>HeraldsChat</h1>
          <span>bluechat</span>
          <button class="explore">
            <router-link to="/Dashboard" class="route">explore</router-link>
          </button>
        </div>
        <div class="right-div">
          <h3>welcome to <span>HeraldsChat</span></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            autem laborum. Quo ab repellendus eligendi, ipsum asperiores beatae
            ad accusamus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            autem laborum. Quo ab repellendus eligendi, ipsum asperiores beatae
            ad accusamus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            autem laborum.
          </p>
          <button class="explore">
            <router-link to="/Dashboard" class="route">explore</router-link>
          </button>
        </div>
      </div>
    </div>
    <div class="project todo">
      <h1>dayGoal</h1>
      <span>Write out your todos' and follow up to achieve them</span>
      <div class="img">
        <div class="img-desc">
          <h4>my-Todo-app</h4>
          <p>
            write down ur Goals...
            <ul>
                <li>daily target</li>
                <li>monthly target</li>
                <li>yearly target</li>
                <li>and more....</li>
            </ul>
          </p>
        </div>

        <img src="../assets/list.svg" alt="" />
      </div>

      <button class="explore">
        <router-link to="/Todo" class="route">explore</router-link>
      </button>
    </div>
    <div class="project currency">
      <h1>cryptoSwap</h1>
      <span>Swap coins and connect to wallet.</span>
      <div class="desc">
          <p>looking for a way to swap crypto currecies with ease? <br> <span>cryptoSwap</span>
          Best crypto site....</p>
          <img src="../assets/currency.png" alt="">
          <p>try our app and get current crypto news of BTC,Eth,and many other crytocurrencies you know</p>
          
      </div>
      <button class="explore">
        <router-link to="/Currency" class="route">explore</router-link>
      </button>
    </div>
    <div class="project exchange">
        <section>
               <h1>currencySwap</h1>
      <span>swap currencies in seconds....</span>
      <p>current exchange rates of currencies.</p>
      <img src="../assets/currency.png" alt="">
      <p>explore to find all the currencies you want</p>
      <p>BTC, USD,NGN, XAF and many more currencies</p>
      <button class="explore">
        <router-link to="/Exchange" class="route">explore</router-link>
      </button>
        </section>
   <span class="hover">currencySwap! <p class="hide">explore</p></span>
    </div>
    <div class="project bmi">
        <section>
            <h1>body mass index(BMI)</h1>
      <span>Health is wealth...</span>
      <p>check out your health state to know how healthy you are </p>
      <img src="../assets/bm.jpg" alt="">
      <p>find your body mass index accurately with aids on how to live a healthy life</p>
      <button class="explore">
        <router-link to="/BMI" class="route">explore</router-link>
      </button>
        </section>
        <span class="hover">body mass index <br> (BMI) <p class="hide">explore</p></span>
      
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
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
    font-size: 40px;
    text-transform: capitalize;
    font-weight: 700;
    text-align: center;
    padding: 10px;
    font-family: "Russo One", sans-serif;
  }
  h3 {
    text-align: center;
    font-size: 23px;
    color: teal;
    padding: 5px;
    font-weight: 530;
    font-family: "Poppins", sans-serif;
  }
}
.projects {
  width: 100vw;
  margin: 0 auto;
  padding: 5px 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 0 85% 0 0;
  background: rgba(45, 45, 56, 0.952);
  background: url(../assets/bulb.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: repeat-y;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 50px;
    height: 50px;
    position: absolute;
    top: 20%;
    right: 5%;
    background: url(../assets/team.jpg);
    border-radius: 50%;
    transition-timing-function: ease-in-out;
    animation: before 6s infinite linear alternate forwards;
  }

  @keyframes before {
    75% {
      border-radius: 0 100% 0 100%;
      background: url(../assets/nature.jpg);
    }
    to {
      top: -10%;
      background: url(../assets/bulb.jpg);
      border-radius: 0 100% 50% 100%;
      transform: rotateZ(45deg);
    }
  }
  &::after {
    // content: "";
    width: 100vw;
    height: 100vh;
    display: block;
    border-radius: 100% 10% 0 0;
    background: url(../assets/nature.jpg);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0.5;
  }

  .c1,
  .c2 {
    font-size: 50px;
    color: mediumseagreen;
    position: absolute;
    top: 25%;
    left: 65%;
    border-radius: 50%;
    transition-timing-function: ease-in-out;
    animation: canvas 9s infinite linear alternate forwards;
  }

  .c2 {
    color: var(--bs-dark);
    position: absolute;
    border-radius: 50%;
    top: 3%;
    left: 5%;
    animation: last 15s infinite linear alternate forwards;
  }
  @keyframes last {
    75% {
      border-radius: 50%;
    }
    to {
      left: 40%;
      border-radius: 0 100% 50% 100%;
      transform: rotateZ(135deg);
    }
  }

  @keyframes canvas {
    75% {
      border-radius: 0 100% 80% 100%;
    }
    to {
      border-radius: 0 100% 50% 100%;
      transform: rotateZ(45deg);
      top: 0;
    }
  }
  .explore {
    width: 80%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background: teal;
    margin: 0 auto;
    display: block;
    padding: 0;

    .route {
      text-decoration: none;
      text-transform: capitalize;
      color: rgba(138, 117, 2, 0.959);
      color: white;
      font-weight: 500;
      width: 100%;
      height: 100%;
      display: block;
      padding-top: 7px;
    }
  }

  .project {
    width: 530px;
    height: 86vh;
    border-radius: 5px;
    // position: relative;
    z-index: 1;
    margin-bottom: 20px;

    @media screen and (max-width: 560px) {
      width: 400px;
      height: 92vh;
    }
  }

  .project.chat {
    width: 90vw;
    margin: 5px auto;
    @media screen and (max-width: 984px) {
      height: 130vh;
    }
    #content {
      width: 100%;
      height: 85vh;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      z-index: 0.3;
      transition: all 0.5s ease;

      .left-div {
        width: 300px;
        height: 300px;
        background: linear-gradient(
          to bottom,
          rgba(23, 174, 224, 0.632) 0%,
          rgba(9, 83, 167, 0.632) 100%
        );
        border-radius: 50%;
        position: relative;
        left: 20vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        transform: rotateZ(11deg);
        transition: all 0.5s ease-in-out;

        h1 {
          color: whitesmoke;
          font-weight: 600;
          font-family: "Roboto", "Poppins", sans-serif;
        }
        span {
          text-transform: capitalize;
        }
        button {
          width: 150px;
        }

        &:hover {
          transform: rotateZ(0deg);
        }
      }
      .right-div {
        width: 20%;
        height: 90%;
        background: linear-gradient(
          to bottom,
          rgb(18, 60, 98) 0%,
          rgba(6, 124, 163, 0.632) 60%,
          rgba(7, 67, 136, 0.632) 100%
        );
        position: relative;
        border-radius: 5px;
        transition: all 0.5s ease;
        right: -600px;

        h3 {
          text-align: center;
          text-transform: capitalize;
          font-weight: 600;
          padding: 10px;
          font-size: 22px;
          color: white;
          line-height: 50px;

          span {
            display: block;
            color: gold;
            font-size: 33px;
          }
        }
        p {
          text-align: center;
          word-break: break-all;
          padding: 5px 15px;
          color: white;
        }
        button {
          width: 250px;
          color: gold;
          margin: 0 auto;
        }
      }

      &:hover {
        .left-div {
          width: 330px;
          left: 0;
          transform: rotateZ(0deg);
          h2 {
            transform: rotateZ(0deg);
          }
          .span {
            text-align: center;
            font-size: 15px;
            font-weight: 400;
            transform: rotateZ(0deg);
            left: 0;
            top: 20px;
          }
        }
        .right-div {
          right: 0;
          width: 530px;
        }
      }
    }
  }
  .project.todo {
    background: white;
    border-radius: 3px;
    padding: 10px;
    margin-top: 4vh;
    h1 {
      text-align: center;
      text-transform: capitalize;
      font-weight: 600;
      font-family: "Russo One", sans-serif;
      padding-top: 5px;
    }
    span {
      text-align: center;
      display: block;
      font-weight: 500;
      padding-bottom: 10px;
      font-family: monospace;
      color: rgb(255, 192, 0);
      color: teal;
    }

    .img {
      width: 90%;
      height: 65%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 3vh auto;

      .img-desc {
        width: 350px;
        height: 300px;
        border-radius: 5px;
        background: rgba(45, 45, 56, 0.829);
        box-shadow: -10px -10px 0px 10px rgb(8, 207, 101);
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;

        h4 {
          text-align: center;
          text-transform: capitalize;
          font-weight: 600;
          padding: 13px;
          cursor: pointer;
          background: white;
          border-radius: 4px;
          width: 80%;
        }

        p {
          text-align: left;
          color: white;

          ul {
            width: 100%;
            li {
              list-style-type: square;
              text-transform: capitalize;
              padding: 3px 0;
            }
          }
        }
      }

      img {
        height: 90%;
        width: auto;
        cursor: pointer;
      }
    }
    button {
      width: 70%;
      margin: 0 auto;
      background: teal;
      .route {
        color: white;
      }
    }
  }
  .project.currency {
    background: white;
    padding: 10px;
    position: relative;
    h1 {
      text-align: center;
      text-transform: capitalize;
      padding: 10px;
      font-weight: 700;
      font-family: "Russo One", sans-serif;
    }
    span {
      display: block;
      text-align: center;
      padding: 5px;
      font-weight: 400;
      font-family: monospace;
    }
    .desc {
      width: 90%;
      margin: 0 auto;

      p {
        text-align: center;
        padding: 3px;
        span {
          color: teal;
          font-size: 1.1em;
          font-weight: 600;
          cursor: pointer;
        }
      }
      img {
        height: 160px;
        width: auto;
        display: block;
        margin: 0 auto;
        cursor: pointer;
        @media screen and (max-width: 560px) {
          height: 100px;
        }
      }
    }
    button {
      width: 80%;
      display: block;
      margin: 0 auto;
      background: teal;
      .route {
        color: white;
      }
    }
  }
  .project.exchange,
  .project.bmi {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 10s ease;
    section {
      background: white;
      width: 100%;
      height: 86vh;
      border-radius: 4px;
      display: none;
      opacity: 0;
      transition: all 10s ease;
      h1 {
        text-align: center;
        text-transform: capitalize;
        padding: 10px;
        font-weight: 700;
        font-family: "Russo One", sans-serif;
      }
      span {
        display: block;
        text-align: center;
        padding: 5px;
        font-weight: 400;
        font-family: monospace;
      }
      p {
        text-align: center;
        padding: 4px;
      }
      img {
        height: 190px;
        width: auto;
        display: block;
        cursor: pointer;
        margin: 0 auto;
        @media screen and (max-width: 560px) {
          height: 100px;
        }
      }
    }
    .hover {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      font-weight: 600;
      font-size: 20px;
      background: white;
      padding-top: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: capitalize;
      white-space: nowrap;
      text-align: center;
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      .hide {
        display: block;
        background: teal;
        color: white;
        padding: 3px 8px;
        border-radius: 3px;
        position: absolute;
        bottom: 35px;
      }
    }

    &:hover {
      section {
        display: block;
        transition: all 0.3s ease-in-out;
        animation: show 0.5s linear 1 alternate forwards;
      }
      .hover {
        display: none;
      }
    }
  }
  @keyframes show {
    to {
      opacity: 1;
    }
  }
}
</style>