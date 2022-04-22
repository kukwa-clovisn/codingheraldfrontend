<template>
  <Cheader />
  <Nav />
  <div class="content">
    <div :class="{ blur: show, 'inner-content': mn }">
      <div
        v-if="hide"
        class="
          form
          bg-white
          d-flex
          flex-column
          justify-content-evenly
          align-items-center
        "
      >
        <div
          class="
            form-head
            d-flex
            justify-content-between
            px-4
            align-items-center
          "
        >
          <div
            class="d-flex flex-column justify-content-start align-items-center"
          >
            <h2 class="text-capitalize">exchange</h2>
            <p class="lead">trade tokens in an instant</p>
          </div>
          <div
            class="d-flex justify-content-center align-items-center"
            style="width: 35%; font-size: 20px; color: brown; cursor: pointer"
          >
            <i class="fa fa-cog mx-3"></i>
            <i class="far fa-clock"></i>
          </div>
        </div>
        <div
          class="
            form-input
            d-flex
            flex-column
            justify-content-between
            align-items-center
          "
        >
          <p class="text-left px-3 py-2 text-capitalize">from</p>
          <div
            class="
              cover
              d-flex
              flex-row
              justify-content-between
              align-items-center
            "
          >
            <input
              type="number"
              name="currentamount"
              id="c_amount"
              min="0"
              placeholder="0.0"
            />
            <button @click="toggle()" class="text-uppercase">
              bnb<i class="fas fa-chevron-down mx-3"></i>
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-center"
          style="color: brown"
        >
          <i class="fa fa-arrow-down"></i>
        </div>
        <div
          class="
            form-input
            d-flex
            flex-column
            justify-content-evenly
            align-items-center
          "
        >
          <p class="px-3 py-2 text-capitalize">to</p>
          <div
            class="
              cover
              d-flex
              flex-row
              justify-content-center
              align-items-center
            "
          >
            <input
              type="number"
              name="currentamount"
              id="c_amount"
              min="0"
              placeholder="0.0"
            />
            <button @click="selected()">
              select a currency<i class="fas fa-chevron-down mx-2"></i>
            </button>
          </div>
        </div>
        <Button
          btn="connect wallet"
          style="width: 90%; height: 50px; border-radius: 5px"
        />
      </div>
      <div
        class="currency d-flex justify-content-evenly flex-column"
        v-if="show"
      >
        <div
          class="
            currency-head
            d-flex
            justify-content-between
            align-items-center
            flex-row
            px-3
          "
        >
          <p class="lead">select a token</p>
          <span
            @click="back()"
            style="font-size: 30px; color: green; cursor: pointer"
            >&times;</span
          >
        </div>
        <div class="input">
          <input
            type="search"
            name="currency"
            id="currency"
            class="currency-input"
            v-model="searchCurrency"
            placeholder="Search name or paste address"
          />
        </div>
        <div class="main">
          <div
            @click="getCurrency()"
            class="currencies d-flex justify-content-between flex-column"
            v-for="currency of currencies"
            :key="currency.currencyName"
          >
            <h4 @click="alert('you clicked')">
              {{ currency.currencySymbol }} <span> </span> {{ currency.id }}
            </h4>
            <p class="lead" v-bind="list">
              {{ currency.currencyName }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="currency d-flex justify-content-evenly flex-column"
        v-if="select"
      >
        <div
          class="
            currency-head
            d-flex
            justify-content-between
            align-items-center
            flex-row
            px-3
          "
        >
          <p class="lead">select a token</p>
          <span
            @click="back()"
            style="font-size: 30px; color: green; cursor: pointer"
            >&times;</span
          >
        </div>
        <div class="input">
          <input
            type="search"
            name="currency"
            id=""
            class="currency-input"
            v-model="searchCurrency"
            placeholder="Search name or paste address"
          />
        </div>
        <div class="main">
          <div
            @click="getCurrency()"
            class="currencies d-flex justify-content-between flex-column"
            v-for="currency of currencies"
            :key="currency.currencyName"
          >
            <h4>
              {{ currency.currencySymbol }} <span> </span> {{ currency.id }}
            </h4>
            <p class="lead" v-bind="list">
              {{ currency.currencyName }}
            </p>
          </div>
        </div>
        <footer
          class="text-capitalize d-flex justify-content-center align-items-end"
        >
          manage tokens
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Cheader from "../components/Cheader.vue";
import Nav from "../components/nav.vue";
import Button from "../components/Button.vue";
import axios from "axios";

export default {
  name: "Currency",
  components: {
    Cheader,
    Nav,
    Button,
  },
  data() {
    return {
      hide: true,
      mn: true,
      show: false,
      currencies: [],
      searchCurrency: "",
      list: [],
      arr: [],
      currencyNames: [],
      currencyIds: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://free.currconv.com/api/v7/currencies?apiKey=473bcd51be8dcd3de8f7"
      )
      .then((res) => {
        this.currencies = res.data.results;
        console.log(res.data);
        console.log(res.data.results.USD);

        for (let i = 0; i < res.data.results.length; i++) {
          this.currencyNames.push(res.data.results.currencyName[i]);
        }
      });

    fetch(
      "https://free.currconv.com/api/v7/currencies?apiKey=473bcd51be8dcd3de8f7"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        this.currencyName = data.results;
        this.currencyNames = Object.keys(data.results).map((key) => {
          return this.currencyNames[key];
        });
        console.log(this.currencyNames);
      });
  },
  methods: {
    toggle() {
      this.hide = false;
      this.show = true;
      this.select = false;
    },
    selected() {
      this.hide = false;
      this.show = false;
      this.select = true;
    },
    back() {
      this.hide = true;
      this.show = false;
      this.select = false;
    },
    getCurrency() {
      //   if (this.searchCurrency !== "") {
      //     console.log(this.searchCurrency);
      //   } else {
      //     alert("currency doenst exist");
      //   }
      console.log(this.list);
      //   console.log(this.currencies.Proxy);
      //   console.log(this.currencies.currencyName);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 90vh;
  background: linear-gradient(
    to right,
    rgb(188, 230, 238) 0%,
    rgb(213, 241, 250) 100%
  );

  .inner-content {
    width: 100%;
    height: 100%;
    .form {
      width: 450px;
      height: 74vh;
      border: 0.5px solid rgb(224, 223, 223);
      border-radius: 10px;
      background: white;
      margin: auto;
      position: relative;
      top: 4vh;

      @media screen and (max-width: 768px) {
        width: 70vw;
      }
      .form-head {
        width: 100%;
        height: 20%;
        border-bottom: 0.5px solid rgb(224, 223, 223);
        i {
          cursor: pointer;
        }
        h2 {
          font-size: 20px;
          font-weight: 600;
          text-align: left;
          width: 100%;
          color: rgb(48, 2, 48);
        }
        p {
          font-size: 13px;
          color: #7a7a7a;
          font-weight: 400;
        }
      }
      .form-input {
        width: 90%;
        height: 20%;
        background: rgb(238, 234, 244);
        border-radius: 10px;
        color: rgb(90, 21, 90);
        p {
          width: 100%;
          height: 25%;
          text-align: left;
          padding: 0 10px;
        }

        .cover {
          width: 100%;
          height: 70%;
          padding: 0 10px;
          input {
            width: 60%;
            height: 75%;
            padding: 0 10px;
            background: inherit;
            border: none;
            outline: none;
          }
          button {
            width: min-content;
            height: 75%;
            font-size: 15px;
            white-space: nowrap;
            padding: 10px;
            border: none;
            color: rgb(100, 24, 100);
            background: inherit;
            transition: all 0.3s ease;
            cursor: pointer;
            &:active {
              transform: scale(0.8);
            }
          }
        }
      }

      .fa-arrow-down {
        transition: all 0.3s ease;
        cursor: pointer;
        &:active {
          transform: translateY(10px);
        }
      }
    }
    .currency {
      width: 450px;
      height: 74vh;
      border: 0.5px solid rgb(224, 223, 223);
      border-radius: 10px;
      background: white;
      margin: auto;
      position: relative;
      top: 4vh;
      @media screen and (max-width: 1000px) {
        width: 400px;
      }

      .currency-head {
        width: 100%;
        height: 15%;
        border-bottom: 0.5px solid rgb(224, 223, 223);
        p {
          font-weight: 800;
          text-transform: capitalize;
        }
      }
      .input {
        input {
          width: 90%;
          height: 50px;
          padding: 3px 20px;
          border-radius: 30px;
          border: none;
          margin: 0 5%;
          background: rgb(224, 237, 247);
          outline: none;
          transition: all 0.3s ease;
          &:hover {
            outline: 3px solid purple;
          }
          &:focus {
            outline: 3px solid lightblue;
          }
          &:active {
            outline: 3px solid brown;
          }
        }
      }
      .main {
        height: 60%;
        overflow: hidden;
        overflow-y: scroll;

        &:first-child {
          height: 40%;
        }
        .currencies {
          width: 95%;
          height: 40px;
          margin: 0 auto;
          padding: 3px;
          border-radius: 5px;
          transition: all 0.3s ease;
          cursor: pointer;

          &:hover {
            background: lightblue;
            color: crimson;
          }
          &:active {
            transform: translateX(15px);
          }

          h4 {
            font-size: 14px;
            width: 100%;
          }
          h4,
          p {
            padding: 0 30px;
            text-align: left;
            height: max-content;
          }
          p {
            font-size: 9px;
            width: 100%;
            margin-top: -2%;
          }
        }
      }
      footer {
        width: 100%;
        height: 3%;
        background: white;
        color: rgb(31, 199, 212);
        font-weight: 700;
        cursor: pointer;
        // position: absolute;
        // bottom: 0;
      }
    }
  }
  .inner-content.blur {
    background: rgb(39, 38, 44);
    opacity: 0.8;
  }
}
</style>
