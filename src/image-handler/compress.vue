<template>
  <main>
    <h1>
      <span class="span">!mage<span>CR</span> </span>
    </h1>
    <p>
      Get to compress your images and still retain the quality of your images
      absolutely for free. You can
      <a
        href="#desc-container"
        title="Learn more about our image compressor free app"
      >
        learn more</a
      >
    </p>
    <div class="content">
      <div class="image-container">
        <button><i class="fa-solid fa-download"></i></button>
        <p>drag and drop your images or click here to browse images</p>
        <button>select image<i class="fa-solid fa-camera"></i></button>
      </div>
    </div>
    <div id="desc-container">
      <h1>!mage<span>CR</span></h1>
      <h2>How to use our Image Compressor?</h2>
      <div class="desc-container-content">
        <ul>
          <li>
            <p><i class="fa-solid fa-upload"></i>select images</p>
            <p>
              Choose the image(s) you want to compress by clickig
              <i>select images</i> and upload or drag and drop the image(s)
            </p>
          </li>
          <i class="fa-solid fa-right-long lead"></i
          ><i class="fa-solid fa-down-long lead-down"></i>
          <li>
            <p><i class="fa-solid fa-minimize"></i>compress images</p>
            <p>
              After the images are uploaded, click on the <i>compress</i> button
              to compress the images
            </p>
          </li>
          <i class="fa-solid fa-right-long lead"></i
          ><i class="fa-solid fa-down-long lead-down"></i>
          <li>
            <p><i class="fa-solid fa-download"></i>Download images</p>
            <p>
              When the images are done compressing, you'll receive a
              notification the click on the <i>download</i> button to download
              your images.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "Compress",
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100%;

  h1 {
    width: 97%;
    text-align: center;
    text-transform: capitalize;
    padding: 20px 10px;
    font-family: "Grand Hotel", cursive;
    color: rgb(135, 134, 134);
    padding-bottom: 0;
    .span {
      font-size: 1.2em;
      color: teal;
      text-decoration: none;
      font-family: "Jacques Francois Shadow", cursive;
      span {
        color: #e66581;
        text-decoration: overline;
      }
    }
  }

  p {
    padding: 10px;
    text-align: center;

    a {
      background: linear-gradient(to bottom right, teal, #e66581);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-decoration: underline;
    }
  }

  .content {
    width: 95%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    .image-container {
      width: 100%;
      height: fit-content;
      padding: 10px;
      border: 3px dotted #e66581;

      button {
        min-width: 100px;
        height: fit-content;
        padding: 3px;
        display: block;
        border: none;
        background: transparent;
        margin: 5px auto;
        color: rgb(77, 77, 77);

        i {
          padding-left: 3px;
          font-size: 25px;
          color: #e66581;
        }

        &:last-child {
          box-shadow: 0 0 5px rgb(210, 210, 210);
          border-radius: 3px;
          height: 40px;
          min-width: 200px;

          &:hover {
            box-shadow: inset 0 0 20px rgb(231, 230, 230);
          }
        }
      }
    }
  }

  #desc-container {
    h1 {
      color: teal;
      font-size: 1.2em;
      text-decoration: none;
      font-family: "Jacques Francois Shadow", cursive;
      span {
        color: #e66581;
        text-decoration: overline;
      }
    }
    h2 {
      text-align: center;
      color: rgb(3, 102, 102);
      padding: 20px 10px;
    }

    .desc-container-content {
      width: 90%;
      height: fit-content;
      margin: 0 auto;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
        list-style: none;
        .lead {
          color: #e66581;
          @media screen and (max-width: 630px) {
            display: none;
          }
        }
        .lead-down {
          color: #e66581;
          display: none;
          @media screen and (max-width: 630px) {
            display: block;
          }
        }

        li {
          width: 230px;
          height: 170px;
          border-radius: 10px;
          background: teal;
          padding: 10px;
          color: rgb(217, 216, 216);

          p {
            font-size: 12px;
            padding: 5px;
            margin: 0;
            white-space: pre-wrap;

            i {
              padding-right: 3px;
            }

            &:first-child {
              color: white;
              font-size: 1.1em;
              font-weight: bolder;
            }
          }
        }
        @media screen and (max-width: 630px) {
          flex-direction: column;
        }
      }
    }
  }
}
</style>