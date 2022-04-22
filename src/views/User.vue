<template>
  <div class="user">
    <div
      class="
        wrapper
        d-flex
        justify-content-center
        flex-column
        align-items-center
      "
    >
      <div class="media d-flex justify-content-evenly align-items-center">
        <div
          class="
            logo
            d-flex
            justify-content-center
            flex-column
            align-items-center
          "
        >
          <li>k</li>
          <li>c</li>
          <li>n</li>
        </div>
        <div class="text-uppercase">media</div>
      </div>

      <div class="list">
        <li>kukwa clovis ngong</li>
        <li>fullstack web developer</li>
        <li>keyboardist</li>
        <li>herald</li>
        <li>christocentric</li>
      </div>
    </div>
    <div class="content d-flex justify-content-between align-items-start">
      <div class="left-content">
        <h1 class="text-center text-uppercase text-white py-3">
          random user api
        </h1>
        <h1 class="text-white text-capitalize text-center">{{ username }}</h1>
        <div :class="{ color: active }" id="image">
          <img :src="img" alt="" />
        </div>
        <button
          class="btn rounded bg-white p-2 m-5 text-capitalize text-danger"
          @click="myFunction()"
        >
          {{ btnName }}
        </button>
      </div>
      <div class="right-content">
        <table class="table table-success table-striped table-hover">
          <thead>
            <tr>
              <th class="text-uppercase text-center py-4" colspan="2">
                details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-capitalize">name</td>
              <td><i class="fa fa-user detail"></i> {{ username }}</td>
            </tr>
            <tr>
              <td class="text-capitalize">email-address</td>
              <td><i class="fa fa-envelope detail"></i> {{ email }}</td>
            </tr>
            <tr>
              <td class="text-capitalize">gender</td>
              <td><i class="fa fa-user detail"></i> {{ gender }}</td>
            </tr>
            <tr>
              <td>DOB</td>
              <td><i class="fa fa-user-circle detail"></i>{{ dob }}</td>
            </tr>
            <tr>
              <td class="text-capitalize">age</td>
              <td><i class="fa fa-user-alt detail"></i>{{ age }}</td>
            </tr>
            <tr>
              <td class="text-capitalize">country</td>
              <td><i class="far fa-flag detail"></i>{{ country }}</td>
            </tr>
            <tr>
              <td class="text-capitalize">city</td>
              <td><i class="fa fa-city detail"></i>{{ city }}</td>
            </tr>

            <tr>
              <td class="text-capitalize">state</td>
              <td><i class="fa fa-building detail"></i>{{ state }}</td>
            </tr>
            <tr>
              <td class="text-capitalize">street name</td>
              <td><i class="fa fa-house-user"></i>{{ streetName }}</td>
            </tr>
            <tr>
              <td class="text-capitalize">street number</td>
              <td><i class="fas fa-list-ol detail"></i>{{ streetNumber }}</td>
            </tr>
            <tr>
              <td class="text-capitalize">phone</td>
              <td><i class="fa fa-phone-alt detail"></i>{{ phone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "User",

  data() {
    return {
      btnName: "random user",
      username: "",
      img: "",
      dob: "",
      age: "",
      phone: "",
      email: "",
      city: "",
      country: "",
      streetNumber: "",
      streetName: "",
      state: "",
      active: false,
      gender: "",
    };
  },
  mounted() {
    this.myFunction();
  },

  methods: {
    myFunction() {
      axios.get("https://randomuser.me/api/").then((res) => {
        console.log(res.data.results[0]);
        console.log(res.data.results[0].location.street.name);
        this.username =
          res.data.results[0].name.title +
          " " +
          res.data.results[0].name.first +
          " " +
          res.data.results[0].name.last;
        console.log(res.data.results[0].picture.medium);

        this.img = res.data.results[0].picture.large;

        this.dob = res.data.results[0].dob.date;

        this.age = res.data.results[0].dob.age;

        this.phone = res.data.results[0].phone;

        this.email = res.data.results[0].email;

        this.city = res.data.results[0].location.city;

        this.country = res.data.results[0].location.country;

        this.state = res.data.results[0].location.state;

        this.streetNumber = res.data.results[0].location.street.number;

        this.streetName = res.data.results[0].location.street.name;

        this.gender = res.data.results[0].gender;

        if (this.gender === "female") {
          this.active = true;
        } else {
          this.active = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(21, 122, 253, 0.685) 0%,
    rgba(171, 250, 171, 0.623) 40%,
    rgba(20, 164, 212, 0.877) 100%
  );
  background-attachment: fixed;
  overflow-x: hidden;

  Header {
    background: transparent;
  }
  .wrapper {
    background: transparent;
    width: 100%;
    height: 32vh;
    position: relative;

    .media {
      width: 220px;
      height: 90px;
      position: absolute;
      top: 10%;
      left: 39%;
      font-size: 32px;
      font-weight: 700;
      color: rgb(2, 126, 109);
    }

    .logo {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      position: relative;
      overflow: hidden;

      &:before {
        content: "";
        width: 70px;
        height: 70px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        border: 3px solid tomato;
        animation: turn 5s infinite;
      }
      &:after {
        content: "";
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 3px solid green;
        position: absolute;
        right: 0;
        bottom: 0;
        animation: turnL 5s infinite linear;
      }

      li {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        list-style-type: none;
        text-transform: uppercase;
        position: relative;
        top: 50px;
        left: 30%;
        display: block;
        font-size: 35px;
        animation: pop 20s steps(3) infinite;
      }
      @keyframes pop {
        to {
          top: -100px;
        }
      }
    }
    @keyframes turn {
      to {
        transform: rotateY(360deg);
      }
    }

    @keyframes turnL {
      to {
        transform: rotateY(-360deg);
      }
    }

    .list {
      width: 650px;
      height: 72px;
      padding: 0;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      left: 21%;

      @media screen and (max-width: 768px) {
        left: 20%;
      }

      @media screen and (max-width: 500px) {
        left: -20%;
      }
      li {
        list-style-type: none;
        width: 55%;
        height: 72px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        position: relative;
        top: 0;
        left: 25%;
        font-size: 25px;
        font-weight: 800;
        color: rgb(176, 77, 38);
        animation: move 50s steps(5) infinite;

        &:before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          // background: linear-gradient(
          //   to bottom,
          //   rgb(161, 225, 196) 0%,
          //   rgb(181, 233, 195) 100%
          // );
          background: transparent;

          animation: hide 5s infinite alternate forwards;
        }
      }

      @keyframes move {
        to {
          top: -360px;
        }
      }

      @keyframes hide {
        from {
          width: 100%;
          left: 0;
        }
        to {
          left: 100%;
          width: 0;
        }
      }
    }
  }
}
.content {
  width: 100%;
  height: 100%;
  //   background: linear-gradient(to bottom, rgb(137,224,187) 0%,);
  flex-wrap: wrap;
  padding: 30px;
}

.right-content {
  position: relative;
  width: 600px;
  margin: auto;
}

.right-content table {
  width: 100%;
}

.right-content table tr {
  width: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
}

.right-content table tr:hover {
  background: rgb(122, 199, 224);
}

.right-content table td {
  text-align: left;
  padding: 10px 20px;
  width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.right-content table .detail {
  margin-right: 15px;
}

.left-content {
  width: 400px;
  margin: 2% auto;

  button {
    position: relative;
    left: 20%;
  }
}
h1 {
  cursor: pointer;
  font-size: 25px;
}

#image {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  margin: 2% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 6px solid white;
  overflow: hidden;
}

#image img {
  width: 100%;
  height: 100%;
  display: block;
  margin: auto;
  border-radius: 50%;
  cursor: pointer;
  align-self: center;
}

#image.color {
  border: 6px solid rgb(9, 168, 231);
}

button {
  min-width: 150px;
  transition: all 0.5s ease;
}

button:hover {
  background: tomato;
  color: white;
}

button:active {
  transform: scale(0.8);
}
.respond {
  width: 100%;
  height: 50vh;
  //   background: white;
  border-radius: 3px;
}
</style>
