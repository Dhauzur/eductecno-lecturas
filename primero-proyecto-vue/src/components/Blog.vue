<template>
  <div class="border">
    <h1 v-text="tituloEntrada"></h1>
    <router-link :to="paginar(false)">Anterior</router-link> |
    <router-link :to="paginar(true)">Siguiente</router-link> |
    <router-link :to="{ name: 'comentarios', params: { user: '1' } }"
      >Comentarios x obj</router-link
    >
    |
    <router-link to="/comentarios/2">Comentarios x ruta</router-link>
    |
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    paginar(siguiente) {
      let entrada = parseInt(this.$route.params.entrada);
      if (siguiente)
        return entrada < 10 ? `/blog/${entrada + 1}` : `/blog/${entrada}`;
      else return entrada > 1 ? `/blog/${entrada - 1}` : `/blog/${entrada}`;
    }
  },
  computed: {
    tituloEntrada() {
      return `Entrada ${this.$route.params.entrada} del Blog`;
    }
  }
};
</script>

<style>
.border {
  border: 1px solid blue;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
