<template>
  <div class="content">
    <div
      class="main d-flex justify-content-between align-items-center flex-column"
    >
      <div class="header d-flex justify-content-evenly align-items-center">
        <div
          class="d-flex justify-content-center align-items-center flex-column"
          title="get to know the value of other currencies..."
        >
          currency exchange <br />
          <span>KCN prod.</span>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <i
            class="fa fa-laugh"
            id="laugh"
            title="learn to always smile no matter what..."
          ></i>
        </div>
      </div>
      <div class="main-body">
        <div
          class="
            from
            d-flex
            justify-content-between
            align-items-center
            flex-column
          "
        >
          <div class="paragraphs d-flex justify-content-between">
            <p>amount in {{ val_from }}</p>
            <p>choose currency from</p>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <input
              type="number"
              name="amount"
              id="inputFrom"
              min="0"
              v-model="val"
              class="input"
              placeholder="0.00"
            />
            <input
              class="choose text-uppercase"
              id="btn"
              type="text"
              list="currencies"
              v-model="from"
            />
          </div>

          <datalist id="currencies">
            <option
              :value="currency.id"
              v-for="currency in currencyNames"
              :key="currency.currencyName"
            >
              {{ currency.currencyName }}
            </option>
          </datalist>
        </div>
        <div class="text-capitalize mx-2">
          <button
            class="text-capitalize mx-3"
            id="click"
            @click="convert()"
            title="convert to..."
          >
            convert <i class="fa fa-arrow-down"></i>
          </button>
        </div>
        <div
          class="
            to
            d-flex
            justify-content-between
            flex-column
            align-items-center
          "
        >
          <div class="paragraphs d-flex justify-content-between">
            <p>value in {{ val_in }}</p>
            <p>choose currency to...</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="response">{{ output }}</div>
            <input
              type="text"
              name="currency"
              id="btn2"
              class="choose text-uppercase"
              list="currencies"
              v-model="to"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exchange",

  data() {
    return {
      val: 1,
      output: "",
      resp: [],
      currencyOne: false,
      currencyTwo: false,
      val_from: "",
      val_in: "",
      from: "USD",
      to: "XAF",
      currencyName: "",
      currencyNames: [],
    };
  },
  mounted() {
    this.convert();
  },
  methods: {
    convert() {
      fetch(
        "https://free.currconv.com/api/v7/convert?q=" +
          this.from +
          "_" +
          this.to +
          "&compact=ultra&apiKey=473bcd51be8dcd3de8f7"
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);

          this.resp = Object.keys(res).map((key) => {
            return res[key];
          });

          this.val_in = this.to;
          this.val_from = this.from;

          this.output = eval(this.resp[0] * this.val);
          console.log(this.resp);
        });

      fetch(
        "https://free.currconv.com/api/v7/currencies?apiKey=473bcd51be8dcd3de8f7"
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);

          this.currencyName = res.results;

          this.currencyNames = res.results;
          console.log(this.currencyNames);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgb(188, 230, 238) 0%,
    rgb(213, 241, 250) 100%
  );

  .main {
    width: 500px;
    margin: 3vh auto;
    border-radius: 10px;
    height: 80vh;
    background: white;

    @media screen and (max-width: 600px) {
      width: 90%;
    }

    .header {
      width: 90%;
      height: 20vh;
      padding: 0 30px;
      border-bottom: 2px solid rgb(78, 77, 77);

      div {
        width: 20%;
        font-size: 1.5em;
        text-transform: capitalize;
        cursor: pointer;

        @media screen and (max-width: 500px) {
          font-size: 19px;
        }

        span {
          font-size: 15px;
          color: crimson;
        }

        #laugh {
          color: crimson;
        }

        &:first-child {
          width: 80%;
        }
      }
    }

    .main-body {
      width: 100%;
      height: 70%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
    }
    input,
    .response {
      border: none;
      border-radius: 5px;
      width: 40%;
      height: 50px;
      outline: none;
      text-align: center;
      color: #606060;
    }
    .input {
      background: transparent;
    }

    .currencyOne,
    .currencyTwo {
      width: 80px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(245, 144, 95);
      color: white;
      box-shadow: 0 3px 3px rgb(206, 127, 87);
    }

    // .btn {
    //   height: 100%;
    //   width: fit-content;
    //   color: white;
    //   margin-left: 10px;
    //   border-radius: 0 15px 15px 0;

    //   @media screen and (max-width: 500px) {
    //     width: 60%;
    //   }
    // }

    #click {
      transition: all 0.3s ease;
      height: 60px;
      width: 150px;
      border: none;
      border-radius: 3px;
      background: rgb(141, 141, 7);
      color: white;
      &:active {
        transform: translate(20px);
      }
    }

    .from {
      width: 85%;
      height: 90px;
      padding-top: 3px;
      border-radius: 5px;
      background: rgb(238, 234, 244);
      border: 0.5px solid rgb(235, 233, 233);
      transition: all 0.5s ease;

      &:hover {
        outline: 2px solid rgb(236, 235, 235);
        background: rgb(211, 210, 210);
      }

      .paragraphs {
        width: 80%;
        height: 35%;

        p {
          text-transform: capitalize;
          font-size: 0.8em;
          color: rgb(11, 95, 11);
          cursor: pointer;
          color: rgb(208, 207, 207);
        }
      }

      .choose {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        background: transparent;
        width: fit-content;
      }
    }

    .to {
      width: 85%;
      height: 90px;
      border-radius: 3px;
      background: rgb(238, 234, 244);
      border: 0.5px solid rgb(235, 233, 233);
      padding-top: 5px;

      &:hover {
        outline: 3px solid rgb(238, 238, 240);
        background: rgb(211, 210, 210);
      }

      .paragraphs {
        width: 80%;
        height: 35%;

        p {
          text-transform: capitalize;
          font-size: 0.8em;
          color: rgb(11, 95, 11);
          cursor: pointer;
        }
      }

      .response,
      .choose {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        cursor: pointer;
      }
      .choose {
        background: transparent;
      }
    }
  }
}
</style>
