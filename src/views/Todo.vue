<template>
  <div class="main">
    <!-- <div class="todo-head">
      <div>
        <img src="../assets/list.svg" alt="DAIRY" />
      </div>
      <h1>
        welcome <br />
        {{ profile.profileName }}
      </h1>
      <h2>
        you Have<span>{{ todoCount }}</span
        >pending task(s)
      </h2>
      <h2>fullstack web developer</h2>
      <h2>{{ profile.profileEmail }}</h2>
      <h3>💔 in Christ alone❣️</h3>
    </div> -->
    <div class="content">
      <div class="todo-container">
        <h1 id="text-run">KCN's Dairy<i class="far fa-heart"></i></h1>
        <textarea
          type="text"
          id="inputItem"
          v-model="userData"
          name="text"
          placeholder="input new todo item"
          required
        ></textarea>
        <div class="addItem">
          <span><i class="far fa-laugh laugh"></i></span>
          <button @click="addTodo()">add todo item</button>
        </div>
        <div class="errorDiv">
          <form
            @submit.prevent="updateTask(index)"
            class="edit-form"
            v-if="edit.val"
          >
            <input type="hidden" v-model="edit.task_id" class="task-id" />
            <textarea
              type="text"
              name="edit"
              id="edit"
              placeholder="Edit task here...."
              v-model="edit.task"
            ></textarea>
            <button type="submit">
              <i class="far fa-edit edit" title="Edit task..."></i>
            </button>
          </form>
          <p id="error" class="py-3" v-if="invalidTask">
            please add a valid task ❣️KCN❣️
          </p>
        </div>

        <div class="todoItems">
          <ul>
            <li
              :class="{ done: todo.done }"
              v-for="(todo, index) in todoItems"
              :key="index"
            >
              <p>
                <button @click="editTask(index, todo.name)">
                  <i class="far fa-edit edit" title="Edit task!"></i>
                </button>

                {{ todo.date }}
              </p>

              <p class="content" :title="todo.name">
                <input
                  type="checkbox"
                  name="done"
                  v-model="todo.done"
                  class="taskStatus"
                  @change="addStatus(index)"
                  title="check task!"
                />
                {{ todo.name }}
              </p>
              <span @click="removeTask(index)" title="Delete task">
                <i
                  class="fa fa-trash"
                  style="color: white; font-size: 1.2em"
                ></i>
              </span>
            </li>
          </ul>
        </div>
        <p id="pending">
          you have <span id="count">{{ todoCount }}</span
          >pending tasks
        </p>
        <button id="reset" @click="removeAllTodos()">clear all todos</button>
      </div>
    </div>
    <img src="../assets/list.svg" id="pic" alt="" />
  </div>
</template>

