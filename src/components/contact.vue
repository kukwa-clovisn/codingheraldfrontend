<template>
  <main>
    <div class="form">
      <form action="/Demo" method="post">
        <div class="form-head">
          <h1>Codingherald apps</h1>
          <p>building creativity</p>
        </div>
        <div class="form-body">
          <div>
            <label for="name">username:</label>
            <input type="text" name="name" placeholder="User name" required /><i
              class="fa fa-user input-item"
            ></i>
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
          <div>
            <label for="contact">message:</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message...."
              required
            ></textarea>
          </div>
        </div>
        <div class="form-footer">
          <button type="reset">reset</button>
          <button type="submit">submit</button>
        </div>
        <a href="/" class="toHome">Home</a>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgb(1, 73, 73);

  .form {
    width: 700px;
    height: fit-content;
    padding: 20px;
    border-radius: 5px;

    background: rgb(0, 128, 79);
    background: white;
    position: relative;
    cursor: pointer;
    transition: all 3s ease;

    .form-head {
      width: 100%;
      height: 30%;
      padding: 20px;

      h1 {
        font-size: 27px;
        text-transform: capitalize;
        text-align: center;
        font-weight: 700;
        color: rgb(9, 105, 97);
      }
      p {
        text-align: center;
        color: rgb(57, 22, 65);
        font-weight: 500;
        padding-top: 5px;
        text-transform: capitalize;
        color: teal;
      }
    }
    .form-body {
      width: 97%;
      margin: auto;
      height: fit-content;
      background: whitesmoke;
      display: flex;
      border-radius: 7px;
      padding: 10px;
      justify-content: space-between;
      align-items: center;
      position: relative;
      flex-direction: column;

      div {
        width: 90%;
        height: fit-content;
        margin: 3px auto;

        label {
          display: block;
          text-transform: capitalize;
          font-weight: 600;
          color: #4a4a4a;
        }
        .input-item {
          font-size: 30px;
          position: relative;
          top: -43px;
          left: 10px;
          color: rgb(22, 70, 78);
        }
        input,
        textarea {
          width: 99%;
          height: 60px;
          background: rgb(231, 241, 245);
          background: rgb(237, 236, 236);
          border: none;
          outline: none;
          border-radius: 3px;
          padding-left: 60px;
          display: block;

          &:hover {
            outline: 2px solid teal;
          }

          &:focus {
            outline: 3px solid teal;
          }
        }

        textarea {
          height: 180px;
          padding: 20px;
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
          background: rgb(176, 77, 38);
        }
      }
    }

    .toHome {
      width: 90%;
      margin: 10px auto;
      text-decoration: none;
      text-transform: capitalize;
      color: teal;
      display: block;
      text-align: left;
    }

    @media screen and (max-width: 768px) {
      width: 97vw;
    }
  }
}
</style>