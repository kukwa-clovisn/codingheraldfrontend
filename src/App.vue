<template>
  <router-view />
  <!-- vuejs projects for beginners code mentor.io //dev projects -->
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

button,
a,
label,
i {
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
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
}
</style>
