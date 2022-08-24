<template>
  <main id="main">
    <router-view />
    <!-- vuejs projects for beginners code mentor.io //dev projects -->
    <span class="to-landing-page reach beamerTrigger"
      ><a class="a"><i class="fa-solid fa-bell"></i></a
    ></span>
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Grand+Hotel&family=Jacques+Francois&family=Jacques+Francois+Shadow&family=Noto+Sans:wght@100;300;400;600;700;900&family=Nunito+Sans:ital,wght@0,300;0,600;0,700;0,900;1,300;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&family=Russo+One&display=swap");
#app {
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgb(212, 216, 228);
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

* {
  transition: all 0.3s ease;
}

::-webkit-scrollbar {
  width: 10px;
  border-radius: 30px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(
    to top,
    rgb(1, 160, 147) 0%,
    rgb(2, 146, 57) 100%
  );
  border-radius: 30px;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-enter-active,
.fade-leave-active,
.move-enter-active,
.move-leave-active,
.leave-enter-active,
.leave-leave-active,
.appear-enter-active,
.appear-leave-active {
  transition: all 0.4s ease;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-move {
  transition: all 0.4s ease;
  position: absolute;
}
.move-enter-from,
.move-leave-to {
  opacity: 0;
  transform: scale(1.6);
}

.leave-enter-from,
.leave-leave-to {
  transform: translateX(-100vw);
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}

.slide-in-enter-from {
  transform: translateY(15vh);
}
.slide-in-active {
  transition: all 0.3s ease;
}
.slide-in-leave-to {
  transform: translateY(20vh);
}

button,
a,
label,
i {
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(0.9);
  }
  &:active {
    transform: scale(0.8);
  }
}

.blur {
  width: 100%;
  height: 100%;
  background: #1f1c2d;
  opacity: 0.7;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  cursor: pointer;
}

.to-landing-page {
  width: 40px;
  height: 40px;
  border-radius: 3px;
  position: fixed;
  right: 30px;
  bottom: 50px;
  z-index: 1;

  .a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
}
.reach {
  left: 10px;
  border-radius: 100%;
  width: 55px;
  height: 55px;
  background: rgba(230, 101, 129, 1);
  a {
    i {
      font-size: 20px;
    }
  }
}
#main {
  width: 100%;
}
</style>
