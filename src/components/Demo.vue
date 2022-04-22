<template>
  <body>
    <header
      class="d-flex justify-content-between align-items-center flex-column"
    >
      <nav
        class="top-content d-flex justify-content-between align-items-center"
      >
        <nav class="return">
          <router-link to="/" class="back"
            ><i class="fa fa-arrow-left"></i> back home</router-link
          >
        </nav>
        <nav class="items d-flex justify-content">
          <ul>
            <li class="nav-item">
              <a href="http://127.0.0.1:5504/html/youtube.html">channel</a>
              <i class="fa fa-chevron-down"></i>
            </li>
            <li class="nav-item">CEO<i class="fa fa-chevron-down"></i></li>
            <li class="nav-item">TEAMS<i class="fa fa-chevron-down"></i></li>
            <li class="nav-item">Academy</li>
          </ul>
        </nav>
      </nav>
      <nav class="bottom-content">
        advanced crypto trading academy <span>(ACTA)</span>
      </nav>
    </header>
    <main>
      <div class="firstpage d-flex justify-content-between align-items-center">
        <div class="left-content">
          <div class="live">live <span>zoom</span> meetings</div>
          <h1 class="display-3">get started with <span>ACTA</span></h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            neque consequuntur fuga optio ducimus odio, earum fugit praesentium
            voluptate? Doloremque, blanditiis obcaecati. Similique, eaque
            praesentium.
          </p>
          <button>
            <router-link to="/Register" class="route">get started</router-link>
          </button>
        </div>
        <div class="right-content">
          <img src="../assets/team.jpg" alt="" />
        </div>
      </div>
      <div class="secondpage">
        <h1 class="lead">sign up to get access to our awesome products!</h1>
        <div class="content">
          <div class="sample">
            <ul>
              <li>
                <span><i class="fa fa-check link"></i></span>
                <span>todo app</span>
              </li>
              <li>
                <span><i class="fa fa-check link"></i></span>
                <span>currency converter</span>
              </li>
              <li>
                <span><i class="fa fa-check link"></i></span>
                <span>weather forcast</span>
              </li>
              <li>
                <span><i class="fa fa-check link"></i></span>
                <span>stop watch</span>
              </li>
              <li>
                <span><i class="fa fa-check link"></i></span>
                <span>BMI calculator</span>
              </li>
            </ul>
          </div>
          <div class="form">
            <form action="/Demo" method="post">
              <div class="form-head">
                <h1>advanced trading crypto academy</h1>
                <p>making excessive profits in this age</p>
              </div>
              <div class="form-body">
                <div>
                  <label for="name">username:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="User name"
                    required
                  /><i class="fa fa-user input-item"></i>
                </div>
                <div>
                  <label for="email">email:</label
                  ><input
                    type="email"
                    name="email"
                    placeholder="Email-address here..."
                    required
                  /><i class="fa fa-envelope input-item"></i>
                </div>
                <div>
                  <label for="contact">telephone:</label
                  ><input
                    type="number"
                    name="contact"
                    placeholder="your telephone number"
                    required
                  /><i class="fa fa-phone input-item"></i>
                </div>
              </div>
              <div class="form-footer">
                <button type="reset">reset</button>
                <button type="submit">submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
export default {
  name: "Demo",
};
</script>

