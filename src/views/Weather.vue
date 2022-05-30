<template>
  <main>
    <div class="first-page">
      <i class="fa-solid fa-cloud-sun-rain" id="icon"></i>
      <i class="fa-solid fa-water" id="icon2"></i>
      <h1>Check out weather statistics of any area worldwide of your choice</h1>
      <div class="content">
        <h2>codingheraldapps</h2>
        <transition name="appear" appear>
          <form @submit.prevent="fetchData()" v-if="!report">
            <label for="city">Enter city name:</label>
            <input
              type="text"
              name="city"
              id="city"
              v-model="val"
              placeholder="Enter city name...."
              required
            />
            <button type="submit">Get forcast</button>
          </form>
        </transition>
        <transition name="move">
          <div class="details" v-if="report">
            <button @click="report = !report">back</button>
            <h3>{{ country }}</h3>
            <p>{{ city }}</p>
            <table class="table">
              <tbody>
                <tr>
                  <th>Temperature(<sup>o</sup>C)</th>
                  <td>{{ temp }}<sup>o</sup>C</td>
                </tr>
                <tr>
                  <th>Pressure(atm)</th>
                  <td>{{ pressure }}atm</td>
                </tr>
                <tr>
                  <th>Humidity</th>
                  <td>{{ humidity }}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{{ description }}</td>
                </tr>
                <tr>
                  <th>Time</th>
                  <td>{{ hrs }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </transition>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Weather",

  data() {
    return {
      val: "",
      temp: "",
      city: "",
      hrs: "",
      description: "",
      pressure: "",
      humidity: "",
      country: "",
      report: false,
    };
  },
  methods: {
    fetchData() {
      if (this.val !== "") {
        this.report = true;

        fetch(
          "http://api.openweathermap.org/data/2.5/weather?q=" +
            this.val +
            "&appid=c1dd6294b37cac85f43c6bcdb2e3f7a2"
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(res);

            this.country = res.sys.country;

            this.city = res.name;

            this.pressure = res.main.pressure;

            this.humidity = res.main.humidity;

            this.temp = eval(Math.floor(parseInt(res.main.temp)) - 273);

            this.description =
              res.weather[0].main + "/" + res.weather[0].description;

            this.hrs = new Date();
          });
        this.val = "";
      } else {
        window.confirm("please fill in a valid city name");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$col: #3d566f;
main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  .first-page {
    width: 90%;
    margin: auto;
    height: fit-content;
    position: relative;

    #icon,
    #icon2 {
      font-size: 250px;
      color: teal;
      position: absolute;
      top: 25%;
      right: 10%;
      opacity: 0.2;
      z-index: 0.1;
    }

    #icon2 {
      left: 0;
      opacity: 0.1;
      top: 5%;
    }
    h1 {
      font: 600 30px "Poppins", sans-serif;
      padding: 20px;
      color: teal;
      width: 80%;
      white-space: pre-wrap;
      position: relative;

      @media screen and (max-width: 1000px) {
        font-size: 25px;
        width: 95%;

        @media screen and (max-width: 490px) {
          font-size: 20px;
          width: 100%;
          padding: 10px;
        }
      }
    }
    .content {
      width: 100%;
      background: transparent;
      position: relative;
      h2 {
        font: 600 24px "Grand Hotel", cursive;
        padding: 15px;
        background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      form {
        width: 600px;
        height: fit-content;
        padding: 20px;

        label {
          width: 90%;
          height: 40px;
          padding: 0;
          text-align: left;
          padding-bottom: 4px;
          display: flex;
          align-items: center;
          font: 500 22px "Poppins", sans-serif;
          color: teal;
          text-transform: capitalize;
        }
        input {
          width: 90%;
          height: 50px;
          border: none;
          outline: none;
          box-shadow: 0 0 2px 1px whitesmoke;
          padding: 3px 20px;
          border-radius: 2px;
          margin-bottom: 20px;
        }
        button {
          width: 90%;
          height: 50px;
          border: none;
          background: teal;
          border-radius: 2px;
          color: white;
          text-transform: capitalize;
        }

        @media screen and (max-width: 650px) {
          width: 95%;
          padding: 10px;
          input,
          label,
          button {
            width: 100%;
          }
        }
      }
      .details {
        width: 100%;
        height: fit-content;

        button {
          width: 200px;
          height: 40px;
          font-size: 15px;
          background: teal;
          color: white;
          border: none;
          border-radius: 1px;
          margin-bottom: 20px;
        }
        h3,
        p {
          color: $col;
        }

        p {
          background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        table {
          width: 90%;
          margin: 20px 0;
          background: teal;
          border-radius: 10px;
          tr {
            background: transparent;

            th {
              font: 500 16px "Poppins", sans-serif;
              color: white;
              background: transparent;
              padding: 10px;
            }
            td {
              font: 400 14px "Poppins", sans-serif;
              color: white;
              background: transparent;
            }
          }

          @media screen and (max-width: 570px) {
            width: 100%;
          }
        }
      }
    }
  }

  .details {
    width: 400px;
    height: 90px;
    border: 1px solid white;
    font-size: 30px;
    position: relative;
    border: none;
    border-radius: 5px;

    .pressure {
      background: white;
      width: 50%;
      position: relative;
      height: 100%;
      padding-top: 20px;
      cursor: pointer;

      .pressure-heading {
        position: absolute;
        top: 5px;
        left: 20%;
        font-size: 15px;
      }
    }

    .humidity {
      width: 50%;
      height: 100%;
      position: relative;
      background: crimson;
      color: white;
      padding-top: 20px;
      cursor: pointer;

      .humidity-heading {
        position: absolute;
        top: 5px;
        left: 20%;
        font-size: 15px;
      }
    }
  }

  .img {
    position: absolute;
    top: 15%;
    right: 10%;
    width: 130px;
  }

  .results {
    .time {
      position: absolute;
      bottom: 15vh;
      right: 5%;
      cursor: pointer;
    }
    .city-name {
      position: relative;
      font-size: 50px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  .title {
    width: 100%;
    height: 20vh;
    background: transparent;

    .temp {
      width: 300px;
      height: 150px;
      position: relative;
      background: white;
      border: 0.5px solid #e7e7e5;
      font-size: 50px;
      color: rgb(219, 7, 49);
      font-weight: 700;
      cursor: pointer;

      .side-bar {
        position: absolute;
        top: 0;
        left: 23%;
        font-size: 12px;
        color: rgb(255, 0, 179);
        text-transform: capitalize;
      }

      .desp {
        position: absolute;
        bottom: 4px;
        left: 20%;
        font-size: 15px;
        color: rgb(255, 0, 179);
        cursor: pointer;
      }
    }
  }
}
</style>
