<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/HelloWorld">Hello World</router-link> |
      <router-link :to="{ name: 'contacto' }">Contacto</router-link> |
      <router-link to="/ecamp">Viajar al ecamp</router-link> |
      <router-link to="/blog/1">Blog</router-link> |
      <router-link :to="{ name: 'cliente', params: { cliente: 'mauro' } }"
        >Cliente</router-link
      >
      |
    </nav>

    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Bievenidos alumnos" /> -->
    <!-- Como el espacio en nuestra pagina, que va  mostrar la naveegcion de componentes -->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App"
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