<style lang="scss" scoped>
body {
  width: 100%;
  height: auto;
  background: white;

  header {
    width: 100%;
    height: 20vh;
    background: white;
    position: fixed;
    border-bottom: 1px solid white;
    top: 0;
    left: 0;
    z-index: 1;

    .top-content {
      width: 100%;
      height: 26%;
      background: rgb(1, 51, 51);
      color: white;
      padding-left: 30px;

      .return {
        cursor: pointer;
        .back {
          text-decoration: none;
          color: white;
          text-transform: capitalize;
        }
      }

      .items {
        width: 40%;
        height: 100%;
        ul {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 50px;

          li {
            list-style-type: none;
            text-transform: capitalize;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-weight: 700;

            a {
              color: rgb(252, 226, 84);
              text-decoration: none;
              text-transform: capitalize;
            }

            .fa-chevron-down {
              padding-top: 5px;
              font-size: 15px;
            }
          }
        }
      }
    }
    .bottom-content {
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      text-transform: capitalize;
      color: teal;
      font-weight: 700;
      cursor: pointer;
    }
  }

  main {
    width: 100%;
    height: auto;
    background: white;

    .firstpage {
      width: 100%;
      background: whitesmoke;
      height: 800px;
      position: relative;
      border-radius: 100% 0 0 0;

      .live {
        position: absolute;
        left: 100px;
        top: -70px;
        width: 350px;
        height: 50px;
        padding: 5px 1px;
        font-size: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: tomato;
        font-weight: 700;
        word-spacing: 10px;
        transition: all 0.3s ease-out;
        text-transform: capitalize;
        cursor: pointer;

        @media screen and (max-width: 1000px) {
          left: 300px;
        }

        &:hover {
          font-size: 25px;
        }

        span {
          width: 100px;
          height: 50px;
          border-radius: 5px;
          padding: 5px;
          background: lightseagreen;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-transform: capitalize;
          transition: all 0.5s ease;

          &:active {
            transform: scale(0.8);
          }
        }
      }

      .left-content {
        width: 50%;
        height: auto;
        z-index: 0.9;
        position: relative;
        display: block;

        @media screen and (max-width: 1000px) {
          width: 100vw;
          padding: 0 20px;
        }

        h1 {
          font-size: 30px;
          text-transform: capitalize;
          font-weight: 600;
          text-align: center;
          padding: 10px;
          z-index: 0.9;
          transition: all 0.8s ease-in;
          cursor: pointer;

          &:hover {
            font-size: 40px;
            transform: scale(0.9);
          }

          span {
            color: teal;
            font-size: 55px;
            cursor: pointer;
          }
        }

        p {
          font-weight: 325;
          padding: 10px;
          text-align: center;
        }

        button {
          width: 220px;
          height: 70px;
          padding: 10px;
          display: block;
          margin: 4vh auto;
          border: none;
          border-radius: 3px;
          background: tomato;
          transition: all 0.5s ease;
          position: relative;
          left: -20px;
          top: 30px;

          &:hover {
            border-radius: 30px;
          }
          &:focus {
            transform: scale(0.9);
          }

          .route {
            text-decoration: none;
            color: white;
            text-transform: capitalize;
            font-size: 25px;
          }
        }
      }
      .right-content {
        width: 510px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 0.6;

        @media screen and (max-width: 1000px) {
          display: none;
        }

        img {
          width: 800px;
          border-radius: 50%;
          display: block;
          margin: 0 auto;
          margin-right: 10px;
          z-index: 0.3;
          cursor: pointer;
          outline: 25px solid rgb(89, 152, 160);

          // @media screen and (max-width: 1000px) {
          //   display: none;
          // }
        }
      }
    }

    .secondpage {
      width: 100%;
      height: auto;
      background: whitesmoke;
      position: relative;
      padding-bottom: 20px;

      &:hover {
        .content {
          .sample {
            left: -10px;
          }
          .form {
            left: 0;
          }
        }
      }

      h1 {
        text-align: center;
        font-size: 60px;
        font-weight: 700;
        color: mediumseagreen;
        text-transform: capitalize;
      }

      .content {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        padding-top: 40px;

        .sample {
          width: 590px;
          height: 400px;
          padding-bottom: 20px;
          background: transparent;
          position: relative;
          left: -700px;
          transition: all 1s ease;

          ul {
            width: 100%;
            height: 100%;
            background: white;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
            padding: 0;

            li {
              width: 100%;
              height: 20%;
              cursor: pointer;
              border-top: 0.5px solid gray;
              list-style-type: none;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 50px;
              position: relative;
              cursor: pointer;
              transition: all 0.5s ease;

              &:hover {
                background: rgb(230, 240, 250);
              }

              &:first-child {
                background: rgb(97, 6, 158);
                span {
                  color: white;
                  &:last-child {
                    color: whitesmoke;
                  }
                }
              }

              span {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: seagreen;
                display: flex;
                justify-content: center;
                align-items: center;

                &:last-child {
                  width: 70%;
                  border-radius: 0;
                  justify-content: left;
                  position: absolute;
                  left: 120px;
                  font-size: 25px;
                  color: #4a4a4a;
                  font-weight: 400;
                  text-transform: capitalize;
                  background: transparent;
                }

                .link {
                  font-size: 20px;
                  color: white;
                }
              }
            }
          }
        }

        .form {
          width: 500px;
          height: 500px;
          border-radius: 5px;
          margin-top: 10vh;
          background: rgb(0, 128, 79);
          background: white;
          position: relative;
          // left: 700px;
          cursor: pointer;
          transition: all 3s ease;

          .form-head {
            width: 100%;
            height: 30%;
            padding: 20px;

            h1 {
              font-size: 27px;
              color: rgb(9, 105, 97);
            }
            p {
              text-align: center;
              color: rgb(57, 22, 65);
              font-weight: 500;
              padding-top: 5px;
            }
          }
          .form-body {
            width: 97%;
            height: 285px;
            background: whitesmoke;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            left: 1.5%;
            flex-direction: column;

            div {
              width: 90%;
              height: 31%;
              margin: auto;

              label {
                display: block;
                text-transform: capitalize;
                font-weight: 600;
                color: #4a4a4a;
              }
              .input-item {
                font-size: 30px;
                position: relative;
                top: -38px;
                left: 10px;
                color: rgb(22, 70, 78);
              }
              input {
                width: 90%;
                height: 50px;
                background: rgb(231, 241, 245);
                border: none;
                outline: none;
                border-radius: 5px;
                padding-left: 60px;
                display: block;

                &:hover {
                  outline: 3px solid rgb(2, 101, 146);
                }

                &:focus {
                  outline: 3px solid teal;
                }
              }
            }
          }
          .form-footer {
            width: 97%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            left: 1.5%;
            padding-top: 20px;

            button {
              width: 45%;
              height: 50px;
              border-radius: 5px;
              border: none;
              text-transform: capitalize;
              background: teal;
              color: white;

              &:last-child {
                background: red;
              }
            }
          }
        }
      }
    }
    .thirdpage {
      width: 95%;
      height: 90vh;
      margin: 3vh auto;
      border-radius: 3px;
      background: rgb(3, 31, 156);
    }
  }
}
</style>
