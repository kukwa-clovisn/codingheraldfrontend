<template>
  <div class="main">
    <header class="d-flex justify-content-between align-items-center">
      <nav class="title" title="Body Mass Index Calculator">
        <img
          src="../assets/bmi-icon.png"
          alt="calculator"
          title="BMI calculator"
        />
        bmi Calculator
      </nav>
      <nav class="nav d-flex justify-content-evenly align-items-center">
        <router-link class="route" to="/">Home</router-link>
        <router-link class="route" to="Exchange"
          >currency converter</router-link
        >
      </nav>
    </header>

    <div
      class="
        carousel
        d-flex
        justify-content-between
        align-items-center
        flex-lg-row flex-md-row flex-column
      "
    >
      <div class="page">
        <img
          title="bmi status outline"
          src="../assets/bm.jpg"
          class="imgone"
          alt="BMI Calculator"
        />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          harum, nemo quis nulla sint expedita voluptas illum commodi porro
          architecto?
        </div>
        <button>know more...</button>
      </div>
      <div class="page">
        <img
          title="Body Mass Index chart"
          src="../assets/bmi.svg.png"
          alt="BMI Calculator"
        />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          harum, nemo quis nulla sint expedita voluptas illum commodi porro
          architecto?
        </div>
        <button>know more...</button>
      </div>
      <div class="page">
        <img src="../assets/bmi.jpg" alt="" />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          harum, nemo quis nulla sint expedita voluptas illum commodi porro
          architecto?
        </div>
        <button>know more...</button>
      </div>
    </div>
    <div class="calculator d-flex justify-content-between align-items-center">
      <div class="sidebar">
        <h2 class="text-center display-3 text-capitalize">credentials</h2>
        <div class="cred">
          <label for="name" class="text-capitalize lead">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="username"
            placeholder="Enter your name..."
          />
        </div>
        <div class="cred">
          <label for="age" class="text-capitalize lead">age:</label>
          <input
            type="number"
            name="age"
            id="age"
            v-model="userage"
            placeholder="Enter your age..."
          />
        </div>
        <div class="cred">
          <label for="email" class="text-capitalize lead">email:</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="useremail"
            placeholder="Enter your email..."
          />
        </div>
        <div class="cred-feed">
          <label for="feedback"
            >will you like us to send the results to your email?</label
          >
          <div class="d-flex justify-content-center align-items-center">
            <div class="d-flex justify-content-center align-items-center">
              <span class="px-1 text-capitalize">yes</span>
              <input type="radio" name="feedback" id="yes" />
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <span class="px-1 text-capitalize">no</span>
              <input type="radio" name="feedback" id="no" />
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <h3>get to know your body mass index now!</h3>
        <div class="input">
          <label for="height">Height(m):</label>
          <div class="unit d-flex justify-content-left align-items-center">
            <input
              type="number"
              name="height"
              id="height"
              v-model="height"
              placeholder="0.0cm"
            />
            <span>meters</span>
          </div>
        </div>
        <div class="input">
          <label for="weight">weight(Kg):</label>
          <div class="unit d-flex justify-content-left align-items-center">
            <input
              type="number"
              name="weight"
              id="weight"
              v-model="weight"
              placeholder="0.0Kg"
            />
            <span>Kilograms</span>
          </div>
        </div>
        <div class="results">
          <table v-if="clicked" class="table table-striped table-dark">
            <thead>
              <tr>
                <th
                  scope="col"
                  colspan="8"
                  class="py-4 text-center text-capitalize"
                >
                  body mass index(BMI) results
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col" colspan="1">index</th>
                <th scope="col" colspan="2">name</th>
                <th scope="col" colspan="1">age</th>
                <th scope="col" colspan="1">height</th>
                <th scope="col" colspan="1">weight</th>
                <th scope="col" colspan="1">bmi</th>
                <th scope="col" colspan="1">status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td colspan="2" class="text-capitalize">{{ username }}</td>
                <td>{{ userage }}yrs</td>
                <td>{{ H }}m</td>
                <td>{{ W }}Kg</td>
                <td>{{ val }}</td>
                <td>{{ resp }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button @click="bmi()">get BMI</button>
          <router-link
            to="/Exchange"
            class="px-5 text-capitalize text-decoration-none mx-5"
          >
            how to convert units</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BMI",

  data() {
    return {
      i: 0,
      username: "",
      userage: 0,
      useremail: "",
      val: 0,
      H: 0,
      W: 0,
      height: 0,
      weight: 0,
      resp: "BMI response",
      clicked: false,
      source: "../assets/bmi.jpg",
      images: ["", "../assets/bm.jpg", "../assets/bmi.svg.png"],
    };
  },
  created() {
    fetch("http://localhost:3000/Bmi")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  },

  methods: {
    bmi() {
      if (
        this.height > 0 &&
        this.weight > 0 &&
        this.username !== "" &&
        this.userage > 0
      ) {
        this.clicked = true;
        this.val = eval(this.weight / (this.height * this.height)).toFixed(2);
        this.H = this.height;
        this.W = this.weight;

        if (this.val < 18.5) {
          this.resp = "underweight";
        } else if (this.val > 18.5 && this.val < 24.9) {
          this.resp = "Healthy weight";
        } else if (this.val > 25 && this.val < 29.9) {
          this.resp = "Overweight";
        } else if (this.val > 30) {
          this.resp = "Obese";
        }

        fetch("http://localhost:3000/Bmi", {
          method: "Post",
          body: JSON.stringify({
            name: this.username,
            Age: this.userage,
            email: this.useremail,
            Height: this.height,
            Weight: this.weight,
            BMI: this.val,
            status: this.resp,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((res) => console.log(res));
      } else {
        window.alert("fill in your credentials correctly");
        this.clicked = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: auto;
  background: linear-gradient(
    to bottom right,
    rgb(28, 28, 109) 0%,
    rgb(194, 194, 252) 100%
  );
  position: relative;
  padding-bottom: 3vh;

  header {
    width: 100vw;
    height: 17vh;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: space-between;
      height: 30vh;
      padding: 20px;
      margin-bottom: 3vh;
    }

    nav {
      width: 30%;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    .title {
      width: 45%;
      color: rgb(210, 224, 4);
      font-size: 1.8em;
      padding-left: 30px;
      font-weight: 700;
      cursor: pointer;
      text-transform: uppercase;
      text-align: center;
      animation: title 5s linear 4 alternate forwards;
      position: relative;
      left: 0;

      @media screen and (max-width: 768px) {
        width: 90%;
      }

      img {
        width: 90px;
        cursor: pointer;
      }
    }

    .nav {
      position: relative;
      right: 10vw;
      width: 50%;

      @media screen and (max-width: 768px) {
        width: 90%;
      }

      .route {
        text-decoration: none;
        color: white;
        text-transform: capitalize;
        font-size: 1.2em;
        transition: all 0.5s ease;

        &:hover {
          color: rgb(209, 208, 208);
          font-size: 1.1em;
          border-left: 2px solid white;
          padding: 0 5px;
        }
      }
    }

    @keyframes title {
      to {
        left: 200px;
      }
    }
  }

  .carousel {
    width: 70vw;
    min-height: 70%;
    margin: 0 auto;
    background: transparent;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      width: 90vw;
    }

    .page {
      width: 300px;
      border: 2px solid white;
      height: 63vh;
      margin-right: 10px;
      padding: 10px;
      background: white;
      border-radius: 3px;
      cursor: pointer;
      position: relative;

      @media screen and (max-width: 768px) {
        width: 70%;
        height: 70vh;
        margin-bottom: 40px;
      }

      img {
        width: 90%;
        height: auto;
        display: block;
        margin: 0 auto;
        cursor: pointer;
      }
      .imgone {
        width: 80%;
      }

      div {
        height: 35%;
        padding: 10px;
        text-overflow: ellipsis;
        white-space: wrap;
        text-align: center;
        overflow: hidden;
        font-size: 12px;
      }

      button {
        margin: auto;
        display: block;
        min-width: 130px;
        padding: 5px;
        border: none;
        border-radius: 5px;
        background: brown;
        color: white;
        text-transform: capitalize;
        outline: none;
        transition: all 0.6s ease;
        position: absolute;
        bottom: -17px;
        left: 27%;

        &:hover {
          background: rgb(71, 2, 160);
        }
        &:active {
          transform: scale(0.9) rotate(45deg);
        }
      }
    }
  }
  .calculator {
    width: 100%;
    padding: 40px;
    // padding-top: 1vh;
    padding-bottom: 2vh;
    margin-top: 50px;
    background: rgb(212, 216, 228);

    @media screen and (max-width: 768px) {
      padding-top: 20px;
      flex-direction: column;
    }

    .sidebar {
      width: 35%;
      height: 70vh;
      background: transparent;
      color: rgb(70, 64, 64);
      font-size: 0.8em;
      padding: 10px;
      text-align: center;
      box-shadow: 0 5px 5px rgb(66, 62, 62);

      @media screen and (max-width: 768px) {
        width: 90%;
      }

      h2 {
        color: rgba(2, 68, 2, 0.774);
      }

      .cred {
        display: block;
        width: 90%;
        height: 14vh;
        margin: 1vh auto;

        label {
          display: block;
          text-align: left;
          padding-left: 25px;
          cursor: pointer;
        }

        input {
          width: 80%;
          display: block;
          border: none;
          border-radius: 30px;
          outline: none;
          height: 40px;
          padding-left: 25px;
          padding-right: 20px;
          transition: all 0.3s ease-in;

          &:hover {
            outline: 2px solid teal;
          }
          &:active {
            outline: 2px solid lightseagreen;
          }
          &:focus {
            outline: 2px solid rgb(4, 178, 221);
          }
        }
      }

      .cred-feed {
        div {
          div {
            cursor: pointer;
          }
          input,
          label {
            cursor: pointer;
          }
        }
      }
    }

    .content {
      width: 60%;

      @media screen and (max-width: 768px) {
        width: 90%;
        margin: auto;
        padding-top: 10px;
      }
      h3 {
        padding-bottom: 20px;
        padding-left: 40px;
        text-transform: capitalize;
        cursor: pointer;
        font-weight: 700;
        font-size: 1.2em;
        color: rgb(231, 4, 42);
        transition: all 0.5s ease;

        &:hover {
          color: rgb(15, 15, 173);
        }
        &:active {
          transform: translateX(30px);
        }
      }

      .input {
        width: 600px;
        height: 100px;
        padding: 10px;
        margin-bottom: 10px;
        display: block;

        @media screen and (max-width: 768px) {
          width: 90%;
        }

        label {
          display: block;
          padding-left: 30px;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
        }

        .unit {
          span {
            width: max-content;
            height: 50px;
            padding: 10px 20px 4px 4px;
            border-radius: 0 30px 30px 0;
            background: white;
          }
        }

        input {
          width: 60%;
          height: 50px;
          padding: 10px 20px 4px 30px;
          display: block;
          border: none;
          outline: none;
          font-size: 1.2em;
          border-radius: 30px 0 0 30px;
        }
      }

      .results {
        table {
          cursor: pointer;
          td,
          th {
            border-left: 0.4px solid rgb(90, 89, 89);
            padding: 10px;
            text-transform: capitalize;
          }
        }
      }

      button {
        width: 130px;
        height: 40px;
        border: none;
        border-radius: 5px;
        padding: 5px;
        margin-left: 50px;
        text-transform: capitalize;
        background: rgb(207, 53, 26);
        color: white;
        transition: all 0.5s ease;

        &:hover {
          background: green;
        }

        &:active {
          transform: translateX(20px) scale(0.8);
        }
      }
    }
  }
}
</style>
