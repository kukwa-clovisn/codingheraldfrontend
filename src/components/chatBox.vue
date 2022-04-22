<template>
  <main>
    <div class="users-board">
      <div class="fixed-header">
        <div class="handlebar"><i class="fas fa-bars"></i></div>
        <div class="search-user">
          <input
            type="search"
            name="search"
            id="search_user"
            placeholder="Search for a user"
          /><input type="button" id="search-btn" value="search" />
        </div>
      </div>
      <div class="user-list">
        <!-- login users will be listed here from the backend -->
        <div class="user" v-for="(user, index) in users" :key="index">
          <div class="user-profile">
            <img src="../assets/p.jpg" alt="user profile" />
          </div>
          <div class="desc">
            <div class="title">
              <h2>{{ user.name }}</h2>
              <p>{{time}}</p>
            </div>
            <div class="content">
              <!-- <h3>username here:</h3> -->
              <p>{{user.name}} joined HE-chat</p>
            </div>
          </div>
        </div>
      </div>
      <div class="write">
        <i class="fas fa-pen"></i>
      </div>
    </div>
    <div class="chat-board">
      <div class="header">
        <div class="logo">
          <div class="img">
            <img src="../assets/p.jpg" alt="" />
          </div>

          <div class="user-desc">
            <h3>kukwa clovis</h3>
            <p>Feb 22-02-22</p>
          </div>
        </div>
        <div class="search">
          <i class="fas fa-search icon"></i>
          <i class="fas fa-ellipsis-v icon"></i>
        </div>
      </div>
      <div class="board"></div>
      <div class="input">
        <input type="text" name="text" id="text" placeholder="Message" />
        <button>
          <i class="fas fa-paper-plane icon"></i>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import {ref} from "vue"
import axios from "axios"
export default {
     name: "chatBox",

setup() {
let users = ref([]);
const time = ref("")

time.value = new Date();


     function getUsers() {
axios.get("http://localhost:3000/Database").then(res => {
     users.value = res.data;
});

     }
getUsers()
     return {users, time
     }
}
}
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  overflow: hidden;
  position: relative;

  .users-board {
    width: 37vw;
    height: 100%;
    position: relative;

    .fixed-header {
      width: 100%;
      height: 70px;
      background: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 1;

      .handlebar {
        width: 17%;
        display: flex;
        justify-content: center;
        align-items: center;

        i {
          font-size: 50px;
          cursor: pointer;
          color: rgb(62, 62, 65);
        }
      }
      .search-user {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        input {
          border: none;
          outline: none;
          border-radius: 30px 0 0 30px;
          background: rgb(237, 239, 240);
          padding-left: 20px;
          width: 70%;
          height: 45px;
          font: 500 12px "Poppins", sans-serif;
        }
        input#search-btn {
          padding-left: 0;
          border-radius: 0 30px 30px 0;
          width: 23%;
        }
      }
    }
    .user-list {
      width: 100%;
      height: 87%;
      padding: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      background: white;
      overflow: hidden;
      overflow-y: scroll;
      position: relative;

      .user {
        width: 98%;
        height: 80px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px auto;
        transition: all 0.3s ease;

        .user-profile {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;

          img {
            width: auto;
            height: 60px;
            cursor: pointer;
          }
        }
        .desc {
          width: 80%;
          height: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .title {
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h2 {
              font: 600 16px "Poppins", sans-serif;
              color: rgb(44, 43, 43);
              padding: 1px 2px;
              text-transform: capitalize;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space:nowrap;
              width: 64%;
            }
            p {
              font: 500 10px "Poppins", sans-serif;
              padding: 1px 3px;
              width: 35%;
              overflow:hidden;
              text-overflow: ellipsis;
              white-space:nowrap;
            }
          }
          .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 50%;
            padding: 0;
            h3 {
              font: 600 19px "Poppins", sans-serif;
              color: rgb(118, 119, 119);
              padding: 0 3px;
              text-transform: capitalize;
              width: 25%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            p {
              font: 500 13px "Poppins", sans-serif;
              width: 75%;
              margin: 0;
              height: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
        &:hover {
          background: rgb(138, 159, 172);
          transform: scale(1.02);
          padding: 12px;
          cursor: pointer;
          .desc {
            p {
              color: rgb(219, 217, 217);
            }
            .title {
              h2 {
                color: rgb(238, 238, 238);
              }
            }
            .content {
              h3 {
                color: white;
              }
            }
          }
        }
      }
    }
    .write {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      background: tomato;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      bottom: 32px;
      left: 30%;
      cursor: pointer;
      .fa-pen {
        color: white;
        cursor: pointer;
        font-size: 19px;
      }
    }
  }
  .chat-board {
    width: 74%;
    height: 100%;
    padding-left: 2px;
    background: rgb(191, 192, 192);
    position: relative;

    .header {
      width: 100%;
      height: 65px;
      background: white;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .img {
          width: 50px;
          height: 50px;
          border-radius: 100%;
          overflow: hidden;
          cursor: pointer;
          img {
            height: 50px;
            width: auto;
          }
        }

        .user-desc {
          height: 80%;
          padding-left: 10px;
          h3 {
            text-transform: capitalize;
            font: 700 22px "Poppins", sans-serif;
            margin: 0;
          }
          p {
            margin: 0;
          }
        }
      }
      .search {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .icon {
          font-size: 30px;
          cursor: pointer;
          color: rgb(133, 130, 130);
        }
      }
    }
    .input {
      position: absolute;
      bottom: 10px;
      left: 20px;
      width: 93%;
      height: 70px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      #text {
        width: 85%;
        height: 45px;
        border: none;
        outline: none;
        border-radius: 30px;
        padding-left: 23px;
        font: 500 15px "Poppins", sans-serif;
        color: rgb(104, 104, 105);
      }
      button {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .icon {
          color: tomato;
          font-size: 30px;
        }
      }
    }
  }
}
</style>
