<template>
  <div class="page">
    <!-- <header>
      <nav class="large-screen">
        <router-link to="/" class="route">home</router-link>
      </nav>
      <nav>
        <h1>coding <span>herald</span></h1>
      </nav>
      <nav class="large-screen">
        <router-link to="/Register" class="route">sign up</router-link>
      </nav>
      <nav class="small-screen">
        <i class="fa-solid fa-bars" @click="toggle = !toggle"></i>
      </nav>
    </header> -->
    <Header />
    <img src="../assets/desk.svg" id="desk" alt="learning never ends" />
    <img src="../assets/list.svg" id="pic" alt="codingHerald" />
    <div class="form-login">
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
        <transition name="appear">
          <p class="errormsg text-danger text-center" v-if="errormsg.valid">
            {{ errormsg.invalidMsg }}
          </p></transition
        >
        <transition name="appear">
          <p
            class="errormsg text-secondary text-center"
            v-if="errormsg.process"
          >
            {{ errormsg.invalidMsg }}
          </p>
        </transition>
        <button id="log-in" class="btn" type="submit">
          log in <i class="fa fa-arrow-right"></i>
        </button>
        <p>
          don't have an account?
          <router-link to="/Register">sign up</router-link>
          <span><a href="/forgot_password"> forgot password?</a></span>
        </p>
      </form>
    </div>

    <transition name="appear">
      <div class="items" v-if="toggle">
        <a href="/" class="route">Home</a>
        <a href="/register">sign up</a>
      </div>
    </transition>
    <Spinner v-show="loader.state" :rate="loader.percent" :msg="loader.msg" />
  </div>
</template>

<script>
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Spinner from "./spinner.vue";
import Header from "./Header.vue";
export default {
  name: "Login",
  components: {
    Spinner,
    Header,
  },
  setup() {
    const router = useRouter();

    let user = reactive({
      username: "",
      password: "",
    });

    let response = reactive({
      msg: "",
      success: false,
      failed: false,
    });

    let loader = reactive({
      percent: 0,
      state: false,
      msg: "",
    });

    let toggle = ref(false);
    let errormsg = reactive({
      invalidMsg: "",
      valid: false,
      process: false,
    });

    /**
     * creating a log in validation and authentication
     */
    const login = () => {
      loader.state = true;
      axios
        .post(
          "api/signin",
          {
            username: user.username,
            password: user.password,
          },
          {
            onUploadProgress: (uploadEvent) => {
              response.success = true;
              loader.msg = `verifying credentials: please wait!`;

              loader.percent = computed(() => {
                return Math.round(
                  (uploadEvent.loaded / uploadEvent.total) * 100
                );
              });

              if (loader.percent === 100) {
                response.success = false;
              }
            },
          }
        )
        .then((res) => {
          if (res.statusText === "OK") {
            errormsg.process = true;
            errormsg.invalidMsg = "Successful. loading data....";
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("accessId", res.data.accessId);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${res.data.accessToken}`;
            router.push("/overview/Todo");
            loader.state = false;
          }
        })
        .catch((err) => {
          errormsg.valid = true;
          errormsg.invalidMsg = "Error:\\Invalid credentials. Acess Denied";
          loader.state = false;
          setTimeout(() => {
            errormsg.valid = false;
          }, 3000);
          return err;
        });
    };

    return { user, response, loader, toggle, errormsg, login };
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    rgb(33,85,100) 20%,
    rgb(39, 107, 125) 40%,
    rgba(20, 164, 212, 0.877) 100%
  );
  background-attachment: fixed;
  background-size: cover;

  padding: 0;
  padding-bottom: 20px;
  margin: 0;

  .form-login {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    position: relative;
  }

  .log-in {
    width: 500px;
    height: fit-content;
    background: white;
    border-radius: 5px;
    margin-top: 17vh;
    padding: 25px 20px;
    position: relative;
    // z-index: 1;

    h1 {
      text-align: center;
      text-transform: capitalize;
      padding: 5px;
      margin: 2% auto;
      color: teal;
      opacity: 0.785;
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
      z-index: 0.9;

      label {
        display: block;
        padding: 3px 30px;
        padding-left: 10px;
        text-transform: capitalize;
        cursor: pointer;
        color: teal;
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

      @media screen and (max-width: 400px) {
        width: 99%;
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
      background-color: teal;
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

      @media screen and (max-width: 400px) {
        width: 97%;
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
      font-size: 11px;
      cursor: pointer;
      color: teal;

      a {
        text-decoration: none;
        color: brown;
        margin-right: 5px;
      }

      span {
        float: right;
        margin-right: 1%;
      }

      @media screen and (max-width: 380px) {
        span {
          float: none;
          display: block;
        }
      }
    }

    @media screen and (max-width: 550px) {
      width: 95vw;
    }
  }

  .items {
    position: fixed;
    top: 10vh;
    left: 1%;
    background: teal;
    width: 100px;
    height: 80px;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    z-index: 1;

    a {
      width: 100%;
      height: 45%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: white;
    }
  }

  #desk {
    position: absolute;
    top: 20vh;
    left: 7%;
    height: 380px;
    width: auto;

    @media screen and (max-width: 800px) {
      height: 130px;

      @media screen and (max-width: 270px) {
        height: 100px;
      }
    }
  }
  #pic {
    position: absolute;
    top: 15vh;
    right: 3%;
    width: 400px;
    z-index: 0.5;

    @media screen and (max-width: 800px) {
      width: 300px;

      @media screen and (max-width: 430px) {
        width: 150px;
      }
    }
  }
}
</style>
