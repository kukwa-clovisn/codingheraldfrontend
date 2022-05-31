<template>
  <main>
    <a href="/" class="home">Home</a>
    <div class="form">
      <div class="contact-form" id="contact">
        <div class="bubble"></div>
        <div class="blur"></div>
        <h1>get in touch!</h1>
        <h6>
          We deal and handle many businesses that will interest you. Check out
          our list of services we offer...
        </h6>
        <div class="contact-header">
          <nav>
            <i class="fa-brands fa-whatsapp icon"></i>
            <p>+237682449347</p>
          </nav>
          <nav>
            <i class="fa-solid fa-phone icon"></i>
            <p>+237682449347</p>
          </nav>
          <nav class="nav">
            <i class="fa-solid fa-envelope icon"></i>
            <p>kukwaclovisngong3@gmail.com</p>
          </nav>
        </div>
        <form @submit.prevent="sendMessage()">
          <h2>contact us!</h2>
          <div class="top-form">
            <div class="credentials">
              <div class="input">
                <label for="name">Name:</label>
                <div class="input-field">
                  <i class="fa-regular fa-user"></i
                  ><input
                    type="text"
                    name="name"
                    id="name"
                    v-model="user.username"
                    placeholder="Enter name..."
                    required
                  />
                </div>
              </div>
              <div class="input">
                <label for="email">email:</label>
                <div class="input-field">
                  <i class="fa-solid fa-envelope icon"></i
                  ><input
                    type="email"
                    name="email"
                    id="email"
                    v-model="user.email"
                    placeholder="Enter Email.."
                    required
                  />
                </div>
              </div>
              <div class="input">
                <label for="subject">subject:</label>
                <div class="input-field">
                  <i class="fa-solid fa-file-word"></i
                  ><input
                    type="text"
                    name="number"
                    id="phone"
                    v-model="user.number"
                    placeholder="Enter whatsapp contact..."
                    required
                  />
                </div>
              </div>
            </div>
            <div class="message">
              <label for="message">message:</label
              ><textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                v-model="user.message"
                placeholder="Your message here!"
                required
              ></textarea>
            </div>
          </div>
          <div class="bottom-form">
            <h3>services</h3>
            <div class="form-services">
              <div class="service">
                <span>web developement</span>
              </div>
              <div class="service">
                <span>graphic design</span>
              </div>
              <div class="service">
                <span>crypto &amp; forex</span>
              </div>
            </div>
          </div>
          <div class="btns">
            <button type="reset">
              <i class="fa-solid fa-ban"></i><span>cancel</span></button
            ><button type="submit">
              <i class="fa-regular fa-paper-plane"></i>
              <span>send message</span>
            </button>
          </div>
        </form>
      </div>
      <transition name="pop">
        <div class="response-div" v-if="response.success || response.failed">
          <div class="success" v-if="response.success">
            <i class="fa-solid fa-circle-check"></i>{{ response.msg }}
          </div>
          <div class="failed" v-if="response.failed">
            <i class="fa-solid fa-triangle-exclamation"></i>{{ response.msg }}
          </div>
        </div>
      </transition>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
export default {
  name: "Nav",
  setup() {
    let response = reactive({
      success: false,
      failed: false,
      msg: "",
    });

    let user = reactive({
      username: "",
      email: "",
      message: "",
      number: "",
    });

    function sendMessage() {
      axios
        .post("api/admin/contact", user, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.statusText === "OK") {
            response.success = true;
            response.msg = res.data.msg;

            user.username = "";
            user.email = "";
            user.number = "";
            user.message = "";

            setTimeout(() => {
              response.success = false;
            }, 3000);
          }
        })
        .catch((err) => {
          response.failed = true;
          response.msg = err.response.data.msg;

          setTimeout(() => {
            response.failed = false;
          }, 3000);
        });
    }

    return { sendMessage, user, response };
  },
};
</script>

