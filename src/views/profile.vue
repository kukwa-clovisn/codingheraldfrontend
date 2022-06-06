<template>
  <main id="main">
    <div class="main">
      <transition name="fade">
        <div class="left-main" v-if="!squeeze">
          <header><h1>codingheraldapps</h1></header>
        </div>
      </transition>
      <div class="right-main" :class="{ squeeze: squeeze }">
        <header>
          <nav class="menu" @click="squeeze = !squeeze">
            <i class="fa-solid fa-align-left"></i>
          </nav>
          <nav class="items">
            <a @click="showMemories = !showMemories"
              >important memories <span>{{ user.memories }}</span></a
            >
            <a @click="logoutFunc()">logout</a>
          </nav>
        </header>
      </div>
    </div>

    <div class="center-main">
      <transition name="fade">
        <div class="image" v-if="!squeeze">
          <div class="img">
            <img src="../assets/todo.jpg" v-if="!user.image" alt="" />
            <img :src="user.image" v-if="user.image" alt="" />
          </div>
          <!-- <form
            @change="updateProfile"
            class="change-img"
            enctype="multipart/form-data"
          >
            <label for="usr-img">
              <i class="fa-solid fa-upload" v-if="!changeImg"></i>
              <input type="file" name="image" id="usr-img" />
            </label>

            <button type="submit">upload</button>
          </form> -->
        </div>
      </transition>
      <transition name="fade">
        <div class="credentials" :class="{ squeeze: squeeze }">
          <h4>profile</h4>
          <h1>{{ user.username }}</h1>
          <h3>{{ user.email }}</h3>
          <p>Dairy: {{ user.allMemories }} memories</p>
          <div class="img">
            <img src="../assets/todo.jpg" alt="" />
          </div>
          <span class="about">About</span>
          <p>
            {{ description }}
            <label for="slang"><i class="fa-solid fa-pen"></i></label>
          </p>
          <div class="slang">
            <form @submit.prevent="updateTitle()">
              <input
                type="text"
                name="description"
                id="slang"
                v-model="title"
                placeholder="edit your description or title"
                required
              />
              <button type="submit">update</button>
            </form>
          </div>
        </div>
      </transition>
    </div>
    <div class="memories" v-if="showMemories">
      <div class="blur" @click="showMemories = !showMemories"></div>
      <div class="items" v-if="!read">
        <i
          class="fa-solid fa-rectangle-xmark"
          @click="showMemories = !showMemories"
        ></i>
        <transition-group tag="ul" appear name="fade">
          <li
            v-for="(memory, index) in memoriesArr"
            :key="index.date"
            @click="readMemory(memory.name, memory.date)"
          >
            {{ memory.name }}
          </li>
        </transition-group>
      </div>
      <div class="readText" v-if="read">
        <i
          class="fa-solid fa-rectangle-xmark"
          @click="
            read = !read;
            showMemories = !showMemories;
          "
        ></i>
        <h3>{{ readMemoryDate }}</h3>
        <p>{{ readMemoryText }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive, onMounted, ref } from "vue";
