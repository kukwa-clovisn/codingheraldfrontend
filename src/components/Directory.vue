<template>
  <header>
    <h1>projects</h1>
    <nav>
      <li>
        <routerLink to="/" class="route">home</routerLink>
      </li>
      <li>
        <routerLink to="/Register" class="route">sing up</routerLink>
      </li>
    </nav>
  </header>
  <main>
    <div class="projects">
      <div class="project">
        <h1 class="project-name">Herald's chat</h1>
        <span>read and write christocentric content...</span>
        <div class="image-div">
          <i class="fas fa-users png"></i>
        </div>
        <div class="desc">
          <p class="project-description">
            chat and get in contact with heralds all over the world.
          </p>
          <router-link to="/Dashboard" class="route-to-project"
            >open</router-link
          >
        </div>
      </div>
      <div class="project">
        <h1 class="project-name">currency app</h1>
        <span>get all your crypto currencies exchange rates</span>
        <div class="image-div">
          <img src="../assets/currency.png" alt="" class="image" />
        </div>
        <div class="desc">
          <p class="project-description">
            Get to know and exchange crypto currencies in pancakeswap. <br />
            app allows wallet connect.
          </p>
          <router-link to="/Currency" class="route-to-project"
            >open</router-link
          >
        </div>
      </div>
      <div class="project">
        <h1 class="project-name">todo app</h1>
        <span>Write your todos with ease</span>
        <div class="image-div">
          <img src="../assets/list.svg" alt="" class="image" />
        </div>
        <div class="desc">
          <p class="project-description">
            Write down your daily target or list of things to be done. <br />
            store your to do's
          </p>
          <router-link to="/Todo" class="route-to-project">open</router-link>
        </div>
      </div>
      <div class="project">
        <h1 class="project-name">Exchange app</h1>
        <span>Get the exchange rates of currencies worldwide</span>
        <div class="image-div">
          <img src="../assets/currency.png" alt="" class="image" />
        </div>
        <div class="desc">
          <p class="project-description">
            Get the current value of currencies with respect to other currencies
          </p>
          <router-link to="/Exchange" class="route-to-project"
            >open</router-link
          >
        </div>
      </div>
      <div class="project">
        <h1 class="project-name">BMI calculator</h1>
        <span>Know your body mass index ration now!</span>
        <div class="image-div">
          <img src="../assets/bmi-icon.png" alt="" class="image" />
        </div>
        <div class="desc">
          <p class="project-description">
            Know you Body Mass Index(BMI) <br />
            and tips to better your health
          </p>
          <router-link to="/BMI" class="route-to-project">open</router-link>
        </div>
      </div>
      <div class="project">
        <h1 class="project-name">Weather forcast</h1>
        <span
          >Get wheather prediction for your area of choice and more....</span
        >
        <div class="image-div">
          <img src="../assets/forcast.jpg" alt="" class="image" />
        </div>
        <div class="desc">
          <p class="project-description">
            know the current weather state of your town or any location of your
            choice
          </p>
          <router-link to="/Weather" class="route-to-project">open</router-link>
        </div>
      </div>
      <div class="project">
        <h1 class="project-name">stop watch</h1>
        <span>Your stop watch with accuracy and ease </span>
        <div class="image-div">
          <img src="../assets/wa.jpg" alt="" class="image" />
        </div>
        <div class="desc">
          <p class="project-description">
            start, stop, and do more with our easy to use stop watch
          </p>
          <router-link to="/Watch" class="route-to-project">open</router-link>
        </div>
      </div>
      <div class="project">
        <h1 class="project-name">random user api</h1>
        <span>Find random users worlwide just by a simple click!</span>
        <div class="image-div">
          <i class="fas fa-user-circle png"></i>
        </div>
        <div class="desc">
          <p class="project-description">
            enjoy playing around with our random user api to get new random
            users
          </p>
          <router-link to="/User" class="route-to-project">open</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Directory",
};
</script>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 10vw;

  h1 {
    width: 70%;
    height: 100%;
    text-transform: uppercase;
    font-size: 50px;
    text-align: center;
    color: teal;
    font-weight: 700;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 150px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(0.8);
    }
  }
  nav {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    li {
      list-style-type: square;
      // list-style-position: inside;
      width: 45%;
      height: 90%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .route {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 80%;
        height: 100%;
        cursor: pointer;
        font-size: 23px;
        text-decoration: none;
        font-weight: 400;
        color: tomato;
        text-transform: capitalize;
        transition: all 0.3s ease;

        &:hover {
          // border-bottom: 1px solid brown;
          // border-left: 1px solid brown;
          box-shadow: -3px -2px 19px 2px white;
          border-radius: 50%;
          color: white;
          background: tomato;
          transform: scale(0.9);
        }
      }
    }
  }

  @media screen and (max-width: 1068px) {
    flex-direction: column;
    height: 35vh;
    h1 {
      padding: 0;
      justify-content: center;
      width: 60%;
      height: 40%;
    }
    nav {
      height: 50%;
      width: 80%;
    }
  }
}
main {
  width: 100vw;
  height: auto;
  padding-top: 2vh;

  .projects {
    width: 85vw;
    height: auto;
    margin: 1vh auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 855px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (max-width: 660px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .project {
      margin: 10px;
      height: 86vh;
      width: 42vw;
      position: relative;
      padding: 10px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      background: rgb(1, 148, 148);
      border-radius: 5px;
      transition: all 0.3s ease;

      &:hover {
        height: 80vh;
        width: 38vw;
      }

      @media screen and (max-width: 855px) {
        width: 85vw;
        height: 80vh;
        &:hover {
          height: 77vh;
          width: 75vw;
        }
      }
      @media screen and (max-width: 660px) {
        width: 80vw;
        &:hover {
          height: 80vh;
          width: 70vw;
        }
      }

      h1 {
        text-align: center;
        text-transform: capitalize;
        padding: 3px;
        transition: all 0.3s ease;
        font-size: 35px;
        color: rgb(233, 233, 3);
        font-weight: 600;
        padding: 15px 0;

        &:hover {
          font-size: 1.7em;
        }
      }
      span {
        padding: 5px;
        text-align: center;
        color: white;
        font-family: monospace;
      }

      .image-div {
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        .image,
        .png {
          color: rgb(209, 224, 189);
          height: 90%;
          width: auto;
          display: block;
          margin: 0 auto;
          cursor: pointer;
        }
      }
      .desc {
        width: 100%;
        height: 60%;

        p {
          padding: 5px;
          width: 90%;
          display: block;
          margin: auto;
          color: white;
          text-align: center;
        }
        .route-to-project {
          width: 80%;
          height: 50px;
          position: absolute;
          bottom: 15px;
          left: 10%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 25px;
          font-weight: 600;
          margin: 0 auto;
          color: tomato;
          text-transform: capitalize;
          text-decoration: none;
          text-align: center;
          background: white;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>