<template>
  <div class="main">
    <Header />

    <div class="form">
      <form @submit.prevent="updatePassword()" v-if="user.step1">
        <h1>codingheraldapps</h1>
        <div class="input">
          <label for="email"> email:</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="user.email"
            placeholder="Enter your email..."
            required
          />
        </div>

        <button type="submit">submit</button>
        <a href="/login" class="a">back</a>
      </form>
      <form @submit.prevent="verifyToken()" v-if="user.step2">
        <h1>codingheraldapps</h1>
        <span>{{ user.count }}</span>
        <div class="input">
          <label for="password">token:</label>
          <input
            type="text"
            name="newPassword"
            id="newPassword"
            v-model="user.token"
            placeholder="Enter token sent to your email..."
            required
          />
        </div>
        <p>
          A message has been sent to your email with the token. check your spam
          if you can't find it
        </p>
        <button type="submit">submit</button>
        <a href="/forgot_password" class="a">back</a>
      </form>
      <form @submit.prevent="changePassword()" v-if="user.step3">
        <h1>Atech acadmey</h1>
        <div class="input">
          <label for="userEmail">email:</label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            v-model="user.userEmail"
            placeholder="Enter email.."
            required
          />
        </div>
        <div class="input">
          <label for="password">new Password:</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            v-model="user.new_password"
            placeholder="Enter new Password..."
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <footer><i class="fa-solid fa-copyright"></i>codingherald2022</footer>
    </div>
    <div class="response-div">
      <div class="done" v-if="user.success">
        <i class="fa-solid fa-circle-check"></i>
        <span>{{ user.msg }}</span>
      </div>
      <div class="error" v-if="user.failed">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>{{ user.msg }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import Header from "./Header.vue";
export default {
  name: "Forgot_password",
  components: {
    Header,
  },
  setup() {
    let user = reactive({
      email: "",
      token: "",
      new_password: "",
      userEmail: "",
      count: 1,
      msg: "",
      step1: true,
      step2: false,
      step3: false,
      success: false,
      failed: false,
    });

    const router = useRouter();

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    function updatePassword() {
      axios
        .post("api/forget_password", { email: user.email }, config)
        .then((res) => {
          if (res.statusText === "OK") {
            localStorage.setItem("updateToken", res.data.updateToken);
            user.step1 = false;
            user.step2 = true;
            countdown();
          }
        })
        .catch((err) => {
          user.failed = true;
          setTimeout(post_error, 3000);
          return err;
        });
    }

    function verifyToken() {
      axios
        .post(
          "api/forget_password/token",
          { token: user.token, userToken: localStorage.getItem("updateToken") },
          config
        )
        .then((res) => {
          if (res.statusText === "OK") {
            user.step2 = false;
            user.step3 = true;
          }
        })
        .catch((err) => {
          user.failed = true;
          user.msg = err.response.data.msg;
          setTimeout(post_error, 3000);
        });
    }

    function changePassword() {
      axios
        .post(
          "api/forget_password/update",
          {
            password: user.new_password,
            email: user.userEmail,
          },
          config
        )
        .then((res) => {
          if (res.statusText === "OK") {
            user.success = true;
            user.msg = res.data.msg;
            setTimeout(pop, 3000);
          }
        })
        .catch((err) => {
          user.failed = true;
          user.msg = err.response.data.msg;
          setTimeout(post_error, 3000);
        });
    }

    function countdown() {
      let counting = setInterval(() => {
        user.count += 1;

        if (user.count === 60) {
          clearInterval(counting);
        }
      }, 1000);
    }

    function pop() {
      user.success = false;

      router.push("/login");
    }

    function post_error() {
      user.failed = false;
    }

    return { user, updatePassword, verifyToken, changePassword };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$baseColor: #072e54;
$fallback: rgb(19, 37, 62);
$col: #3d566f;

.main {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to top,
    rgba(21, 122, 253, 0.685) 0%,
    rgba(171, 250, 171, 0.623) 40%,
    rgba(20, 164, 212, 0.877) 100%
  );
  background-attachment: fixed;
  background-size: cover;
  overflow-y: auto;
  padding: 0;
  position: relative;

  .form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: transparent;

    form {
      width: 500px;
      height: fit-content;
      padding: 20px;
      border-radius: 7px;
      background: white;
      margin: auto;
      position: relative;

      h1 {
        font-family: "Grand Hotel", cursive;
        text-align: center;
        background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      span {
        color: $SecondaryColor;
        text-align: center;
        margin: auto;
        display: block;
      }

      .input {
        width: 100%;
        margin: 20px auto;

        label {
          text-align: left;
          display: block;
          padding-bottom: 3px;
          text-transform: capitalize;
          font: 500 20px "Poppins", sans-serif;
          color: teal;
        }
        input {
          width: 100%;
          height: 50px;
          padding: 5px 20px;
          outline: none;
          border: none;
          border-radius: 3px;
          box-shadow: 0 0 2px 1px rgb(224, 223, 223);
        }
      }

      button {
        width: 100%;
        height: 50px;
        border: none;
        margin: 20px auto;
        border-radius: 3px;
        background: $SecondaryColor;
        color: white;
      }

      .a {
        color: teal;
        text-align: center;
        margin: auto;
        display: block;
      }

      @media screen and (max-width: 530px) {
        width: 97vw;
      }
    }

    footer {
      position: absolute;
      bottom: 10px;
      left: 40%;
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: url(../assets/login.png);
      background-position: left;
      background-attachment: fixed;
      background-size: 40% auto;
      background-repeat: no-repeat;

      @media screen and (max-width: 600px) {
        background-size: 70% auto;
      }
    }
  }

  .response-div {
    width: 90%;
    height: fit-content;
    position: fixed;
    left: 5%;
    top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .done,
  .error {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(71, 243, 151);
    border-radius: 4px;
    padding: 20px;
    z-index: 1;
    position: relative;
    animation: pop 1s linear alternate forwards;

    i {
      font-size: 30px;
      margin-right: 10px;
      color: white;
    }

    span {
      color: white;
      white-space: pre-wrap;
    }
  }

  .error {
    background: $SecondaryColor;
    span {
      color: white;
    }
  }

  @keyframes pop {
    from {
      top: 0;
    }
    to {
      top: 15vh;
    }
  }
}
</style>
