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

        <div class="errorDiv">
          <transition name="fade">
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
          </transition>
          <transition name="fade">
            <button
              @click="edit.val = false"
              v-if="edit.val"
              title="close task editing"
            >
              close
            </button>
          </transition>
          <transition name="fade">
            <p id="error" class="py-3" v-if="invalidTask">
              please add a valid task ❣️KCN❣️
            </p>
          </transition>
        </div>
        <div class="errorDiv">
          <transition name="fade">
            <form
              @submit.prevent="searchTask(search.task)"
              class="edit-form"
              id="edit-form"
              v-if="search.val"
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
          </transition>
          <transition name="fade">
            <button
              @click="edit.val = false"
              v-if="search.val"
              title="close task editing"
            >
              close
            </button>
          </transition>
        </div>

        <div class="todoItems">
          <transition-group tag="ul" appear name="fade">
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
    let getFromLocalStorage = localStorage.getItem("codingheraldtokenid");
    let token_id = ref("");
    let response = ref(false);
    let confirmation = ref(false);

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
        await axios("api/user/" + `${token_id.value}`)
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
            "api/user/" + `${id}`,
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

      if (userData.value.trim().length !== 0 && userData.value !== "") {
        axios("api/user/" + `${token_id.value}`)
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
      axios("api/user/" + `${token_id.value}`).then(async (res) => {
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
      axios("api/user/" + `${token_id.value}`)
        .then(async (res) => {
          if (todoItems.value[index].done) {
            todoItems.value = await res.data.todos;
            todoItems.value.splice(index, 1); //detete that item you've choosen
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
      axios("api/user/" + `${token_id.value}`).then(async (res) => {
        todoItems.value = res.data.todos;
        if (!todoItems.value[index].done) {
          todoItems.value[index].done = true;
          isDone.value = true;

          await updateData(todoItems.value, res.data._id);
          return;
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
      axios("api/user/" + `${token_id.value}`)
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

    return {
      edit,
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
      searchTask,
      addStatus,
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
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    position: relative;
    .todo-container {
      position: relative;
      width: 95%;
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
        width: 100%;
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
        width: 100%;
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
          &::-webkit-scrollbar {
            background: transparent;
            width: 5px;
          }

          li {
            width: 100%;
            height: fit-content;
            margin: 10px auto;
            padding: 5px 3px;
            list-style-type: none;
            font-size: 15px;
            border-radius: 5px;
            display: block;
            text-transform: capitalize;
            position: relative;
            transition: all 0.3s ease;
            background: $white;

            span {
              width: 11%;
              height: 100%;
              position: absolute;
              right: -20%;
              top: 0;
              background: #e74c3c;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 0 5px 5px 0;
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