<script>
// import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { ref, reactive } from "vue";
import axios from "axios";
export default {
  name: "Todo",

  setup() {
    // const router = useRouter();
    // const route = useRoute();

    let profile = reactive({
      profileName: "",
      profileEmail: "",
    });

    let valid = ref(false);
    const invalidTask = ref(false);
    const userData = ref("");

    const parseData = ref({
      name: "",
      date: ``,
      done: false,
    });

    const todo = ref("");
    const todoCount = ref(0);
    const invalid = ref(false);
    let todoItems = ref([]);
    let isDone = ref(false);
    let status = ref(false);
    let username = ref("");
    let password = ref("");
    let getFromLocalStorage = localStorage.getItem("token");
    let token_id = ref("");

    // let   = {
    //   headers: {
    //     Authorization: `Bearer ${res.token}`,
    //   },
    // };

    /**
     * creating a funtion that will display the todo items
     *
     */

    onMounted(() => {
      if (getFromLocalStorage == null) {
        token_id.value = "";
        console.log("in the if section");
      } else {
        token_id.value = JSON.parse(getFromLocalStorage);
        console.log(token_id.value);
      }

      displayTodo(token_id.value);
      console.log("this page has just been mounted with an id...", token_id);
    });

    const displayTodo = async (id) => {
      try {
        await axios("http://localhost:9001/user/" + `${id}`)
          .then(async (res) => {
            console.log(res);

            todoItems.value = await res.data.todos;

            todoCount.value = todoItems.value.length;
            profile.profileName = res.data.username;
            profile.profileEmail = res.data.email;
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }

      // getFromLocalStorage = localStorage.getItem("new todo");
      // if (getFromLocalStorage == null) {
      //   todoItems.value = [];
      // } else {
      //   todoItems.value = JSON.parse(getFromLocalStorage);
      // }
      // todoCount.value = todoItems.value.length;
    };

    /**
     * function that updates the todos
     */
    const updateData = async (data, id) => {
      try {
        await axios
          .post(
            "http://localhost:9001/user/" + `${id}`,
            {
              data,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(async (res) => {
            await displayTodo(res.data._id);
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    };

    /**
     * creating a function that adds a new todo item
     */
    const addTodo = async () => {
      try {
        parseData.value.name = userData.value;
        parseData.value.date = new Date();
        parseData.value.done = false;

        if (userData.value.trim().length !== 0 && userData.value !== "") {
          // if (getFromLocalStorage == null) {
          //   todoItems.value = [];
          // } else {
          //   todoItems.value = JSON.parse(getFromLocalStorage); //coverting the string into json object
          // }

          await axios(
            "http://localhost:9001/user/" + `${token_id.value}` /*, {
            headers: {
              Authorization: `Bearer ${res.token}`,
            },
          }*/
          ).then(async (res) => {
            console.log(res);

            todoItems.value.push(parseData.value);
            await updateData(todoItems.value, res.data._id);
          });

          // localStorage.setItem("new todo", JSON.stringify(todoItems.value)); //transforming the json object into string

          // axios
          //   .post(
          //     "http://localhost:9001/user/data/" + "623b80a685b4097d966cfac5",
          //     {
          //       todoItems,
          //     },
          //     {
          //       headers: {
          //         "Content-Type": "application/json",
          //       },
          //     }
          //   )
          //   .then((res) => {
          //     console.log(res);
          //   })
          //   .catch((err) => console.log(err));

          userData.value = "";
          invalidTask.value = false;
        } else {
          invalidTask.value = true;
        }

        todoCount.value = todoItems.value.length;
      } catch (err) {
        console.log(err);
      }
    };

    /**
     * function that deletes all todo tasks
     */
    const removeAllTodos = async () => {
      try {
        // todoItems.value = JSON.parse(getFromLocalStorage);
        // todoItems.value = [];
        // localStorage.setItem("new todo", JSON.stringify(todoItems.value)); //updating the local storage
        // todoItems = await getData().todos;
        // let id = await getData().id;

        await axios("http://localhost:9001/user/" + `${token_id.value}`).then(
          async (res) => {
            console.log(res);
            if (window.confirm("Are you sure you want to delete all items??")) {
              todoItems.value = [];
              await updateData(todoItems.value, res.data._id);
              return;
            }
            await displayTodo(res.data._id);
          }
        );
      } catch (err) {
        console.log(err);
      }
    };

    /**
     * function that removes a single task
     */
    const removeTask = async (index) => {
      try {
        console.log(index);
        // getFromLocalStorage = localStorage.getItem("new todo");
        // todoItems.value = JSON.parse(getFromLocalStorage);
        // await getData();
        // localStorage.setItem("new todo", JSON.stringify(todoItems.value)); //updating the local storage after deleting as item

        await axios("http://localhost:9001/user/" + `${token_id.value}`).then(
          async (res) => {
            console.log(res);

            if (!todoItems.value[index].done) {
              if (
                window.confirm(
                  `Are you sure you want to delete item ${
                    index + 1
                  }? You're not done with it yet`
                )
              ) {
                todoItems.value = await res.data.todos;
                todoItems.value.splice(index, 1); //detete that item you've choosen
                console.log(todoItems.value.indexOf(index));

                await updateData(todoItems.value, res.data._id);
                return;
              }
              await displayTodo(res.data._id);
              return;
            }
            if (
              window.confirm(
                `Are you sure you want to delete item ${index + 1}?`
              )
            ) {
              todoItems.value = await res.data.todos;
              todoItems.value.splice(index, 1); //detete that item you've choosen
              console.log(todoItems.value.indexOf(index));

              await updateData(todoItems.value, res.data._id);
              return;
            }
          }
        );
      } catch (err) {
        console.log(err);
      }
    };

    /**
     * funtion that adds the status done to a todo task
     */
    const addStatus = async (index) => {
      try {
        // getFromLocalStorage = localStorage.getItem("new todo");
        // todoItems.value = JSON.parse(getFromLocalStorage);
        await axios("http://localhost:9001/user/" + `${token_id.value}`).then(
          async (res) => {
            console.log(res);
            todoItems.value = res.data.todos;
            if (!todoItems.value[index].done) {
              if (window.confirm(`Are you done with with item ${index + 1}`)) {
                todoItems.value[index].done = true;
                isDone.value = true;

                await updateData(todoItems.value, res.data._id);
                return;
              }
              await displayTodo(res.data._id);
              return;
            }

            // localStorage.setItem("new todo", JSON.stringify(todoItems.value));
          }
        );
      } catch (err) {
        console.log(err);
      }
    };

    /**
     * creating a function that will edit a todo task
     */
    let edit = reactive({
      task: "",
      val: false,
    });

    const editTask = (index, taskToEdit) => {
      edit.task = `T${index + 1}` + ":" + taskToEdit;
      edit.val = true;
      console.log(index);
      console.log(taskToEdit);
      console.log(edit.task);
    };

    /**
     * function that edits a single task
     */
    const updateTask = async () => {
      let numAt = edit.task;
      let task_id = parseInt(numAt.charAt(1)) - 1;
      alert(task_id);
      edit.val = false;
    };

    return {
      edit,
      valid,
      isDone,
      invalid,
      username,
      password,
      invalidTask,
      userData,
      addStatus,
      status,
      todoCount,
      todoItems,
      profile,
      todo,
      updateTask,
      editTask,
      removeTask,
      removeAllTodos,
      addTodo,
      displayTodo,
    };
  },
};
</script>

<style lang="scss" scoped>
$primaryCol: rgb(201, 219, 253);
$white: white;
$whiteBorder: rgb(238, 238, 238);
$secondaryCol: teal;
$tertiaryCol: rgb(193, 248, 193);

#pic {
  width: 500px;
  z-index: 0.6;
}

.main {
  width: 85vw;
  min-height: 100vh;
  // padding-top: 10vh;
  float: right;
  background: linear-gradient(
    to top,
    rgba(21, 122, 253, 0.685) 0%,
    rgba(171, 250, 171, 0.623) 40%,
    rgba(20, 164, 212, 0.877) 100%
  );
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  // .todo-head {
  //   width: 25vw;
  //   height: 75vh;
  //   background: black;
  //   position: fixed;
  //   top: 17vh;
  //   right: 5vw;
  //   border-radius: 10px;
  //   animation: profile 20s 1 linear alternate forwards;

  //   @media screen and (max-width: 850px) {
  //     width: 30vw;
  //   }

  //   div {
  //     width: 100%;
  //     height: 50%;
  //     background: white;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;

  //     img {
  //       width: 50%;
  //       // border-radius: 50%;
  //       z-index: 1;
  //       display: block;
  //       position: relative;
  //       animation: nameimg 5s infinite linear alternate forwards;
  //     }
  //   }

  //   h1,
  //   h2,
  //   h3 {
  //     color: #d3d1d1;
  //     text-align: center;
  //     font-size: 15px;
  //     padding: 6px;
  //     text-transform: capitalize;
  //     font-weight: 300;
  //     span {
  //       color: red;
  //       padding: 0 4px;
  //       font: 600 17px "Russo One", sans-serif;
  //     }

  //     @media screen and (max-width: 768px) {
  //       font-size: 12px;
  //     }
  //   }

  //   h2 {
  //     font-size: 12px;
  //   }

  //   @media screen and (max-width: 1000px) {
  //     display: none;
  //   }
  // }

  .content {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    .todo-container {
      position: relative;
      z-index: 0.9;
      left: 100px;
      width: 480px;
      height: fit-content;
      background: $white;
      box-shadow: 0 0 1px 2px $white;
      border-radius: 5px;
      padding: 20px;

      h1 {
        text-transform: capitalize;
        font-size: 25px;
        font-weight: 600;
        padding: 12px 3px;
        color: $secondaryCol;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: fit-content;
        width: 100%;
        position: relative;

        &::before {
          content: "";
          width: 170px;
          height: 26px;
          background: white;
          position: absolute;
          left: 0;
          animation: text-run 4s steps(10, end) infinite;
        }

        i {
          margin-right: 6%;
          color: $secondaryCol;
          cursor: progress;
        }
      }

      @keyframes text-run {
        to {
          left: 170px;
        }
      }

      #inputItem {
        width: 100%;
        height: 85px;
        margin: auto;
        display: block;
        padding: 10px;
        outline: none;
        border: none;
        border-radius: 3px;
        background: rgb(240, 239, 239);
        box-shadow: 0 0 2px 0.3px $whiteBorder;
      }

      .addItem {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        span {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 20%;
          height: 45px;
          .laugh {
            font-size: 35px;
            margin: 10px 10%;
            color: $secondaryCol;
            cursor: pointer;
            transition: all 0.3s ease;

            @media screen and (max-width: 768px) {
              position: relative;
              left: 100%;
              justify-content: center;
            }

            &:hover {
              color: $secondaryCol;
            }

            &:active {
              animation: laugh 2s infinite linear alternate forwards;
            }

            @keyframes laugh {
              0% {
                opacity: 0;
              }

              100% {
                opacity: 1;
              }
            }
          }
        }
      }
      button {
        width: 40%;
        height: 45px;
        float: right;
        padding: 5px;
        margin: 10px 0;
        border-radius: 3px;
        border: none;
        background-color: $secondaryCol;
        color: white;
        text-transform: capitalize;
        transition: all 0.4s ease;
        cursor: pointer;

        @media screen and (max-width: 768px) {
          width: 100%;
          display: block;
          margin: 1% 5%;
        }

        &:hover {
          background: rgb(2, 155, 155);
        }

        &:active {
          transform: scale(0.8);
        }
      }

      .errorDiv {
        width: 100%;
        height: fit-content;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 2px;

        form {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          box-shadow: 0 0 2px 1px $whiteBorder;

          #edit {
            width: 90%;
            height: fit-content;
            padding: 2px 10px 2px 16px;
            outline: none;
            border: none;
            background: transparent;
            // box-shadow: 0 0 2px 1px $whiteBorder;
            border-radius: 3px 0 0 3px;
          }
          button {
            width: 10%;
            height: 100%;
            // box-shadow: 0 0 2px 1px $whiteBorder;
            padding: 2px 0;
            border: none;
            display: block;
            border-radius: 0 3px 3px 0;
            background: $primaryCol;
            cursor: pointer;

            .edit {
              color: $secondaryCol;
              font-size: 16px;
            }
          }
        }
        #error {
          font-size: 12px;
          color: rgba(231, 16, 16, 0.938);
          text-align: center;
          margin: 0 auto;
          cursor: pointer;

          // @media screen and (max-width: 768px) {
          //   position: relative;
          //   margin: 3% 0 -2% 0;
          //   height: 40px;
          //   width: 90%;
          // }
        }
      }

      .todoItems {
        width: 100%;
        height: 200px;
        margin: 3% auto;
        margin-bottom: 0;
        border-radius: 10px;

        ul {
          width: 100%;
          height: 200px;
          padding: 0;
          margin: 0 auto;
          overflow: hidden;
          overflow-y: scroll;
          background: $primaryCol;
          border: 3px solid $primaryCol;
          border-right: none;
          border-left: none;

          &::-webkit-scrollbar {
            background: $primaryCol;
            width: 6px;
          }

          &::-webkit-scrollbar-thumb {
            background: $secondaryCol;
          }

          li {
            width: 98%;
            height: fit-content;
            margin: 5px auto;
            margin-top: 0;
            padding: 2px 0;
            list-style-type: none;
            font-size: 15px;
            border-radius: 2px;
            display: block;
            text-transform: capitalize;
            position: relative;
            transition: all 0.3s ease;
            background: $white;
            box-shadow: 0 0 1px 1px $whiteBorder;

            &:last-child {
              margin-bottom: 0;
            }

            span {
              width: 15%;
              height: 100%;
              position: absolute;
              right: -20%;
              top: 0;
              background: #e74c3c;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.3s ease;
              cursor: pointer;

              i {
                border-radius: 5px;
                font-size: 26px;
                color: white;
                cursor: pointer;
                transition: all 0.5s ease;

                &:active {
                  transform: scale(0.7);
                }
              }
            }

            &:hover {
              span {
                right: 0;
              }
            }

            i {
              font-size: 26px;
              color: white;
              cursor: pointer;
              transition: all 0.5s ease;

              &:active {
                transform: scale(0.7);
              }
            }

            p {
              cursor: pointer;
              font-size: 15px;
              width: 90%;
              height: fit-content;
              padding: 2px 10px;
              margin: 0;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              transition: all 0.3s ease;
              &:nth-child(odd) {
                font-size: 10px;
              }

              .taskStatus {
                width: 20px;
                height: 20px;
                border: none;
                display: block;
                margin: 0 5px;
                margin-left: 0;
                box-shadow: 0 0 1px 1px $primaryCol;
                outline: none;
                cursor: pointer;
                transition: all 0.3s ease;
                &:hover {
                  border-radius: 100%;
                }

                &:checked {
                  display: block;
                }
              }
              button {
                background: none;
                width: fit-content;
                height: fit-content;
                cursor: pointer;
                outline: none;
                margin: 0;

                .edit {
                  font-size: 13px;
                  color: $secondaryCol;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  &:hover {
                    transform: scale(0.8);
                  }
                }
              }
            }

            &:hover {
              height: fit-content;

              .content {
                width: 81%;
                height: fit-content;
                overflow: scroll;
                display: block;
                position: relative;
                overflow-x: hidden;
                white-space: pre-wrap;
                text-overflow: unset;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                word-break: break-all;
                font-size: 0.8em;
              }
            }
          }

          li.done {
            background: $tertiaryCol;

            .content {
              text-decoration: line-through;
            }
          }
        }
      }

      #pending {
        text-align: center;
        padding: 3px;
        margin: 0 auto;
        text-transform: capitalize;

        #count {
          padding: 0 5px;
          color: red;
        }
      }

      #reset {
        width: 100%;
        height: 45px;
        margin: 1% auto;
        text-align: center;
      }
    }
  }

  button:active {
    transform: scale(0.8);
  }
}

.main.show-main {
  display: flex;
  position: relative;
  animation: show 2s 1 linear alternate-reverse forwards;
}

@keyframes show {
  0% {
    top: -75vh;
  }

  100% {
    top: -10vh;
  }
}
</style>
