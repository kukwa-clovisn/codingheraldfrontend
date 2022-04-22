<template>
  <div class="main">
    <div>
      <br />
      <div class="logo-main">
        <div class="logo">
          <img src="../assets/p.jpg" title="CEO" alt="" />
        </div>
        <p>
          <span title="Kukwa Clovis Ngong">kcn</span> <br /><br />
          is inviting you to sign up <i class="fa fa-thumbs-up"></i>
        </p>
        <h2>
          <span class="online">57,345 online</span>
          <span class="members">45,935210 members</span>
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

        <p class="d-flex justify-content-between align-items-center">
          <router-link to="/login">already have an account?sign in</router-link>
          <button type="button">
            <router-link to="/" class="link"
              ><i class="fa fa-home"></i>home</router-link
            >
          </button>
        </p>
      </form>
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
          <router-link to="/">already have an account?sign in</router-link>
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
          <router-link to="/">already have an account?sign in</router-link>
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

      <footer>
        by registering you agree to KCN's Terms of Service and Privacy Policy
      </footer>
    </div>
  </div>
</template>

<script>
// import {ref} from '@vue/reactivity';
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
  // created() {
  //   fetch("http://localhost:5000/Database")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res[0]);

  //       for (let i = 0; i < res.length; i++) {
  //         this.names.push(res[i].name);
  //         this.emails.push(res[i].email);
  //       }
  //       console.log(this.names);
  //       console.log(this.names.includes("Kukwa Clovis Ngong"));
  //     });
  // },
  methods: {
    next() {
      if (this.username !== "" && this.username.length > 5) {
        this.stepOne = false;
        this.stepTwo = true;
        this.stepThree = false;
        this.error = false;

        // fetch("http://localhost:8000/user/signup", {
        //   method: "POST",
        //   headers: {
        //     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        //   },
        //   credentials: "include",
        //   body: {
        //     username: this.username,
        //     email: this.username + "@gmail.com",
        //     password: this.username + "passcode",
        //   },
        // })
        //   .then((res) => res.json())
        //   .then((res) => {
        //     // Handle response
        //     console.log("Response: ", res);
        //   })
        //   .catch((err) => {
        // Handle error
        //   console.log("Error message: ", err);
        // });
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
      if (this.password.length > 6 && this.password === this.confirmPassword) {
        fetch("http://localhost:9001/register", {
          method: "Post",
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.data.username && res.data.username === this.username) {
              this.stepOne = true;
              this.stepTwo = false;
              this.stepThree = false;
              this.confirm = false;
              this.error = true;
              this.errormsg = res.msg;
              this.$route.push("/login");
              console.log(res);
            } else if (res.data.email && res.data.email === this.email) {
              this.stepOne = false;
              this.stepTwo = true;
              this.stepThree = false;
              this.confirm = false;
              this.error = true;
              this.errormsg = res.msg;
              console.log(res);
            } else {
              this.stepOne = false;
              this.stepTwo = false;
              this.stepThree = false;
              this.confirm = true;
              this.error = false;
              console.log(res);
            }
          });
      } else if (this.password !== this.confirmPassword) {
        this.error = true;
        this.errormsg = "confirm failed. the passwords don't match!";
        this.password = "";
        this.confirmPassword = "";
      } else {
        this.errormsg = "password should contain at least 7 mixed characters";
        this.password = "";
        this.error = true;
        this.confirmPassword = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding-top: 3vh;
  background: rgb(206, 205, 205);
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
    img {
      width: 100%;
      color: red;
      border-radius: 50%;
    }
    // animation: round 2s infinite linear;
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
      text-transform: uppercase;
      color: rgb(59, 165, 93);
      font-size: 14px;
      cursor: pointer;
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
        background: rgb(59, 165, 93);
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
        background: rgb(189, 189, 189);
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
  animation: load 1s 1 linear alternate forwards;
  width: 40%;
  margin: 3vh auto;
  border-radius: 10px;
  color: white;
  background: rgb(54, 57, 63);
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  .logo {
    margin: 2% auto;
  }

  form {
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
      background: rgb(88, 101, 242);
      border: none;
      border-radius: 5px;
      color: white;
      margin: 2% auto;
      display: block;
      cursor: pointer;
      text-transform: uppercase;
      transition: all 0.3s ease-out;

      &:hover {
        background: rgb(119, 130, 252);
      }
    }
    p {
      width: 85%;
      height: 55px;
      margin: 0 auto;
      color: white;
      font-size: 12px;
      letter-spacing: 1px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      a {
        display: block;
        width: fit-content;
        color: rgb(5, 165, 228);
        text-decoration: none;
        // text-align: left;
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
        width: 100px;
        position: absolute;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .link {
          color: white;
          text-decoration: none;
          &:hover {
            border: none;
          }
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

  @keyframes load {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2% 0;
    padding: 10px;
    font-size: 12px;
    text-transform: capitalize;
    color: #707070;
    cursor: pointer;
  }
}
</style>
