<template>
  <!-- <nav><router-link to="/">Home</router-link> |</nav> -->
  <the-header></the-header>
  <router-view />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", Arial, sans-serif;
  // font-family: "Arimo", sans-serif;
  // font-family: 'Poppins', sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
