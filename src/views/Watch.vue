<template>
  <div class="content">
    <button class="start {clock : begin }" @click="start()">
      <i class="fa fa-play"></i>
    </button>
    <button class="stop" @click="stop()"><i class="fa fa-stop"></i></button>
    <div class="watch d-flex justify-content-between">
      <div class="mili">{{ mili }}</div>
      <div class="secs">{{ secs }}</div>
      <div class="min">{{ min }}</div>
      <div class="hour">{{ hour }}</div>
      <div class="animation">
        <input type="number" min="1" v-model="count" />
      </div>
    </div>
    <img src="../assets/watch.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Watch",

  data() {
    return {
      begin: false,
      mili: 0,
      secs: 0,
      min: 0,
      hour: 0,
      count: 1,
      interval: Number,
    };
  },
  methods: {
    start() {
      this.begin = true;
      clearInterval(this.interval);
      if (this.count > 0) {
        this.mili++;
        if (this.mili >= 100) {
          this.secs += this.count;
          this.mili = 1;
          if (this.secs >= 60) {
            this.min += 1;
            this.secs = 0;
            if (this.min >= 60) {
              this.hour += 1;
              this.min = 0;
            }
          }
        }
      }

      this.interval = setInterval(this.start, 10);
    },
    stop() {
      clearInterval(this.interval);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 85vh;
  background: white;

  .start {
    width: 40px;
    height: 48px;
    background: transparent;
    position: absolute;
    left: 48.3%;
    top: 30.8%;
    text-align: center;
    color: rgb(3, 240, 23);
    font-size: 20px;
    font-weight: 900;
    border: none;
    z-index: 1;
    cursor: pointer;
  }

  .stop {
    position: absolute;
    width: 35px;
    height: 32px;
    left: 57.2%;
    top: 39%;
    background: transparent;
    color: rgb(241, 11, 11);
    border: none;
    z-index: 1;
    transform: rotateZ(29deg);
  }
  .start.clock {
    animation: start 0.5s 4 forwards;
    background: red;
  }

  @keyframes start {
    to {
      transform: rotateY(360deg);
    }
  }
}
.watch {
  width: 268px;
  height: 268px;
  border-radius: 50%;
  background: white;
  position: absolute;
  left: 39.3%;
  top: 48.3%;
  flex-wrap: wrap;
  z-index: 1;

  div {
    width: 80px;
    height: 80px;
    background: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .mili {
    position: relative;
    top: 10px;
    left: 93px;
  }
  .secs {
    position: relative;
    top: 90px;
    left: 85px;
  }
  .min {
    position: relative;
    top: 180px;
    left: -90px;
  }
  .hour {
    position: relative;
    top: -40px;
    left: 10px;
  }
  .animation {
    width: 50px;
    height: 50px;
    position: relative;
    top: -22px;
    left: -105px;
    background: transparent;

    input {
      width: 100%;
      height: 100%;
      border: 2px solid gray;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: black;
      font-weight: 800;
      // font-size: 1.2em;
      padding-left: 10px;
      padding-top: 5px;
    }

    &:before {
      content: "";
      width: 2px;
      border-radius: 30px;
      height: 30px;
      background: red;
      position: absolute;
      top: 21%;
      left: 47%;
      animation: watch 4s infinite linear;
    }

    @keyframes watch {
      to {
        transform: translateX(0) rotate(360deg);
      }
    }
  }
}
img {
  width: 500px;
  display: block;
  margin: 5vh auto;

  z-index: 0.5;
}
</style>
