<template>
  <header class="header">
    <nav class="left-header">
      <img src="../assets/kings.png" alt="Herald's chat" />
      <span title="HERALDSCHAT">He-chat</span>
    </nav>
    <nav class="right-header">
      <li class="right-header-link">
        <routerLink to="/" class="right-header-route">clouds</routerLink>
      </li>
      <li class="right-header-link">
        <routerLink to="/" class="right-header-route">events</routerLink>
      </li>
      <li class="right-header-link">
        <routerLink to="/" class="right-header-route">support</routerLink>
      </li>
      <li class="right-header-link">
        <routerLink
          to="#content-three"
          @click="signup = true"
          class="right-header-route"
          >join</routerLink
        >
      </li>
      <li class="right-header-link" @click="logIn = true">
        <routerLink to="#content-two" class="right-header-route"
          >log in</routerLink
        >
      </li>
    </nav>
  </header>
  <div class="content-one">
    <div class="page-one">
      <h1>
        <span>heraldschat...</span> living every moment with joy.
      </h1>
      <p>meet and chat with thousands online.</p>
      <h3>
        we operate with android <i class="fab fa-android"></i> with
        <i class="fab fa-apple"></i>, <i class="fab fa-windows"></i> and more...
      </h3>
    </div>
    <div class="page-two">
      <div class="page-two-chat">
        <h2>multi-chat with others</h2>
        <button @click="signup = true">be a part of He-chat</button>
      </div>
      <img src="../assets/chat.jpg" alt="" />
    </div>
    <div class="page-three">
      <img src="../assets/hchat.jpg" alt="" />
      <div class="page-three-chat">
        <h2>upload your written for heralds to see worldwide</h2>
        <p>be a channel the gospel will use to reach the world</p>
        <button @click="signup = true">join the gospel train</button>
      </div>
    </div>
  </div>
  <div class="content-two" id="content-two" v-if="logIn">
    <div class="log-in-form">
      <div class="log-in-top-content">
        <img src="../assets/kings.png" alt="" />
      </div>
      <span class="close" @click="closeLogIn()">&times;</span>
      <div class="credentials">
        <input
          type="email"
          name="email"
          id="log-in-email"
          placeholder="Enter Email address..."
        />
        <input
          type="password"
          name="password"
          id="log-in-password"
          placeholder="Enter password "
        />
        <p class="error-msg" v-if="errorMsg">invalid log in info...</p>
        <button @click="validate()">log in</button>
      </div>
    </div>
  </div>
  <div class="content-two" id="content-three" v-if="signup">
    <div class="log-in-form">
      <div class="log-in-top-content">
        <h2>HeraldsChat</h2>
        <i class="fas fa-users"></i>
        <p>welcome to <span>Bluechat</span></p>
      </div>
      <span class="close" @click="closeLogIn()">&times;</span>
      <div class="credentials">
        <input
          type="email"
          name="email"
          id="log-in-email"
          placeholder="Enter Email address..."
          v-model="emailAuth"
        />
        <input
          type="password"
          name="password"
          id="log-in-password"
          placeholder="Enter password "
          v-model="passwordAuth"
        />
        <p class="error-msg" v-if="errorMsg">invalid info...</p>
        <button @click="userSignUp()">join</button>
      </div>
    </div>
  </div>
  <div class="content-four" id="content-four">
    <div class="left-div">
      <h2>
        <span>He-chat</span>
        world class heraldic chat platform
      </h2>
      <span class="span">CodingHerald</span>
      <p>
        android
        <i class="fab fa-android i"></i>
        mac <i class="fab fa-apple i"></i> windows
        <i class="fab fa-windows i"></i> and more...
      </p>
    </div>
    <div class="right-div">
      <h3>welcome to <span>HeraldsChat</span></h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
        autem laborum. Quo ab repellendus eligendi, ipsum asperiores beatae ad
        accusamus!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
        autem laborum. Quo ab repellendus eligendi, ipsum asperiores beatae ad
        accusamus!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
        autem laborum. Quo ab repellendus eligendi, ipsum asperiores beatae ad
        accusamus!
      </p>
    </div>
  </div>
  <section class="profile">
    <h1>create and share content worldwide</h1>
    <div class="profile-one">
      <div class="left div">
        <h3>HeraldsChat</h3>
        <p>
          Writing content that will change lives might get to be the greatest
          gospel you will ever have to preach during your lifetime. never
          neglect the gift God has blessed you with
        </p>
        <p>
          The Bible we read today came through inspiration as God spoke to men
          through men. <br />
          what is it that God has laid in your heart and you want to share with
          the world?
        </p>
        <p>
          just a word of encouragement, correction, discipline can amend a soul.
        </p>
        <i>TeamJesus4Life...</i>
      </div>
      <div class="right div">
        <h5 class="text-center">are you wondering about...??</h5>
        <p>
          have you been wondering on how to put the great wisdom in you to
          writing?
        </p>
        <p>
          have to been burdened with the desire and passion to spread the
          revelations God gives you with other believers??
        </p>
        <p>
          There is goodnews cause <span>HeraldsChat</span> is here for you, yes
          for you you to express the gift of God in you
        </p>
        <button @click="signup = true">start writing...</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dashboard",

  setup() {
    const errorMsg = ref(false);
    const logIn = ref(false);
    const invalid = ref(false);
    const signup = ref(false);
    const popTime = ref(60000);
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const emailAuth = ref('')
    const passwordAuth = ref('')
    function closeLogIn() {
      logIn.value = false;
      signup.value = false;
    }

    function validate() {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);

          for (let i = 0; i < res.length; i++) {
            if (
              res[i].password.includes(password.value) == true &&
              res[i].email.includes(email.value) == true
            ) {
              console.log("good to go");
              errorMsg.value = false;
              signup.value = false;
              logIn.value = false;
            } else {
              errorMsg.value = true;
              console.log("doesnt belong here");
            }
          }
        });
    }
   let emailVal = ref('')
      let passwordVal = ref('')
    function userSignUp() {
   
       emailVal.value = /[a-zA-Z0-9_\-.]+[@][a-z]+[.][a-z]{2,3}/g
       passwordVal.value = /[a-zA-Z0-9]{5,15}/g

      if(passwordVal.value.test(passwordAuth.value) && emailVal.value.test(emailAuth.value)) {
       
        fetch("http://localhost:3000/users", {
             method: "Post",
          body: JSON.stringify({
            name: emailAuth.value.slice(0,12),
            email: emailAuth.value,
            password: passwordAuth.value,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then(res => res.json()).then(res => console.log(res))
        signup.value = false;
      }  else{
        console.log('error 403 error from code...')
        errorMsg.value = true;
      }

    }

    setTimeout(() => {
      signup.value = true;
    }, popTime.value);

    return {
      errorMsg,
      username,
      password,
      email,
      invalid,
      validate,
      signup,
      closeLogIn,
      logIn,
      emailAuth,passwordAuth,userSignUp
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 15vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  z-index: 1;

  .left-header {
    width: 40vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 70%;
      width: auto;
      cursor: pointer;
    }
    span {
      font-weight: 700;
      text-transform: capitalize;
      font-size: 30px;
      cursor: pointer;
    }
  }

  .right-header {
    width: 60vw;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;

    .right-header-link {
      list-style-type: none;

      &:last-child {
        border: 3px solid rgb(13, 110, 253);
        padding: 4px 10px;
        width: 100px;
        text-align: center;
      }
      .right-header-route {
        text-decoration: none;
        text-transform: capitalize;
        font-weight: 600;
        font-size: 20px;
        color: rgb(13, 110, 253);
      }
    }
  }
}

.content-one {
  width: 100%;
  height: 235vh;
  padding-top: 15vh;
  position: relative;
  z-index: 0.8;
  background: linear-gradient(
    to bottom,
    rgb(23, 174, 224) 0%,
    rgb(9, 83, 167) 100%
  );

  .page-one {
    width: 100vw;
    height: 50vh;
    padding-top: 7vh;
    h1 {
      color: white;
      font-weight: 400;
      font-size: 35px;
      text-align: center;
      line-height: 80px;
      span {
        text-transform: capitalize;
        font-size: 60px;
        font-weight: 500;
      }
    }
    p {
      text-align: center;
      color: whitesmoke;
      opacity: 0.7;
    }
    h3 {
      text-align: center;
      line-height: 40px;
      color: var(--bs-light);
    }
  }
  .page-two {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .page-two-chat {
      width: 45vw;
      height: 70%;
      position: relative;
      left: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h2 {
        color: var(--bs-light);
        text-transform: capitalize;
        line-height: 100px;
        font-size: 40px;
      }
      button {
        width: 300px;
        padding: 10px;
        height: 55px;
        border: none;
        background: rgba(206, 252, 4, 0.863);
        color: var(--bs-dark);
        font-weight: 700;
        text-transform: capitalize;
        font-size: 20px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          background: tomato;
          color: white;
        }

        &:active {
          width: 250px;
        }
      }
    }

    img {
      height: 70vh;
      width: auto;
      display: block;
      border-radius: 5px;
      margin: 5vh auto;
      cursor: pointer;
    }
  }
  .page-three {
    width: 100vw;
    height: 80vh;
    background: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      height: 80%;
      width: auto;
      display: block;
      cursor: pointer;
    }
    .page-three-chat {
      width: 40vw;
      height: 60%;

      h2 {
        line-height: 50px;
        text-transform: capitalize;
        font-weight: 600;
        font-size: 40px;
      }
      p {
        line-height: 30px;
        padding: 10px;
      }
      button {
        width: 250px;
        height: 50px;
        cursor: pointer;
        color: var(--bs-light);
        text-transform: capitalize;
        font-weight: 600;
        border: none;
        background: rgb(9, 83, 167);
        transition: all 0.6s ease;

        &:hover {
          transform: translateX(150px);
        }
      }
    }
  }
}

.content-two {
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 15vh;
  z-index: 1;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(23, 174, 224, 0.632) 0%,
    rgba(9, 83, 167, 0.632) 100%
  );

  .log-in-form {
    width: 450px;
    height: 70vh;
    border-radius: 4px;
    background: white;

    // background: transparent;
    position: relative;

    .log-in-top-content {
      width: 100%;
      height: 35%;

      img,
      .fa-users {
        height: 90%;
        width: auto;
        display: block;
        cursor: pointer;
        margin: 5vh auto;
      }
    }

    .close {
      font-size: 45px;
      font-weight: 500;
      position: absolute;
      top: 0;
      right: 2vw;
      transition: all 0.3s ease;
      cursor: pointer;
      color: rgb(70, 68, 68);
      opacity: 0.7;

      &:hover {
        transform: rotateZ(-90deg);
      }
    }
    .credentials {
      width: 100%;

      input {
        width: 90%;
        height: 55px;
        font-size: 20px;
        font-weight: 500;
        display: block;
        margin: 2vh auto;
        border: none;
        border-radius: 30px;
        padding-left: 20px;
        outline: none;
        background: rgb(223, 222, 222);
      }

      .error-msg {
        text-align: center;
        color: crimson;
        font-weight: 500;
      }

      button {
        width: 200px;
        height: 50px;
        display: block;
        border: none;
        background: rgb(220, 20, 60);
        margin: 3vh auto;
        color: white;
        border-radius: 3px;
        font-weight: 500;
        text-transform: capitalize;
        transition: all 0.3s ease;

        &:hover {
          background: #333;
        }
      }
    }
  }
}
#content-three {
  z-index: 1;
  .log-in-form {
    background: white;
    padding-top: 20px;
    .log-in-top-content {
      height: 40%;
      .fa-users {
        border-radius: 50%;
        outline: 5px solid lightseagreen;
        padding: 15px;
        width: 80px;
        height: 80px;
        cursor: pointer;
        margin: 1vh auto;
      }
      p {
        text-align: center;
        span {
          color: rgb(3, 153, 247);
          font-weight: 600;
          cursor: pointer;
        }
      }
      h2 {
        text-align: center;
        font-weight: 600;
      }
    }
    .close {
      color: var(--bs-dark);
    }
    .credentials {
      input {
        background: rgb(223, 222, 222);
        border-radius: 30px;
        margin: 3vh auto;
        color: var(--bs-dark);
      }
    }
  }
}
#content-four {
  width: 100%;
  height: 85vh;
  padding: 0 10px;
  background: url(../assets/cross.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 0.3;
  transition: all 0.5s ease;
  .left-div {
    width: 60%;
    height: 70%;
    position: relative;
    left: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: rotateZ(11deg);
    background: rgba(255, 255, 255, 0.99);
    transition: all 0.5s ease-in-out;
    h2 {
      transform: rotateZ(-15deg);
      font-size: 30px;
      font-weight: 600;
      padding-top: 25px;
      text-align: center;
      color: rgb(5, 96, 233);
      transition: all 0.5s ease-in;
      span {
        display: block;
        color: red;
        background: rgb(231, 143, 251);
        border-radius: 30px;
        font-size: 60px;
        line-height: 20vh;
      }
    }

    .span {
      color: rgb(5, 96, 233);
      font-weight: 600;
      display: block;
      transform: rotateZ(-8deg);
      font-size: 23px;
      position: relative;
      left: 150px;
      top: -10px;
      transition: all 0.3s ease;
    }
    p {
      padding: 15px;
      font-size: 30px;
      color: rgb(5, 96, 233);
      text-align: center;
      text-transform: capitalize;
      position: relative;
      top: 40px;

      .i {
        color: gold;
      }
    }
    &:hover {
      background: rgba(255, 255, 255, 0.551);
      transform: rotateZ(0deg);

      h2 {
        transform: rotateZ(0);
      }
    }
  }
  .right-div {
    width: 40%;
    height: 90%;
    background: rgb(18, 60, 98);
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
  }

  &:hover {
    .left-div {
      width: 50%;
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
    }
  }
}
.profile {
  width: 100vw;
  height: 100vh;
  background: #eaeaea;
  padding-top: 10px;

  h1 {
    font-size: 45px;
    text-align: center;
    color: rgb(7, 110, 228);
    font-weight: 500;
    padding: 20px 10px;
    font-family: "Russo One", "Roboto", "Poppins", sans-serif;
  }
  .profile-one {
    width: 80%;
    height: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #f1f1f1;
    box-shadow: 0 3px 3px white;
    .div {
      width: 45%;
      height: 90%;
      box-shadow: 0 10px 10px whitesmoke;
      border-radius: 3px;
      background: #fff;
      padding: 10px;

      p {
        padding: 5px 10px;
        span {
          color: purple;
          font-weight: 600;
          font-family: "Russo One", sans-serif;
        }
      }
    }

    .left {
      h3 {
        padding: 5px;
        text-align: center;
      }

      i {
        text-align: center;
      }
    }
    .right {
      h5 {
        padding: 20px 0;
        text-transform: capitalize;
        font-family: "Roboto", sans-serif;
      }
      button {
        width: 80%;
        height: 50px;
        display: block;
        margin: 2vh auto;
        background: rgb(7, 110, 228);
        color: white;
        text-transform: capitalize;
        border: none;
        border-radius: 30px;
      }
    }
  }
}
</style>