<style lang="scss" scoped>
.pop-enter-from {
  opacity: 0;
}
.pop-enter-active {
  opacity: 1;
  animation: pop 2s linear alternate forwards;
}
.pop-enter-to {
  opacity: 1;
}
.pop-leave-from {
  opacity: 1;
}
.pop-leave-active {
  opacity: 1;
  transition: 1s ease;
}
.pop-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
main {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  .home {
    position: fixed;
    top: 20px;
    left: 20px;
    text-decoration: none;
    z-index: 1;
    color: rgb(169, 245, 245);
    font: 600 20px "Poppins", sans-serif;
  }

  .contact-form {
    width: 100vw;
    height: fit-content;
    padding: 30px 5px 20px 5px;
    position: relative;
    margin-bottom: 0;
    background: linear-gradient(to bottom right, #390764, #b93e82, white);

    .bubble {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      background: #fff;
      position: absolute;
      top: 10%;
      opacity: 0.2;
      left: 5%;
    }

    .blur {
      position: absolute;
      height: 50%;
      top: 50%;
      bottom: 0 !important;
      left: 0;
      overflow: hidden;
      opacity: 1;
      border-radius: 70% 0 0 0;
      background: linear-gradient(90deg, rgb(12, 105, 105), teal);
    }

    h1 {
      padding: 20px;
      padding-bottom: 10px;
      text-transform: capitalize;
      color: #fff;
      text-align: center;
    }

    h6 {
      color: #c2c2c2;
      padding: 10px;
      text-align: center;
      font: 400 13px "Poppins", sans-serif;
    }

    .contact-header {
      width: 850px;
      margin: 10px auto;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      nav {
        width: 270px;
        height: 70px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        padding: 0;
        transition: all 0.3s ease;

        i {
          color: white;
        }
        p {
          padding: 0;
          color: #dbd9d9;
        }
      }

      @media screen and (max-width: 868px) {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        nav {
          width: 140px;
          margin: 0;
          padding: 0;
          i,
          p {
            font-size: 12px;
          }
        }

        .nav {
          width: 47%;
          width: 200px;
        }
      }
    }

    form {
      width: 900px;
      height: fit-content;
      background: #fff;
      position: relative;
      margin: 10px auto;
      padding: 20px;
      border-radius: 5px;

      h2 {
        padding: 10px;
        text-transform: capitalize;
        width: 100%;
        text-align: center;
        color: teal;
      }

      .top-form {
        width: 95%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .credentials {
          width: 48%;
          height: 300px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;

          .input {
            width: 100%;
            height: 85px;

            label {
              text-align: left;
              text-transform: capitalize;
              display: block;
              color: rgb(24, 109, 109);
              font: 700 18px "Poppins", sans-serif;
              width: 100%;
              padding: 2px 0 4px 0;
            }

            .input-field {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 3px;
              background: #fffbfb;
              box-shadow: 0 0 0.3px 1px #faf0f0;

              i {
                width: 15%;
                height: 100%;
                font-size: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: teal;
              }

              input {
                width: 100%;
                height: 50px;
                display: block;
                border: none;
                background: inherit;
                color: rgba(22, 53, 123, 0.54);
                outline: none;
              }
            }
          }
        }

        .message {
          width: 48%;
          height: 300px;

          label {
            text-align: left;
            text-transform: capitalize;
            display: block;
            color: teal;
            font: 800 18px "Poppins", sans-serif;
            width: 100%;
            padding: 2px 0 4px 0;
          }

          textarea {
            display: block;
            width: 100%;
            height: 90%;
            padding: 10px 20px;
            border: none;
            background: #fffbfb;
            box-shadow: 0 0 0.5px 3px #fffbfb;
            border-radius: 3px;
            box-shadow: 0 0 0.3px 1px #faf0f0;
            outline: none;
          }
        }

        @media screen and (max-width: 600px) {
          flex-direction: column;
          .credentials,
          .message {
            width: 100%;

            input {
              height: 95px;
            }
          }
        }
      }

      .bottom-form {
        width: 95%;
        margin: auto;

        h3 {
          text-align: left;
          text-transform: capitalize;
          color: teal;
          font: 800 19px "Poppins", sans-serif;
          padding: 10px;
          padding-left: 0;
        }
        .form-services {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .service {
            width: 31%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            background: #f1f5f5;
            cursor: pointer;

            span {
              text-transform: capitalize;
              color: teal;
              font: 500 16px Poppins, sans-serif;

              @media screen and (max-width: 600px) {
                font-size: 10px;

                @media screen and (max-width: 300px) {
                  font-size: 8px;
                }
              }
            }
          }
        }
      }
      .btns {
        width: 95%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        button {
          width: 47%;
          height: 60px;
          background: #da7979;
          border-radius: 3px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;

          i {
            color: #fff;
            margin-right: 10px;
            font-size: 20px;
          }
          span {
            color: #fff;
            font: 500 18px "Poppins", sans-serif;
            text-transform: capitalize;
          }
        }
        @media screen and (max-width: 600px) {
          flex-direction: column;
          button {
            width: 100%;
            margin-bottom: 10px;
          }
        }
      }

      @media screen and (max-width: 905px) {
        width: 99vw;
      }
    }
  }

  .response-div {
    width: 100vw;
    height: fit-content;
    position: fixed;
    display: flex;
    justify-content: center;
    align-content: center;
    top: 19vh;
    left: 0;
    z-index: 1;
    div {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 5px;
      color: white;
      z-index: 1;
      background: rgb(40, 223, 122);
      font: 600 18px "Poppins", sans-serif;

      i {
        color: white;
        font-size: 25px;
        padding: 0 3px;
      }
    }
    div.failed {
      background: crimson;
      color: white;
    }
    @media screen and (max-width: 500px) {
      top: 60vh;
    }
  }
}
</style>