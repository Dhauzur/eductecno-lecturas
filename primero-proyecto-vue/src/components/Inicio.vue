<template>
  <div class="hello">
    <h1>Inicio primer proyecto vue: {{ titulo }}</h1>
    <h2>{{ msg }}</h2>
    <h3>{{ ocupado }}</h3>
    {{ totalVentas }}
    <input type="text" v-model="busquedaPorId" />
    <h1>Producto filtrado</h1>
    <ul>
      <li v-for="(producto, clave) in productoDisponiblePorId" :key="clave">
        <label>{{ producto.nombre }}:{{ producto.id }}</label>
      </li>
    </ul>
    <h1>Productos con stock</h1>
    <ul>
      <li v-for="(producto, clave) in productosConStock" :key="clave">
        <label>{{ producto.nombre }}:{{ producto.stock }}</label>
      </li>
    </ul>
    <h1>PRoductos baratos</h1>
    <ul>
      <li v-for="(producto, clave) in productosBaratos" :key="clave">
        <label>{{ producto.nombre }}:{{ producto.precio }}</label>
      </li>
    </ul>
    <router-view name="lazyloading" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      busquedaPorId: ""
    };
  },
  // //Version 2.0 full usada con mapHelpers (mapState, mapGetters, mapMutations, mapActions)
  computed: {
    productoDisponiblePorId() {
      return this.$store.getters.productoDisponiblePorId(this.busquedaPorId);
    },
    ...mapGetters(["productosBaratos", "productosConStock"]),
    titulo() {
      return "Mi pelicula";
    },
    ...mapState({
      ocupado: state => {
        return state.ocupado ? "Si, estado ocupado" : "No, no esta ocupado";
      },
      totalVentas: state => {
        return `Total: $ ${state.totalVentas} `;
      }
    })
  }
  // //Version 1.0 alternativa usada con mapHelpers (mapState, mapGetters, mapMutations, mapActions)
  // PRoblema 1: No es escalable porq da poco espacio para modfiicar posteriormente
  // PRoblema 2: No estaria utilizando var computed del componen
  // computed: mapState(["ocupado", "totalVentas"])
  // //Version 1.0 full usada con mapHelpers (mapState, mapGetters, mapMutations, mapActions)
  // computed: mapState({
  //   ocupado: state => {
  //     return state.ocupado ? "Si, estado ocupado" : "No, no esta ocupado";
  //   },
  //   totalVentas: state => {
  //     return `Total: $ ${state.totalVentas} `;
  //   }
  // })
  //Version inicial o mas basica
  // computed: {
  //      miEdad() {
  //        return this.persona.edad
  // },
  //   ocupado() {
  //     let ocupado = this.$store.state.ocupado
  //       ? "Si, estado ocupado"
  //       : "No, no esta ocupado";
  //     return ` Estado de VUEX:  ${ocupado}`;
  //   },
  //   totalVentas() {
  //     return ` Total: $${this.$store.state.totalVentas} `;
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
