<template>
  <div class="main">
    <div class="c3">
      <i class="fa-regular fa-address-book"></i>
      <span>see all your memories</span>
    </div>
    <div class="content">
      <div class="todo-container">
        <h1 id="text-run">
          {{ profile.profileName.split(" ")[0] }}'s Dairy<i
            class="far fa-heart"
          ></i>
        </h1>
        <p class="title" v-if="profile.description.length">
          {{ profile.description }}
        </p>
        <textarea
          type="text"
          id="inputItem"
          v-model="userData"
          name="text"
          placeholder="Add new memory"
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
          <button @click="addTodo()">
            <i class="fa-solid fa-circle-plus"></i>add memory
          </button>
        </div>

        <transition name="fade">
          <p id="error" class="py-3" v-if="invalidTask">
            please add a valid task ❣️KCN❣️
          </p>
        </transition>

        <div class="todoItems">
          <transition-group tag="ul" appear name="fade">
            <li
              :class="{ done: todo.done }"
              v-for="(todo, index) in todoItems"
              :key="index"
            >
              <div class="item">
                <p @click="readTask(todo.name, todo.date, index)">
                  <span class="span">{{ index + 1 }}</span> {{ todo.date }}
                </p>

                <p
                  class="content large-screen-only"
                  :title="todo.name"
                  @click="readTask(todo.name, todo.date, index)"
                >
                  {{ todo.name }}
                </p>
                <p class="content small-screen-only" :title="todo.name">
                  {{ todo.name }}
                </p>
                <p
                  class="small-screen-only"
                  @click="readTask(todo.name, todo.date, index)"
                >
                  <span class="read-icon"
                    ><i class="fa-brands fa-readme"></i>Read</span
                  >
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
                  id="trash"
                  @click="removeTask(index)"
                ></i>
              </div>
            </li>
          </transition-group>
        </div>
        <p id="pending">
          you have <span id="count">{{ todoCount }}</span> Memories
        </p>
        <button id="reset" @click="removeAllTodos()">clear all todos</button>
      </div>
    </div>
    <transition name="fade">
      <div class="errorDiv" v-if="edit.val">
        <div
          class="blur"
          @click="
            edit.val = false;
            search.val = false;
          "
        ></div>

        <form
          @submit.prevent="updateTask(edit.num, edit.task)"
          class="edit-form"
          id="edit-form"
        >
          <h1>Edit <span>task</span> {{ edit.num + 1 }}</h1>
          <input type="hidden" v-model="edit.num" class="task-id" required />
          <textarea
            type="text"
            name="edit"
            id="edit"
            cols="10"
            rows="15"
            placeholder="Edit task here...."
            v-model="edit.task"
            required
          ></textarea>
          <div class="buttons">
            <button type="submit">
              <i class="far fa-edit edit" title="Edit task..."></i>submit
            </button>
            <button
              v-if="edit.val"
              title="close task editing"
              @click="
                edit.val = false;
                search.val = false;
              "
            >
              &times;close
            </button>
          </div>
        </form>
      </div>
    </transition>
    <transition name="fade">
      <div class="errorDiv" v-if="search.val">
        <div
          class="blur"
          @click="
            edit.val = false;
            search.val = false;
          "
        ></div>
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

          <div class="buttons">
            <button type="submit">
              <i
                class="fa-solid fa-magnifying-glass edit"
                title="Search task(s)"
              ></i
              >Search
            </button>
            <button
              v-if="search.val"
              title="close task editing"
              @click="
                edit.val = false;
                search.val = false;
              "
            >
              &times; close
            </button>
          </div>
        </form>
      </div>
    </transition>
    <img src="../assets/list.svg" id="pic" alt="" />
    <transition name="appear">
      <div class="read-task" v-if="read">
        <div class="blur" @click="read = !read"></div>
        <div class="read-content">
          <i class="fa-solid fa-rectangle-xmark" @click="read = !read"></i>

          <p>
            {{ profile.profileName }} <br />
            {{ profile.description }}
          </p>
          <h3>
            Task<span>{{ taskIndex + 1 }}</span> Was written on:{{ taskDate }}
          </h3>
          <p>{{ popTask }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { ref, reactive } from "vue";
import axios from "axios";
export default {
  name: "Todo",

  setup() {
    let profile = reactive({
      profileName: "",
      description: "",
    });

    const router = useRouter();

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
    let taskIndex = ref("");

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
            profile.description = res.data.description;
          })
          .catch((err) => {
            router.push("/login");
            return err;
          });
      } catch (err) {
        router.push("/login");
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
              `Do you want to mark task ${index + 1} as completed or important?`
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

    const readTask = (task, date, index) => {
      read.value = true;
      popTask.value = task;
      taskDate.value = date;
      taskIndex.value = index;
    };

    return {
      edit,
      taskDate,
      taskIndex,
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
  background: rgb(235, 234, 234);
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
  overflow-y: scroll;

  .c1,
  .c2,
  .c3 {
    width: 90px;
    height: 90px;
    border-radius: 100%;
    background: teal;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    i {
      color: white;
      font-size: 20px;
    }
    span {
      color: white;
      font-size: 7px;
    }
  }

  .c1 {
    top: 13vh;
    left: 10%;
    animation: run1 10s alternate linear forwards infinite;
  }
  .c3 {
    top: 14vh;
    right: 15%;
    background: white;

    animation: run3 15s 3 alternate linear forwards;

    i,
    span {
      color: teal;
    }
  }

  @keyframes run1 {
    from {
      top: 13vh;
    }
    to {
      top: 90vh;
    }
  }

  @keyframes run3 {
    from {
      top: 90vh;
    }
    to {
      top: 14vh;
    }
  }

  #pic {
    width: 10%;
    height: auto;
    position: fixed;
    right: 3%;
    top: 20%;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    position: relative;
    .todo-container {
      position: relative;
      width: 100%;
      height: fit-content;
      background: transparent;
      overflow-y: scroll;
      z-index: 1;
      padding: 0 !important;
      margin: 0;

      h1 {
        text-transform: capitalize;
        font-size: 30px;
        font-weight: 600;
        font-family: "Nunito Sans", sans-serif;
        padding: 30px 0;
        padding-left: 5px;
        color: teal;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: fit-content;
        width: 100%;
        position: relative;

        i {
          margin-right: 6%;
          color: #e66581;
          cursor: progress;
          font-size: 30px;
        }
      }

      .title {
        width: 100%;
        text-align: center;
        color: teal;
        font-size: 12px;
      }

      #inputItem {
        width: 97%;
        height: 150px;
        margin: auto;
        display: block;
        padding: 20px;
        outline: none;
        border: none;
        background: white;
        border-radius: 10px;
        box-shadow: 0 0 2px 1px whitesmoke;
        transition: all 0.3s ease-in-out;

        &:hover {
          transform: scaleY(1.2);
        }

        &:active {
          transform: scale(1);
        }

        @media screen and (max-width: 768px) {
          margin: auto;
        }
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
          justify-content: space-between;
          align-items: center;
          width: 40%;
          height: 45px;
          .laugh {
            font-size: 35px;
            margin: 10px 10%;
            color: $secondaryCol;

            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
              color: #e66581;
            }

            &:active {
              transform: scale(0.8);
            }
          }
          @media screen and (max-width: 768px) {
            width: 60%;
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
        width: 42%;
        height: 50px;
        float: right;
        padding: 5px;
        margin: 10px 0;
        border-radius: 30px;
        border: none;
        background-color: $secondaryCol;
        background: linear-gradient(to bottom, rgb(21, 186, 159), teal);
        color: white;
        text-transform: capitalize;
        transition: all 0.3s ease;
        cursor: pointer;

        @media screen and (max-width: 768px) {
          width: 100%;
          display: block;
        }

        &:hover {
          background: #e66581;
        }
      }

      .errorDiv {
        width: 95%;
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
          flex-direction: column;
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
      }

      .todoItems {
        width: 100%;
        max-height: 1200px;
        margin: 5px 0;
        padding: 10px 0;
        overflow-y: scroll;

        ul {
          width: 100%;
          height: 100%;
          padding: 0;
          padding-left: 1px;
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
            width: 240px;
            height: 130px;
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
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-direction: column;
              p {
                cursor: pointer;
                width: 95%;
                height: 19%;
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

                .span {
                  color: white;
                  font-size: 10px;
                  font-weight: 700;
                  margin-right: 10px;
                  width: 18px;
                  height: 18px;
                  border-radius: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background: #e66581;
                }

                .read-icon {
                  height: 100%;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  position: relative;

                  color: #3d3d3d;
                  font: 600 17px "Poppins", sans-serif;
                  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

                  i {
                    font-size: 24px;
                    color: rgb(223, 224, 224);
                    cursor: pointer;
                    margin-right: 5px;
                  }
                }
              }

              .content {
                align-items: flex-start;
                font-size: 11px;
                height: 62%;
                padding: 5px;
              }
              .small-screen-only {
                display: none;
              }
            }

            .icons {
              width: 100%;
              height: 20%;
              position: absolute;
              right: 0;
              bottom: -21%;
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              border-radius: 0 0 8px 8px;
              transition: all 0.3s ease;
              cursor: pointer;
              background: transparent;

              button {
                background: none;
                width: 17px;
                height: fit-content;
                cursor: pointer;
                outline: none;
                border: none;
                border-radius: 0;
                background: transparent;
              }

              i {
                font-size: 17px;
                color: teal;
                cursor: pointer;
                transition: all 0.5s ease;
                display: block;

                &:active {
                  transform: scale(0.8);
                }
              }

              #trash {
                color: #cc0832;
                font-size: 17px;
              }

              .taskStatus {
                width: 17px;
                height: 17px;
                border: none;
                display: block;
                margin: 0 5px;
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

            &:hover {
              .item {
                height: 80%;
                display: block;
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;
                p {
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
              .icons {
                bottom: 0;
              }
            }

            @media screen and (max-width: 975px) {
              width: 300px;

              @media screen and (max-width: 700px) {
                width: 48%;

                @media screen and (max-width: 550px) {
                  width: 100%;
                  height: 180px;
                  margin: 10px auto;

                  .item {
                    height: 100%;
                    width: 100%;

                    .large-screen-only {
                      display: none;
                    }
                    .small-screen-only {
                      display: block;
                    }
                  }
                  .icons {
                    width: 25%;
                    height: 100%;
                    flex-direction: column;
                    border-radius: 0 8px 8px 0;
                    right: -25%;
                    top: 0;
                    padding: 10px 0;
                    background: #03b8b8;

                    i {
                      color: white;
                    }
                  }

                  &:hover {
                    .item {
                      width: 75%;
                      height: 100%;
                    }
                    .icons {
                      right: 0;
                      top: 0;
                    }
                  }
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
              flex-direction: column;

              &::before {
                content: "Important|completed";
                text-decoration: none;
                font-size: 1.1em;
                color: white;
                font-family: "Grand Hotel", cursive;
                display: block;
              }
            }
            .icons {
              i {
                color: white;
              }
            }
          }
        }
      }

      #pending {
        text-align: center;
        padding: 3px;
        color: teal;
        position: relative;
        margin: 0 auto;
        text-transform: capitalize;

        #count {
          padding: 0 5px;
          color: #e66581;
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

#error {
  font-size: 12px;
  color: rgba(231, 16, 16, 0.938);
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
}

.read-task,
.errorDiv {
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;

  .blur {
    background: rgb(60, 60, 60);
    opacity: 0.5;
  }

  form,
  button {
    z-index: 1;
  }

  h3 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      width: 18px;
      height: 18px;
      font-size: 10px;
      border-radius: 100%;
      background: teal;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
    }
  }

  form {
    width: 90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 7px;
    padding: 20px;
    h1 {
      color: #e66581;
      text-transform: capitalize;
      font: 600 30px "Grand Hotel", sans-serif;

      span {
        color: teal;
        text-transform: capitalize;
        margin: 0 10px;
      }
    }
    input,
    textarea {
      width: 90%;
      height: fit-content;
      outline: none;
      border: none;
      background: whitesmoke;
      padding: 20px;
      border-radius: 10px;
      margin: 10px;
    }
    textarea {
      height: 300px;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      width: 90%;
      button {
        width: 300px;
        height: 50px;
        border: none;
        border-radius: 5px;
        background: #e66581;
        color: white;
        display: block;
        margin: 10px;

        @media screen and (max-width: 650px) {
          width: 100%;
          margin: 10px auto;
        }
      }

      button[type="submit"] {
        background: teal;
      }
    }
  }

  .read-content {
    width: 97%;
    height: fit-content;
    padding: 20px 10px;
    background: white;
    border-radius: 7px;
    z-index: 1;
    margin: 20px auto;

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
      width: 97%;
      margin: auto;
      white-space: pre-wrap;
      line-height: 23px;
      font: 400 14px "Poppins", sans-serif;
      // padding: 5px;
      overflow-x: hidden;
    }

    @media screen and (max-width: 768px) {
      width: 98%;
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
