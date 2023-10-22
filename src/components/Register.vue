<template>
  <div class="main">
    <div>
      <br />
      <div class="logo-main">
        <div class="logo"><span>CH</span></div>
        <p>
          <span title="codingheraldapps">codingheraldapps</span> <br /><br />
          is inviting you to sign up <i class="fa fa-thumbs-up"></i>
        </p>
        <h2>
          <span class="online">free</span>
          <span class="members">4 Apps</span>
        </h2>
      </div>
      <br />
      <h2 class="text-center text-capitalize lead" v-if="confirm">
        welcome to the era of technology <br />
        your sign up was successful! <br />
        <router-link to="/" class="link"
          ><i class="fa fa-arrow-left"></i> Go to Home</router-link
        >
        or <router-link to="/Todo" class="link">Todo app</router-link>
      </h2>
      <transition name="fade">
        <form @submit.prevent="next" v-if="stepOne">
          <label for="username">username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="What should we call you?"
            required
            class="text-capitalize"
            v-model="username"
          />
          <p class="lead error" v-if="error">{{ errormsg }}</p>
          <button class="registerBtn" type="submit">next</button>

          <p>
            <router-link to="/login" class="a"
              >already have an account?sign in</router-link
            >
            <button type="button">
              <router-link to="/" class="link"
                ><i class="fa fa-home"></i>home</router-link
              >
            </button>
          </p>
        </form>
      </transition>
      <transition name="fade">
        <form @submit.prevent="nextStep" v-if="stepTwo">
          <label for="useremail">user email:</label>
          <input
            type="email"
            name="useremail"
            id="useremail"
            placeholder="your Email address..."
            required
            v-model="email"
          />
          <p class="lead error" v-if="error">{{ errormsg }}</p>
          <button class="registerBtn" type="submit">next</button>

          <p class="d-flex justify-content-between align-items-center">
            <router-link to="/" class="a"
              >already have an account?sign in</router-link
            >
            <button
              type="button"
              @click="
                this.stepOne = true;
                this.stepTwo = false;
                this.stepThree = false;
                this.error = false;
                this.confirm = false;
              "
            >
              <i class="fa fa-arrow-left"></i>back
            </button>
          </p>
        </form>
      </transition>
      <transition name="fade">
        <form @submit.prevent="sign" v-if="stepThree">
          <label for="userpassword">user password:</label>
          <input
            type="password"
            name="userpassword"
            id="userpassword"
            placeholder="Enter a strong password..."
            required
            v-model="password"
          />
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="confirm your password"
            required
            v-model="confirmPassword"
          />
          <p class="lead error" v-if="error">
            {{ errormsg }}
          </p>
          <button class="registerBtn" type="submit">sign up</button>

          <p class="d-flex justify-content-between align-items-center">
            <router-link to="/" class="a"
              >already have an account?sign in</router-link
            >
            <button
              type="button"
              @click="
                this.stepOne = false;
                this.stepTwo = true;
                this.stepThree = false;
                this.confirm = false;
                this.error = false;
              "
            >
              <i class="fa fa-arrow-left"></i> back
            </button>
          </p>
        </form>
      </transition>

      <footer>
        by registering you agree to codingherald's Terms of Service and Privacy
        Policy
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      confirm: false,
      error: false,
      errormsg: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      names: [],
      emails: [],
    };
  },
  methods: {
    next() {
      if (this.username !== "" && this.username.length > 5) {
        this.stepOne = false;
        this.stepTwo = true;
        this.stepThree = false;
        this.error = false;
      } else {
        this.error = true;
        this.errormsg = " please fill in your username...";
        this.username = "";
      }
    },
    nextStep() {
      if (this.email !== "") {
        this.stepOne = false;
        this.stepTwo = false;
        this.stepThree = true;
        this.error = false;
      } else {
        this.error = true;
        this.errormsg = "please fill in a valid email address";

        this.email = "";
      }
    },
    sign() {
      if (this.password.length > 4 && this.password === this.confirmPassword) {
        axios
          .post(
            "api/signup",
            {
              username: this.username,
              email: this.email,
              password: this.password,
            },
            {
              headers: {
                "Content-type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.statusText === "OK") {
              return this.$route.push("/login");
            }
          })
          .catch((err) => {
            this.errormsg = err.response.data.msg;
            this.err = true;
            this.stepOne = true;
            this.stepTwo = false;
            this.stepThree = false;
          });
      } else {
        this.errormsg = "invalid password";
        this.err = true;
        this.stepOne = false;
        this.stepTwo = false;
        this.stepThree = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: fit-content;
  margin: 0;
  padding-top: 3vh;
  background:linear-gradient(to bottom right, rgb(178, 180, 184),rgb(59, 64, 74)) ;
  background-position: left;
  background-attachment: fixed;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 20px 3px;
  border-radius: 0;
}
.logo-main {
  width: 100%;

  .logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: white;
    color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vh auto;
    cursor: pointer;
    border: 4px solid rgb(55, 107, 146);
    font-size: 35px;
    background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
    span {
      font: 700 20px "Jacques Francois Shadow", sans-serif;
      color: white;
    }
  }

  @keyframes round {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  p {
    text-align: center;
    text-transform: capitalize;
    cursor: pointer;
    font-size: 12px;

    span {
      font-size: 21px;
      cursor: pointer;
      font-family: "Grand Hotel", cursive;
      background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  h2 {
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    .online {
      cursor: pointer;
      &::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;

        background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
        margin: 0 3% 0 0;
      }
    }
    .members {
      cursor: pointer;
      &::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: teal;
        margin: 0 3% 0 0;
      }
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: 5px 0;
      font-weight: 300;
      min-width: 50%;
      text-transform: capitalize;
      color: #949393;
      cursor: pointer;
    }
  }
}

h2 {
  .link {
    font-size: 0.9em;
    position: relative;
    top: 10px;
    text-decoration: none;
    color: tomato;
    cursor: pointer;
    i {
      padding-right: 10px;
    }
  }
}

div {
  width: 600px;
  height: fit-content;
  margin: 3vh auto;
  border-radius: 10px;
  color: white;
  background: rgb(54, 57, 63);
  @media screen and (max-width: 768px) {
    width: 80%;

    @media screen and (max-width: 500px) {
      width: 95%;
    }
  }
  .logo {
    margin: 2% auto;
  }

  form {
    height: fit-content;
    label {
      display: block;
      text-align: left;
      width: 80%;
      margin: 1% auto;
      text-transform: uppercase;
      cursor: pointer;
      color: rgb(190, 188, 188);
    }
    input {
      width: 85%;
      height: 50px;
      display: block;
      margin: 2% auto;
      outline: none;
      border-radius: 5px;
      padding: 3px 4px 3px 18px;
      color: #606060;
    }

    button {
      width: 85%;
      height: 50px;
 
        background: teal;
        // box-shadow: 0 0 5px 1px rgb(120, 120, 120);
      border: none;
      border-radius: 5px;
      color: white;
      margin: 2% auto;
      display: block;
      cursor: pointer;
      text-transform: uppercase;
      transition: all 0.3s ease-out;

      &:hover {
        background: rgb(2, 97, 97);
       
        transform:scale(1);
      }
    }
    p {
      width: 85%;
      height: 55px;
      margin: 0 auto;
      color: white;
      font-size: 12px;
      display: flex;
      padding: 0;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .a {
        width: 60%;
        display: block;
        width: fit-content;
        margin-bottom: 5px;
        background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: none;
        transition: all 0.3s ease;
        text-transform: capitalize;
        &:hover {
          border-bottom: 0.5px solid rgb(5, 165, 228);
        }
        @media screen and (max-width: 768px) {
          font-size: 12px;
        }
      }

      button {
        width: 40%;

        margin: 0;
        color: white;
        .link {
          color: white !important;
          text-decoration: none;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          i {
            margin-right: 5px;
            color: white !important;
          }

          &:hover {
            border: none;
          }
        }
      }

      @media screen and (max-width: 550px) {
        flex-direction: column;
        height: fit-content;

        button {
          width: 100%;
        }
      }
    }
    .error {
      width: 100%;
      height: 20px;
      text-transform: capitalize;
      color: gold;
      cursor: pointer;
      text-align: center;
      display: flex;
      justify-content: center;
      margin: 0;
    }
  }

  footer {
    width: 85%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    padding: 10px;
    font-size: 12px;
    text-transform: capitalize;
    color: #a7a6a6;
    cursor: pointer;
  }
}
</style>
