<template>
  <div class="content">
    <header>
      <div class="logo">!mage<span>CR</span></div>
      <div class="right-header">
        <router-link to="/overview/imageCompressor" class="link"
          ><i class="fa-solid fa-minimize"></i><span>Compress</span>
        </router-link>
        <router-link to="/overview/imageCompressor/resize" class="link"
          ><i class="fa-solid fa-crop"></i><span>Resize</span>
        </router-link>
        <router-link to="/overview/imageCompressor/buy" class="link"
          ><i class="fa-solid fa-mug-hot"></i><span>Donate</span>
        </router-link>
      </div>
    </header>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "imageCompressor",
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: whitesmoke;
  overflow: hidden;
  overflow-y: auto;

  header {
    width: 100%;
    height: 10vh;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    .logo {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
      color: teal;
      font-family: "Jacques Francois Shadow", cursive;
      span {
        color: #e66581;
        text-decoration: overline;
      }
    }
    .right-header {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;

      .link {
        text-decoration: none;
        color: rgb(2, 93, 93);
        flex-basis: 1;
        flex-grow: 1;

        i {
          font-size: 15px;
          padding-right: 2px;
        }
        @media screen and (max-width: 420px) {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 8px;
        }
      }

      .router-link-active.router-link-exact-active {
        color: #e66581;
      }

      @media screen and (max-width: 605px) {
        width: 65%;
        .link {
          font-size: 10px;
        }
      }
    }
  }

  .main-container {
    width: 100%;
    height: fit-content;
  }
}
</style>
