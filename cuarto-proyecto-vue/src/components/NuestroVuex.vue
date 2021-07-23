<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Inicio primer proyecto vue: {{ titulo }}</h1>
    <h3>{{ ocupado }}</h3>
    <input type="button" value="Cambiar estado" @click="modificarOcupado" />
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
        <input type="button" value="+" @click="agregarStock(producto)" />
        <input type="button" value="Vender" @click="vender(producto)" />
      </li>
    </ul>
    <h1>PRoductos baratos</h1>
    <ul>
      <li v-for="(producto, clave) in productosBaratos" :key="clave">
        <label>{{ producto.nombre }}:{{ producto.precio }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
//Elementos principales de Vuex en el $store
// state (state), getters (getters), commit (Mutacion), dispatch (actions)

export default {
  name: "NuestroVuex",
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
      //Mala practica, por q un var comp, siempre deberia tener en observacion otra variable
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
  },
  methods: {
    nuevoMetodo() {
      return " hola";
    },
    ...mapMutations(["agregarStock", "modificarOcupado"]),
    ...mapActions(["modificarOcupado", "vender"])
  }
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
a {
  color: #42b983;
}
</style>
