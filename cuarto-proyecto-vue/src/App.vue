<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <NuestroVuex msg="Cuarto proyecto Vue con Vuex" />
  </div>
</template>

<script>
import NuestroVuex from "./components/NuestroVuex.vue";

export default {
  name: "App",
  components: {
    NuestroVuex
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
