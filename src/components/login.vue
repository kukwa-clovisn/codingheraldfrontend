<template>
  <div class="page">
    <header>
      <nav>
        <router-link to="/" class="route">home</router-link>
      </nav>
      <nav>
        <h1>coding <span>herald</span></h1>
      </nav>
      <nav>
        <router-link to="/Register" class="route">sign up</router-link>
      </nav>
    </header>
    <form @submit.prevent="login" class="log-in">
      <h1>welcome to <span id="welcome">KCN'S dairy</span></h1>
      <div>
        <label for="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          class="text-capitalize"
          v-model="user.username"
          placeholder="Enter your Dairy name..."
          required
        />
      </div>
      <div>
        <label for="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="user.password"
          placeholder="Enter password..."
          required
        />
      </div>
      <p class="errormsg text-danger text-center" v-if="errormsg.valid">
        {{ errormsg.invalidMsg }}
      </p>
      <button id="log-in" class="btn" type="submit">
        log in <i class="fa fa-arrow-right"></i>
      </button>
      <p>
        don't have an account? <router-link to="/Register">sign up</router-link>
        <span><a href=""> forgot password?</a></span>
      </p>
    </form>
    <img src="../assets/desk.svg" id="desk" alt="learning never ends" />
    <img src="../assets/list.svg" id="pic" alt="codingHerald" />
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  name: "Login",
  setup() {
    const router = useRouter();

    let user = reactive({
      username: "",
      password: "",
    });

    let errormsg = reactive({
      invalidMsg: "",
      valid: false,
    });

    /**
     * creating a log in validation and authentication
     */
    const login = async () => {
      try {
        await fetch("http://localhost:9001/login", {
          method: "Post",
          headers: {
            // "Access-Control-Request-Headers": "Authorization",
            // Authorization: "Bearer secretToken",
            "Content-type": "application/json",
          },
          // credentials: "include",
          body: JSON.stringify({
            username: user.username,
            password: user.password,
          }),
        })
          .then((res) => res.json())
          .then(async (res) => {
            console.log(res);

            if (!res.token) {
              errormsg.invalidMsg = res.msg;
              errormsg.valid = true;
              return;
            }

            let config = {
              headers: {
                Authorization: `Bearer ${res.token}`,
              },
            };
            // await fetch('http://localhost:9001/login/token/' + `${req.id}`)
            await axios("http://localhost:9001/login", config).then((res) => {
              console.log(res);

              localStorage.setItem("token", JSON.stringify(res.data._id));

              router.push({
                name: "Client",
                // params: { id: `${res.data._id}` },
              });
            });
          });
      } catch (err) {
        console.log(err);
      }
    };

    return { user, errormsg, login };
  },
};
</script>

<style lang="scss" scoped>
.page {
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to top,
    rgba(21, 122, 253, 0.685) 0%,
    rgba(171, 250, 171, 0.623) 40%,
    rgba(20, 164, 212, 0.877) 100%
  );
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  header {
    width: 100vw;
    height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 0 1px 2px 1px rgb(216, 216, 216);

    nav {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 0 30px;

      h1 {
        text-transform: capitalize;
        font: 700 30px "Poppins", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(
          210deg,
          rgba(2, 82, 187, 0.685),
          rgb(179, 135, 3),
          rgb(34, 66, 114)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .route {
        cursor: pointer;
        margin: 0 25px;
        text-decoration: none;
        text-transform: capitalize;
        color: rgb(7, 24, 49);
        font: 600 17px "Poppins", sans-serif;
        transition: all 0.3s ease;

        &:hover {
          color: rgba(2, 82, 187, 0.685);
          border-bottom: 2px solid rgba(2, 82, 187, 0.685);
        }
      }
    }
  }

  .log-in {
    width: 500px;
    height: fit-content;
    margin: 0 auto;
    margin-top: 6vh;
    background: white;
    border-radius: 5px;
    padding: 25px 20px;
    position: relative;
    z-index: 1;

    h1 {
      text-align: center;
      text-transform: capitalize;
      padding: 5px;
      margin: 2% auto;
      color: rgba(2, 82, 187, 0.785);
      font-size: 25px;
      cursor: pointer;
      font-weight: 600;
      position: relative;

      #welcome {
        color: rgb(220, 77, 20);
        padding: 0 5px;
        position: relative;
        overflow: hidden;
        letter-spacing: 1px;

        &::before {
          content: "";
          width: 100%;
          height: 40px;
          position: absolute;
          top: 0;
          left: 0;
          border-left: 2px solid rgb(220, 77, 20);
          animation: logo 5s alternate infinite;
          background: white;
        }
      }

      @keyframes logo {
        from {
          top: 0;
          left: 0;
          width: 100%;
        }
        to {
          top: 0;
          left: 100%;
          width: 0;
        }
      }
    }

    div {
      width: 90%;
      height: fit-content;
      margin: 10px auto;
      margin-bottom: 20px;
      display: block;

      label {
        display: block;
        padding: 3px 30px;
        text-transform: capitalize;
        cursor: pointer;
      }

      input {
        width: 100%;
        height: 45px;
        padding: 2px 2px 2px 20px;
        outline: none;
        font-size: 13px;
        border: none;
        background: #eeecec;
        border-radius: 60px;
        color: #224272;
        transition: all 0.3s ease;

        &:hover {
          border: 2px solid teal;
        }

        &:active {
          border: 2px solid lightseagreen;
        }

        &:focus {
          border: 2px solid rgb(4, 178, 221);
        }
      }
    }

    button {
      width: 90%;
      height: 45px;
      display: block;
      margin: 20px auto;
      margin-bottom: 10px;
      border: none;
      border-radius: 60px;
      outline: none;
      background-color: #224272;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease-out;

      i {
        position: relative;
        left: 2%;
        opacity: 1;
        animation: kick 1s infinite linear reverse forwards;
      }

      @keyframes kick {
        0% {
          opacity: 1;
        }

        100% {
          opacity: 0;
        }
      }

      &:hover {
        transform: scale(1.01);
      }
      &:active {
        transform: scale(0.8);
      }
    }

    .errormsg {
      text-align: center;
      color: rgb(247, 34, 76);
      text-transform: capitalize;
      padding: 0 10px;
    }

    p {
      padding: 5px;
      margin-left: 5%;
      font-size: 13px;
      cursor: pointer;

      a {
        text-decoration: none;
        color: brown;
      }

      span {
        float: right;
        margin-right: 5%;
      }
    }
  }

  #desk {
    position: fixed;
    top: 20vh;
    left: 7%;
    height: 380px;
    width: auto;
  }
  #pic {
    position: fixed;
    top: 10vh;
    right: 3%;
    width: 450px;
  }
}
</style>
