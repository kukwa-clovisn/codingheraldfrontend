<template>
  <header class="header">
    <nav class="header-top">
      <button @click="myFunction()">
        <span class="fa fa-bars icon"></span>
      </button>

      <span>dashboard </span>
      <span class="span">CH</span>
    </nav>
    <nav class="header-bottom">
      <div class="icons">
        <span> <i class="far fa-bell icon"></i></span>
        <span> <i class="fas fa-sms icon"></i></span>
        <span> <i class="fas fa-user-tie icon"></i></span>
      </div>
    </nav>
  </header>
  <section
    class="blur-page"
    v-if="blur"
    @click="
      IsMenu = false;
      blur = false;
    "
  ></section>
  <section :class="{ menu: IsMenu }" id="menu">
    <div class="top">
      <i class="fas fa-user-circle"></i>
      <span>Dashboard</span>
      <button
        @click="
          IsMenu = false;
          blur = false;
        "
      >
        <span class="cross-bars">&times;</span>
      </button>
    </div>
    <div class="content">
      <li>
        <input
          type="search"
          name="search"
          id="menuSearch"
          placeholder="Search...."
        />
        <i class="fab fa-searchengin searchBtn" id="searchBtn"></i>
      </li>
      <li><span>Read</span></li>
      <li><span>write</span></li>
      <li><span>my messages</span></li>
      <li><span>settings</span></li>
      <li><span>exit</span></li>
    </div>
  </section>

  <div class="landing-page">
    <div class="logo">
      <h1>HeraldsChat</h1>
      <p>reach out to millions++ online with the Gospel</p>
    </div>
    <div class="next-content">
      <div class="buttons">
        <button>write</button>
        <button>read</button>
      </div>
      <div class="search-input">
        <div class="input-div">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search items..."
          />
          <button class="query-search">search</button>
        </div>
      </div>
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
        <button>start writing...</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ChatLogic",
  setup() {
    const IsMenu = ref(false);
    const blur = ref(false);
    function myFunction() {
      IsMenu.value = true;
      blur.value = true;
    }

    return {
      IsMenu,
      blur,
      myFunction,
    };
  },
};
</script>