export default {
  name: "Profile",
  setup() {
    const router = useRouter();
    let user = reactive({
      username: "",
      email: "",
      image: "",
      memories: 0,
      allMemories: 0,
    });

    let changeImg = ref(false);

    let user_id = ref(localStorage.getItem("accessId"));
    // let user_token = ref(localStorage.getItem("accessToken"));
    let read = ref(false);
    let memoriesArr = ref([]);
    let readMemoryText = ref("");
    let showMemories = ref(false);
    let readMemoryDate = ref("");
    let description = ref(
      "welcome to your profile . you can update your description below"
    );
    let title = ref("");
    let squeeze = ref(false);

    onMounted(() => {
      axios(`/api/todo/${user_id.value}`)
        .then((res) => {
          if (res.statusText === "OK") {
            user.username = res.data.username;
            user.email = res.data.email;
            user.allMemories = res.data.todos.length;
            if (res.data.description !== "") {
              description.value = res.data.description;
            }

            for (let i = 0; i < res.data.todos.length; i++) {
              if (res.data.todos[i].done) {
                memoriesArr.value.push(res.data.todos[i]);
              }
            }

            user.memories = memoriesArr.value.length;
          }
        })
        .catch((err) => err);
    });

    function readMemory(memory, date) {
      read.value = !read.value;
      readMemoryText.value = memory;
      readMemoryDate.value = date;
    }

    function logoutFunc() {
      localStorage.setItem("accessToken", "");
      router.push("/");
    }

    function updateTitle() {
      axios
        .post(
          `api/todo/user/${user_id.value}`,
          {
            description: title.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          description.value = title.value;
          title.value = "";

          return res;
        })
        .catch((err) => {
          return err;
        });
    }

    function updateProfile(e) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
    }

    return {
      read,
      user,
      readMemoryText,
      readMemoryDate,
      showMemories,
      memoriesArr,
      squeeze,
      title,
      description,
      changeImg,
      user_id,
      readMemory,
      updateTitle,
      updateProfile,
      logoutFunc,
    };
  },
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  background: teal;

  .main {
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 0 4px 5px rgb(1, 114, 114);

    @media screen and (max-width: 550px) {
      height: 100%;
      width: 100%;
    }
  }

  .left-main {
    width: 25%;
    height: 100%;
    background: teal;
    position: relative;

    header {
      width: 100%;
      height: 10%;
      position: absolute;
      top: 0;
      left: 0;

      h1 {
        padding: 10px;
        font: 700 23px "Grand Hotel", sans-serif;
        color: white;
        text-transform: capitalize;
      }
    }
    @media screen and (max-width: 550px) {
      width: 15%;
      display: flex;
      align-items: center;
      justify-content: center;
      header {
        position: relative;
        margin: auto;
        width: 100%;
        height: fit-content;
        h1 {
          transform: rotateZ(-90deg);
        }
      }
    }
  }

  .right-main {
    width: 75%;
    height: 100%;
    background: white;
    position: relative;

    header {
      width: 100%;
      height: 10%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;

      .menu {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        i {
          color: teal;
          font-size: 26px;
        }
      }
      .items {
        width: 75%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        a {
          color: teal;
          height: 100%;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
          text-transform: capitalize;
          font: 600 15px "Poppins", sans-serif;

          span {
            color: #e66581;
            width: 20px;
            height: 20px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 10px;
            border: 2px solid #e66581;
          }
        }
      }
    }
    @media screen and (max-width: 550px) {
      width: 85%;
      header {
        .items a {
          font-size: 12px;

          @media screen and (max-width: 410px) {
            font-size: 9px;
          }
        }
      }
    }
  }
  .right-main.squeeze {
    width: 100%;
  }

  .center-main {
    width: 80%;
    height: 60%;
    position: absolute;
    top: 20%;
    left: 10%;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .image {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 1;

      .img {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      img {
        height: 100%;
        width: auto;
        cursor: pointer;
      }

      .change-img {
        position: absolute;
        bottom: 10%;
        right: 10%;
        width: 50px;
        height: 50px;

        i {
          color: white;
          font-size: 19px;
        }
        label {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: teal;
          border-radius: 100%;
        }
        input {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          border: none;
          visibility: hidden;
          background: transparent;
        }
        button {
          width: 100%;
          height: 100%;
          background: white;
          border: none;
          border-radius: 5px;
          font-size: 12px;
        }
      }

      @media screen and (max-width: 550px) {
        width: 15%;
        img {
          display: none;
        }
      }
    }

    .credentials {
      width: 58%;
      height: 100%;
      position: relative;
      transition: all 2s ease;

      h4 {
        width: 90px;
        height: 30px;
        font: 500 12px "Poppins", sans-serif;
        color: white;
        background: rgb(133, 132, 132);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      h1 {
        padding: 10px;
        font: 600 30px "Poppins", sans-serif;
        color: teal;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      h3 {
        font: 400 15px "Nunito Sans", sans-serif;
        padding-left: 10px;
      }
      .img {
        width: 120px;
        height: 120px;
        border-radius: 100%;
        display: none;
        overflow: hidden;

        img {
          height: 100%;
          width: 0 auto;
        }
      }

      .about {
        color: teal;
        padding-left: 10px;
      }
      p {
        padding: 0 10px;
        font: 500 14px "Poppins", sans-serif;
        color: rgb(133, 132, 132);
        width: 100%;
        max-height: 60px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow-y: scroll;

        i {
          color: teal;
          font-size: 22px;
        }
      }
      .slang {
        width: 100%;
        height: fit-content;
        position: absolute;
        bottom: 0;
        left: 10px;

        form {
          width: 100%;
          height: 60px;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;

          input {
            width: 65%;
            height: 100%;
            outline: none;
            border: none;
            padding: 10px;
            background: transparent;
            box-shadow: 0 0 16px 10px rgb(224, 223, 223);
          }

          button {
            width: 35%;
            height: 100%;
            background: teal;
            color: white;
            border: none;
            box-shadow: 0 0 1px 1px teal;
            border-radius: 0 1px 1px 0;
            transform: none;
          }
        }
      }

      @media screen and (max-width: 550px) {
        width: 85%;

        .img {
          display: block;
          margin: auto;
        }
        h1,
        h3,
        h4,
        .about,
        p {
          padding-left: 0;
        }

        h1 {
          font-size: 20px;

          @media screen and (max-width: 350px) {
            font-size: 16px;
          }
        }
        .slang {
          left: 0;
        }
      }
    }
    .credentials.squeeze {
      width: 100%;
    }

    @media screen and (max-width: 550px) {
      height: 83%;
      top: 15%;
      // left: 0;
    }
  }

  .memories {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .blur {
      opacity: 0.3;
    }

    .items {
      width: 90%;
      height: 90%;
      background: white;
      padding: 10px;
      z-index: 1;
      border-radius: 10px;

      i {
        color: #e66581;
        font-size: 30px;
      }

      ul {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        overflow: hidden;
        overflow-y: scroll;

        li {
          width: 220px;
          height: 200px;
          border-radius: 5px;
          padding: 10px;
          margin: 10px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          list-style-type: none;
          background: linear-gradient(
            to bottom,
            rgb(55, 220, 193),
            rgb(3, 160, 160)
          );
          text-align: center;
        }
      }
    }
    .readText {
      width: 90%;
      padding: 20px;
      height: fit-content;
      background: white;
      border-radius: 7px;
      z-index: 1;

      i {
        color: #e66581;
        font-size: 33px;
      }

      h3 {
        padding: 10px;
        color: teal;
      }

      p {
        padding: 10px;
        font-size: 14px;
      }
    }
  }
}
</style>
