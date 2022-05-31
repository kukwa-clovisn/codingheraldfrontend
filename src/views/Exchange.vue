<template>
  <main class="content">
    <div
      class="main d-flex justify-content-between align-items-center flex-column"
    >
      <div class="header d-flex justify-content-evenly align-items-center">
        <div
          class="d-flex justify-content-center align-items-center"
          title="get to know the value of other currencies..."
        >
          <span>codingheraldapps</span>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <i class="fa-solid fa-sack-dollar" id="laugh"></i>
        </div>
      </div>
      <hr />
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
            <p :title="val_from">amount in {{ val_from }}</p>
            <p title="choose currency from...">choose currency from</p>
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
            <select class="choose" v-model="from" name="currencies" id="btn">
              <option
                v-for="currency in currencyNames"
                :key="currency.currencyName"
                :value="currency.id"
              >
                {{ currency.currencyName }} ( {{ currency.id }})
              </option>
            </select>
          </div>
        </div>
        <div class="text-capitalize container-fluid">
          <button
            class="text-capitalize mx-3"
            id="click"
            @click="convertCurrency()"
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
            <p :title="val_in">value in {{ val_in }}</p>
            <p title="choose currency to...">choose currency to...</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="response">{{ output }}</div>

            <select class="choose" v-model="to" name="currencies" id="btn2">
              <option
                :value="currency.id"
                v-for="currency in currencyNames"
                :key="currency.currencyName"
              >
                {{ currency.currencyName }} ({{ currency.id }})
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "Exchange",
  setup() {
    let val = ref(1);
    let output = ref("");
    let resp = ref([]);
    let currencyTwo = ref(false);
    let val_from = ref("");
    let val_in = ref("");
    let from = ref("USD");
    let to = ref("xAF");
    let currencyName = ref("");
    let currencyNames = ref([]);

    onMounted(() => {
      fetch(
        "https://free.currconv.com/api/v7/currencies?apiKey=473bcd51be8dcd3de8f7"
      )
        .then((res) => res.json())
        .then((res) => {
          currencyName.value = res.results;
          currencyNames.value = res.results;
        });

      convertCurrency();
    });

    const convertCurrency = () => {
      fetch(
        "https://free.currconv.com/api/v7/convert?q=" +
          from.value +
          "_" +
          to.value +
          "&compact=ultra&apiKey=473bcd51be8dcd3de8f7"
      )
        .then((res) => res.json())
        .then((res) => {
          resp.value = Object.keys(res).map((key) => {
            return res[key];
          });

          val_from.value = from.value;
          val_in.value = to.value;
          output.value = eval(resp.value[0] * val.value);
        })
        .catch((err) => err);
    };

    return {
      val,
      output,
      resp,
      currencyTwo,
      val_from,
      val_in,
      from,
      to,
      currencyName,
      currencyNames,
      convertCurrency,
    };
  },
};
</script>

<style lang="scss" scoped>
$col: #3d566f;
main {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  padding-top: 0;

  .main {
    width: 600px;
    border-radius: 10px;
    height: fit-content;
    padding: 20px;
    background: white;
    position: relative;
    margin: 0 auto;

    @media screen and (max-width: 660px) {
      width: 95%;
      @media screen and (max-width: 520px) {
        width: 99%;
        padding: 5px;
      }
    }

    .header {
      width: 90%;
      height: 20vh;
      padding: 0 30px;
      flex-wrap: wrap;
      @media screen and (max-width: 590px) {
        flex-direction: column;
      }
      div {
        width: 20%;
        font-size: 1.5em;
        text-transform: capitalize;
        cursor: pointer;

        @media screen and (max-width: 500px) {
          font-size: 19px;
        }

        span {
          font-size: 35px;
          background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
          font-weight: 600;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: "Grand Hotel", cursive;

          @media screen and (max-width: 430px) {
            font-size: 29px;
          }
        }
        i {
          color: teal;

          @media screen and (max-width: 500px) {
            font-size: 50px;
          }
        }

        &:first-child {
          width: 80%;
        }
      }
    }

    hr {
      height: 5px;
      width: 100%;
      border-radius: 30px;
      color: red;
      background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
      // background: teal;
    }

    .main-body {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      padding: 20px 10px;
    }
    input,
    .response {
      border: none;
      border-radius: 5px;
      width: 40%;
      height: 50px;
      outline: none;
      text-align: center;
      color: $col;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .input {
      background: transparent;
      color: $col;
    }

    .currencyOne,
    .currencyTwo {
      width: 80px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: red;
    }

    #click {
      transition: all 0.3s ease;
      height: 60px;
      width: 200px;
      margin: 20px auto;
      border: none;
      border-radius: 5px;
      background: teal;
      color: white;
      &:active {
        transform: scale(0.9);
      }
      @media screen and (max-width: 430px) {
        width: 100%;
      }
    }

    .from,
    .to {
      width: 95%;
      height: 110px;
      padding: 15px;
      border-radius: 5px;
      background: rgb(238, 234, 244);
      border: 0.5px solid rgb(235, 233, 233);
      transition: all 0.5s ease;

      .paragraphs {
        width: 100%;
        height: fit-content;

        p {
          text-transform: capitalize;
          font-size: 14px;
          color: teal;
          cursor: pointer;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 0 5px;
          padding-left: 0;
        }
      }

      .choose {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        background: transparent;
        width: 50%;
        text-align: center;
        cursor: pointer;
        border: none;
        outline: none;
        color: $col;

        option {
          border: none;
          border-radius: 5px;
          transition: all 0.3s ease;

          &:hover {
            background: teal;
          }
        }
      }

      @media screen and (max-width: 520px) {
        width: 100%;
        .from,
        .to {
          width: 98%;
          p {
            font-size: 11px;
          }
        }
      }
    }
  }
}
</style>
