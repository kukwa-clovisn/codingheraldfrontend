<template>
  <div class="main" :class="{ bg: report }">
    <div class="weather container">
      <div
        class="search_field d-flex justify-content-center align-items-center"
      >
        <input
          type="search"
          name="search"
          id="search"
          v-model="val"
          placeholder="search for weather forcast for a city/town"
          required
        />
        <input
          type="button"
          id="btn"
          @click="fetchData()"
          value="Get Forcast"
        />
      </div>
      <div
        v-if="report"
        class="details d-flex justify-content-center align-items-center"
      >
        <div class="pressure d-flex justify-content-center align-items-center">
          {{ pressure }}
          <span class="pressure-heading text-capitalize"
            >pressure reading!</span
          >
        </div>
        <div class="humidity d-flex justify-content-center align-items-center">
          {{ humidity }}
          <span class="humidity-heading text-capitalize">humidity value!</span>
        </div>
      </div>

      <img class="img" src="../assets/animated/weather.svg" alt="" />

      <div class="results">
        <p class="text-white time">{{ hrs }}</p>
        <p class="text-white city-name">{{ city }} - {{ country }}</p>
      </div>
      <div class="title" v-if="report">
        <div class="temp d-flex justify-content-center align-items-center">
          <span class="side-bar">temperature today!</span>
          {{ temp }}<sup>o</sup>
          <span class="desp">{{ description }}</span>
        </div>
        <div class="weather-footer text-uppercase d-flex align-items-center">
          weather today!
        </div>
      </div>
    </div>
  </div>
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
.main {
  width: 100%;
  min-height: 100%;
  background: url(../assets/forcast.jpg);
  background-size: cover;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding: 10px 0 0 0;

  .weather {
    padding: 10px;
    margin: 10px;
    width: 95%;
    height: 90vh;
    margin: 2% auto;
    padding: 5px;

    .search_field {
      width: 90%;
      margin: 0 auto;
      height: 10vh;

      #search {
        width: 400px;
        height: 50px;
        padding: 20px 5px;
        text-align: center;
        border: none;
        outline: none;
        border-radius: 30px 0 0 30px;
      }

      #btn {
        border-radius: 0 30px 30px 0;
        border: none;
        outline: none;
        height: 50px;
        width: 120px;
      }
    }

    .details {
      width: 400px;
      height: 90px;
      border: 1px solid white;
      font-size: 30px;
      position: relative;
      left: 55%;
      top: 10vh;
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
        left: 40%;
        top: 19vh;
        font-size: 50px;
        text-transform: uppercase;
        cursor: pointer;
      }
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

    .weather-footer {
      width: 95vw;
      height: 120px;
      background: rgb(221, 43, 12);
      color: white;
      padding-left: 15%;
      padding-top: 1%;
      font-size: 45px;
      cursor: pointer;
    }
  }
}
.main.bg {
  background: url(../assets/fog.jpg);
  background-size: cover;
  background-attachment: fixed;

  footer {
    margin-top: 2vh;
  }
}
</style>
