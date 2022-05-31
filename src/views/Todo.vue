<template>
  <div class="main">
    <div class="content">
      <div class="todo-container">
        <h1 id="text-run">
          {{ profile.profileName }}'s Dairy<i class="far fa-heart"></i>
        </h1>
        <textarea
          type="text"
          id="inputItem"
          v-model="userData"
          name="text"
          placeholder="input new todo item"
          @keyup="invalidTask = false"
          required
        ></textarea>
        <div class="addItem">
          <span
            ><i
              class="fa-solid fa-magnifying-glass laugh"
              title="Search task(s)"
              @click="
                search.val = !search.val;
                edit.val = false;
              "
            ></i>
            <i
              class="fa-regular fa-address-book laugh"
              title="All tasks"
              @click="displayTodo()"
            ></i
          ></span>
          <button @click="addTodo()">add todo item</button>
        </div>
        <transition name="fade">
          <div class="errorDiv">
            <div class="blur"></div>

            <form
              @submit.prevent="updateTask(edit.num, edit.task)"
              class="edit-form"
              id="edit-form"
              v-if="edit.val"
            >
              <input
                type="hidden"
                v-model="edit.num"
                class="task-id"
                required
              />
              <textarea
                type="text"
                name="edit"
                id="edit"
                placeholder="Edit task here...."
                v-model="edit.task"
                required
              ></textarea>
              <button type="submit">
                <i class="far fa-edit edit" title="Edit task..."></i>
              </button>
            </form>
            <button
              @click="
                edit.val = false;
                search.val = false;
              "
              v-if="edit.val"
              title="close task editing"
            >
              close
            </button>
          </div>
        </transition>
        <transition name="fade">
          <p id="error" class="py-3" v-if="invalidTask">
            please add a valid task ❣️KCN❣️
          </p>
        </transition>
        <transition name="fade">
          <div class="errorDiv" v-if="search.val">
            <div class="blur"></div>
            <form
              @submit.prevent="searchTask(search.task)"
              class="edit-form"
              id="edit-form"
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
                v-model="search.task"
                required
              />
              <button type="submit">
                <i
                  class="fa-solid fa-magnifying-glass edit"
                  title="Search task(s)"
                ></i>
              </button>
            </form>
            <button
              @click="
                edit.val = false;
                search.val = false;
              "
              v-if="search.val"
              title="close task editing"
            >
              close
            </button>
          </div>
        </transition>
        <div class="todoItems">
          <transition-group tag="ul" appear name="fade">
            <li
              :class="{ done: todo.done }"
              v-for="(todo, index) in todoItems"
              :key="index"
            >
              <div class="item">
                <p @click="readTask(todo.name, todo.date)">{{ todo.date }}</p>

                <p
                  class="content"
                  :title="todo.name"
                  @click="readTask(todo.name, todo.date)"
                >
                  {{ todo.name }}
                </p>
                <p @click="readTask(todo.name, todo.date)">
                  <span>Read</span>
                </p>
              </div>
              <div class="icons">
                <button @click="editTask(index, todo.name)">
                  <i class="far fa-edit edit" title="Edit task!"></i>
                </button>
                <input
                  type="checkbox"
                  name="done"
                  v-model="todo.done"
                  class="taskStatus"
                  @change="addStatus(index)"
                  title="check task!"
                />
                <i
                  class="fa fa-trash"
                  @click="removeTask(index)"
                  style="color: white; font-size: 1.2em"
                ></i>
              </div>
            </li>
          </transition-group>
        </div>
        <p id="pending">
          you have <span id="count">{{ todoCount }}</span
          >pending tasks
        </p>
        <button id="reset" @click="removeAllTodos()">clear all todos</button>
      </div>
    </div>

    <img src="../assets/list.svg" id="pic" alt="" />
    <transition name="appear">
      <div class="read-task" v-if="read">
        <div class="blur" @click="read = !read"></div>
        <div class="read-content">
          <i class="fa-solid fa-rectangle-xmark" @click="read = !read"></i>

          <p>
            {{ profile.profileName }} <br />
            {{ profile.profileEmail }}
          </p>
          <h3>Was written on:{{ taskDate }}</h3>
          <p>{{ popTask }}</p>
        </div>
      </div>
    </transition>
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

    let search = reactive({
      task: "",
      val: false,
    });

    const todo = ref("");
    const todoCount = ref(0);
    const invalid = ref(false);
    let todoItems = ref([]);
    let isDone = ref(false);
    let status = ref(false);
    let username = ref("");
    let password = ref("");
    let getFromLocalStorage = localStorage.getItem("accessId");
    let token_id = ref("");
    let response = ref(false);
    let confirmation = ref(false);
    let read = ref(false);
    let popTask = ref("");
    let taskDate = ref("");

    onMounted(() => {
      if (getFromLocalStorage == null) {
        token_id.value = "";
      } else {
        token_id.value = getFromLocalStorage;
      }

      displayTodo();
    });

    const displayTodo = async () => {
      try {
        await axios("api/todo/" + `${token_id.value}`)
          .then(async (res) => {
            todoItems.value = await res.data.todos;

            todoCount.value = todoItems.value.length;
            profile.profileName = res.data.username;
            profile.profileEmail = res.data.email;
          })
          .catch((err) => err);
      } catch (err) {
        return err;
      }
    };

    /**
     * function that updates the todos
     */
    const updateData = async (data, id) => {
      try {
        await axios
          .post(
            "api/todo/" + `${id}`,
            {
              data,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            displayTodo();
            return res;
          })
          .catch((err) => {
            return err;
          });
      } catch (err) {
        return err;
      }
    };

    /**
     * creating a function that adds a new todo item
     */
    const addTodo = () => {
      parseData.value.name = userData.value;
      parseData.value.date = new Date();
      parseData.value.done = false;
      displayTodo();

      if (userData.value.trim().length !== 0 && userData.value !== "") {
        axios("api/todo/" + `${token_id.value}`)
          .then(async (res) => {
            todoItems.value.push(parseData.value);
            await updateData(todoItems.value, res.data._id);
          })
          .catch((err) => err);

        userData.value = "";
        invalidTask.value = false;
      } else {
        invalidTask.value = true;
      }

      todoCount.value = todoItems.value.length;
    };

    /**
     * function that deletes all todo tasks
     */
    const removeAllTodos = () => {
      axios("api/todo/" + `${token_id.value}`).then(async (res) => {
        if (
          window.confirm(
            "Are you sure you want to delete all tasks? \n this action is irreversible"
          )
        ) {
          todoItems.value = [];
          await updateData(todoItems.value, res.data._id);
          return;
        }
        await displayTodo();
      });
    };

    /**
     * function that removes a single task
     */
    const removeTask = (index) => {
      axios("api/todo/" + `${token_id.value}`)
        .then(async (res) => {
          if (todoItems.value[index].done) {
            if (window.confirm("Do you want to delete this task?")) {
              todoItems.value = await res.data.todos;
              todoItems.value.splice(index, 1); //detete that item you've choosen
            }

            await updateData(todoItems.value, res.data._id);
            return;
          }
          if (
            window.confirm(
              "Do you want to delete this task? the task is not completed "
            )
          ) {
            todoItems.value = await res.data.todos;
            todoItems.value.splice(index, 1); //detete that item you've choosen
            await updateData(todoItems.value, res.data._id);
            return;
          }
          await updateData(todoItems.value, res.data._id);
        })
        .then((err) => err);
    };

    /**
     * funtion that adds the status done to a todo task
     */
    const addStatus = (index) => {
      axios("api/todo/" + `${token_id.value}`).then(async (res) => {
        todoItems.value = res.data.todos;
        if (!todoItems.value[index].done) {
          if (
            window.confirm(
              `Do you want to mark task ${index + 1} as completed?`
            )
          ) {
            todoItems.value[index].done = true;
            isDone.value = true;
          }

          await updateData(todoItems.value, res.data._id);
        }
      });
    };

    /**
     * creating a function that will edit a todo task
     */
    let edit = reactive({
      task: "",
      val: false,
      num: 0,
    });

    const editTask = (index, taskToEdit) => {
      edit.task = taskToEdit;
      edit.val = true;
      edit.num = index;
      search.val = false;
      displayTodo();
    };

    /**
     * function that edits a single task
     */
    const updateTask = async (id, value) => {
      todoItems.value[id].name = value;
      isDone.value = true;
      await updateData(todoItems.value, token_id.value);
      edit.val = false;
      return;
    };

    const searchTask = (task) => {
      axios("api/todo/" + `${token_id.value}`)
        .then((res) => {
          let searchList = ref([]);
          task = task.toLowerCase();
          for (let i = 0; i < res.data.todos.length; i++) {
            if (res.data.todos[i].name.includes(task)) {
              searchList.value.push(res.data.todos[i]);
            }
          }
          search.task = "";
          todoItems.value = searchList.value;
          search.val = false;
          todoCount.value = todoItems.value.length;
        })
        .catch((err) => err);
    };

    const readTask = (task, date) => {
      read.value = true;
      popTask.value = task;
      taskDate.value = date;
    };

    return {
      edit,
      taskDate,
      valid,
      isDone,
      invalid,
      username,
      password,
      invalidTask,
      userData,
      response,
      confirmation,
      status,
      todoCount,
      todoItems,
      profile,
      todo,
      search,
      read,
      popTask,
      searchTask,
      addStatus,
      updateTask,
      editTask,
      removeTask,
      removeAllTodos,
      addTodo,
      displayTodo,
      readTask,
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
$col: #3d566f;

.main {
  width: 100%;
  height: fit-content;
  background: rgb(212, 216, 228);
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  #pic {
    width: 10%;
    height: auto;
    position: fixed;
    right: 3%;
    top: 20%;
  }
  .content {
    width: 98%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    position: relative;
    .todo-container {
      position: relative;
      width: 100%;
      height: fit-content;
      background: transparent;
      padding: 10px;
      overflow-y: scroll;
      z-index: 1;

      h1 {
        text-transform: capitalize;
        font-size: 35px;
        font-weight: 600;
        font-family: "Poppins", sans-serif;
        padding: 20px;
        color: $secondaryCol;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: fit-content;
        width: 100%;
        position: relative;

        background: linear-gradient(to bottom, $col, teal);
        font-weight: 600;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        i {
          margin-right: 6%;
          color: $secondaryCol;
          cursor: progress;
          font-size: 30px;
        }
      }

      #inputItem {
        width: 90%;
        height: 50px;
        margin: auto;
        display: block;
        padding: 10px 10px 3px 10px;
        outline: none;
        border: none;
        background: transparent;
        border-bottom: 2px solid teal;
      }

      .addItem {
        width: 90%;
        height: fit-content;
        display: flex;
        margin: 15px auto;
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

            &:hover {
              color: $secondaryCol;
            }

            &:active {
              transform: scale(0.8);
            }
          }
          @media screen and (max-width: 768px) {
            width: 50%;
            margin: 10px auto;
            .laugh {
              position: relative;
              left: 0;
              justify-content: center;
            }
          }
        }

        @media screen and (max-width: 768px) {
          flex-direction: column-reverse;
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
        background: linear-gradient(to bottom, rgb(55, 220, 193), teal);
        color: white;
        text-transform: capitalize;
        transition: all 0.4s ease;
        cursor: pointer;

        @media screen and (max-width: 768px) {
          width: 100%;
          display: block;
          margin: 1% auto;
        }

        &:hover {
          background: rgb(2, 155, 155);
        }

        &:active {
          transform: scale(0.8);
        }
      }

      .errorDiv {
        width: 90%;
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

          #edit,
          #search {
            width: 100%;
            height: 50px;
            padding: 2px 10px 2px 16px;
            outline: none;
            border: none;
            text-transform: lowercase;
            background: transparent;
            border-bottom: 2px solid teal;
          }
          button {
            width: 10%;
            height: 50px;
            padding: 2px 0;
            border: none;
            display: block;
            border-radius: 0 3px 3px 0;
            background: transparent;
            cursor: pointer;

            .edit {
              color: $secondaryCol;
              font-size: 23px;
            }
          }
        }
        #error {
          font-size: 12px;
          color: rgba(231, 16, 16, 0.938);
          text-align: center;
          margin: 0 auto;
          cursor: pointer;
        }
      }

      .todoItems {
        width: 100%;
        max-height: 600px;
        margin: 5px auto;
        padding: 10px 0;
        overflow-y: scroll;

        ul {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0 auto;
          overflow: hidden;
          overflow-y: scroll;
          background: transparent;
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          &::-webkit-scrollbar {
            background: transparent;
            width: 5px;
          }

          li {
            width: 200px;
            height: 190px;
            margin: 5px;
            padding: 5px;
            list-style-type: none;
            font-size: 15px;
            border-radius: 8px;
            display: block;
            text-transform: capitalize;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            background: $white;

            .item {
              width: 100%;
              height: 100%;
              p {
                cursor: pointer;
                font-size: 15px;
                width: 95%;
                height: 15%;
                padding: 2px 10px;
                margin: 0 auto;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                overflow: hidden;
                white-space: pre-line;
                text-overflow: ellipsis;
                transition: all 0.3s ease;
                font-size: 10px;

                span {
                  position: relative;
                }
              }

              .content {
                align-items: flex-start;
                font-size: 13px;
                height: 63%;
                padding: 5px;
              }
            }
            .icons {
              width: 100%;
              height: 20%;
              position: absolute;
              right: 0;
              bottom: -21%;
              background: teal;
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-radius: 0 0 8px 8px;
              transition: all 0.3s ease;
              cursor: pointer;
              padding: 0 15px;

              button {
                background: none;
                width: fit-content;
                height: fit-content;
                cursor: pointer;
                outline: none;
                border: none;
                background: transparent;
              }

              i {
                font-size: 19px;
                color: white;
                cursor: pointer;
                transition: all 0.5s ease;

                &:active {
                  transform: scale(0.8);
                }
              }

              .taskStatus {
                width: 20px;
                height: 20px;
                border: none;
                display: block;
                margin: 0 5px;
                margin-left: 0;
                box-shadow: 0 0 2px 1px whitesmoke;
                outline: none;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s ease;

                &:checked {
                  display: block;
                  background: teal;
                }
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

            &:hover {
              .item {
                height: 80%;
                display: block;
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;
              }
              .icons {
                bottom: 0;
              }
            }

            @media screen and (max-width: 975px) {
              width: 300px;

              @media screen and (max-width: 700px) {
                width: 48%;

                @media screen and (max-width: 450px) {
                  width: 95%;
                  margin: 10px auto;
                }
              }
            }
          }

          li.done {
            background: $tertiaryCol;
            background: linear-gradient(
              to bottom,
              rgb(55, 220, 193),
              rgb(3, 160, 160)
            );

            .content {
              // text-decoration: line-through;
              flex-direction: column;

              &::before {
                content: "Important:";
                text-decoration: none;
                font-size: 1.1em;
                color: white;
                font-family: "Grand Hotel", cursive;
                display: block;
              }
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

    @media screen and (max-width: 600px) {
      width: 100%;
      padding: 0;

      .todo-container {
        width: 100%;

        h1 {
          font-size: 20px;
        }
      }
    }
  }

  .response-div {
    width: 100%;
    height: 88vh;
    position: fixed;
    left: 0;
    bottom: 0;
    background: rgb(45, 45, 45);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .response {
      width: 500px;
      height: 300px;
      border-radius: 5px;
      background: white;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      i {
        color: teal;
        font-size: 40px;
      }

      p {
        width: 90%;
        margin: 0 auto;
        white-space: pre-wrap;
        text-align: center;
        color: teal;
        font: 600 19px "Poppins", sans-serif;
      }

      .buttons {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        button {
          width: 200px;
          height: 50px;
          border-radius: 5px;
          background: teal;
          color: white;
          text-transform: capitalize;
          margin: 10px auto;
          border: none;

          &:last-child {
            background: crimson;
          }
        }
      }
    }
  }

  button:active {
    transform: scale(0.8);
  }
}

.read-task,
.errorDiv {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .blur {
    background: rgb(60, 60, 60);
    opacity: 0.3;
  }

  form,
  button {
    z-index: 1;
  }

  .read-content {
    width: 80%;
    height: auto;
    padding: 20px;
    background: white;
    border-radius: 7px;
    z-index: 1;

    i {
      font-size: 30px;
      color: crimson;
      cursor: pointer;
    }

    h3 {
      color: teal;
      font: 500 16px "Poppins", sans-serif;
      padding: 5px;
    }

    p {
      line-height: 23px;
      font: 400 15px "Poppins", sans-serif;
      padding: 5px;
    }

    @media screen and (max-width: 768px) {
      width: 95%;
    }
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