<style lang="scss" scpode>
.header {
  width: 100vw;
  height: 20vh;
  color: white;
  background: rgb(2, 185, 109);
  background: url(../assets/nature.jpg);
  display: flex;
  justify-content: center;
  border: none;
  flex-direction: row;

  .header-top {
    width: 50%;
    height: 100%;
    background: rgb(4, 143, 223);
    border-radius: 0 0 100% 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    div {
      border: 2px solid red;
      position: relative;
      left: -100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      position: relative;
      left: -100px;
      border: none;
      background: transparent;
      .icon {
        font-size: 40px;
        font-weight: 600;
        cursor: pointer;
        color: white;
        transition: all 0.3s ease;
        padding: 2px;

        &:hover {
          transform: rotateZ(90deg);
        }
        &:active {
          font-size: 1px;
        }
      }
    }

    span {
      color: white;
      font-weight: 500;
      font-family: "Russo One", sans-serif;
      font-size: 40px;
      text-transform: capitalize;
      position: relative;
      left: -110px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        font-size: 37px;
      }
    }

    .span {
      position: absolute;
      top: 30px;
      left: 45.7vw;
      background: white;
      color: rgb(4, 143, 223);
      font-weight: 700;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      height: 110px;
      width: 110px;
      font-size: 40px;
    }
  }
  .header-bottom {
    height: 100%;
    width: 50%;
    background: white;
    border-radius: 0 0 0 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .icons {
      width: 80%;
      height: 100%;
      padding-bottom: 25px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;

      span {
        .icon {
          font-size: 30px;
          font-weight: 800;
          color: rgb(4, 143, 223);
          outline: 3px solid rgb(4, 143, 223);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          cursor: pointer;
          padding: 10px;
          position: relative;
          transition: all 0.3s ease;

          &:hover {
            transform: scale(0.9);
          }
        }
        &::before {
          content: "11";
          color: white;
          font-weight: 600;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgb(4, 143, 223);
          position: relative;
          top: 20px;
          left: 35px;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 12px;
        }

        &:last-child {
          &::before {
            content: "online";
            width: 25px;
            height: 25px;
            font-size: 7px;
          }
        }
      }
    }
  }
}
#menu {
  width: 350px;
  height: 100vh;
  background: white;
  z-index: 1;
  position: fixed;
  top: 0;
  left: -350px;
  transition: all 0.3s ease-in-out;
  .top {
    width: 100%;
    background: rgb(1, 109, 151);
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    cursor: pointer;
    span {
      color: white;
      font-family: "Rosso One", sans-serif;
    }
    button {
      border: none;
      background: transparent;
      .cross-bars {
        font-size: 35px;
        font-weight: 500;
        transition: all 0.4s ease;
        cursor: pointer;
        color: white;

        &:hover {
          transform: rotateZ(-90deg);
        }
      }
    }
  }
  .content {
    width: 90%;
    margin: 2vh auto;
    padding: 10px 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;

    li {
      list-style-type: none;
      width: 100%;
      height: 50px;
      margin: 5px 0;

      input {
        border: none;
        border-radius: 30px;
        background: rgba(235, 234, 234, 0.945);
        height: 40px;
        width: 250px;
        display: block;
        padding: 3px 16px;
        outline: none;
        font-size: 11px;
      }
      #searchBtn {
        position: relative;
        left: 210px;
        font-size: 25px;
        z-index: 1;
        top: -32px;
        transition: all 0.3s ease;

        &:hover {
          transform: rotateZ(-45deg);
          cursor: pointer;
        }
        &:active {
          transform: scale(0.7);
        }
      }
      span {
        padding: 0 40px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.3s ease;
        position: relative;
        text-transform: capitalize;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        left: -30px;
        cursor: pointer;

        &:hover {
          left: 30px;
          background: rgb(1, 109, 151);
          color: white;
          border-radius: 20px;
        }
      }
    }
  }
}
#menu.menu {
  left: 0;
}

.blur-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(177, 176, 176, 0.911);
  z-index: 1;
}
.landing-page {
  width: 100vw;
  height: 80vh;
  color: white;
  background: url(../assets/nature.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .logo {
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    h1 {
      color: white;
      font-size: 70px;
      font-weight: 700;
    }
    p {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before,
      &::after {
        content: "";
        display: block;
        width: 100px;
        height: 3px;
        margin: 0 10px;
        background: rgb(0, 162, 255);
      }
    }
  }

  .next-content {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    .buttons {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        width: 200px;
        height: 58px;
        padding: 5px;
        font-weight: 400;
        font-size: 23px;
        text-transform: capitalize;
        border: none;
        border-radius: 2px;
        font-family: "Russo One", sans-serif;
        background: white;
        margin-right: 10px;
        transition: all 0.3s ease;

        &:last-child {
          background: rgb(6, 132, 206);
          color: white;
          opacity: 0.9;
        }
        &:hover {
          background: transparent;
          opacity: 1;
          border: 0.5px solid rgb(234, 236, 236);
          color: white;
        }
        &:active {
          transform: scale(0.8);
        }
      }
    }

    .search-input {
      width: 100%;
      height: 70%;
      padding: 20px;
      .input-div {
        width: 100%;
        height: 150px;
        background: transparent;
        border-radius: 3px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        color: black;

        #search {
          width: 70%;
          height: 60px;
          padding: 5px 40px;
          border: none;
          border-radius: 30px;
          color: var(--bs-dark);
          font-weight: 500;
          outline: none;
          display: block;
        }
        .query-search {
          width: 200px;
          height: 60px;
          padding: 5px auto;
          border: none;
          border-radius: 30px;
          outline: none;
          background: rgb(6, 132, 206);
          color: white;
          text-transform: capitalize;
          display: block;
          margin: 2vh auto;
          transform: all 0.3 ease;

          &:hover {
            background: rgb(3, 47, 73);
          }

          &:active {
            transform: scale(0.9);
          }
        }
      }
    }
  }
}
.profile {
  width: 100vw;
  height: 100vh;
  background: #eaeaea;

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