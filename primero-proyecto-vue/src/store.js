import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 1. state
// 2. getter
// 3. mutationes
// 4. actions

const store = new Vuex.Store({
  state: {
    ocupado: false,
    totalVentas: 0,
    productos: [
      { id: "0001", nombre: "Agua sin gas", stock: 30, precio: 670 },
      { id: "0002", nombre: "Leche extra proteína", stock: 25, precio: 1190 },
      { id: "0003", nombre: "Huevos Docena", stock: 10, precio: 1590 },
      {
        id: "0004",
        nombre: "Pan marraqueta integral 1kg",
        stock: 100,
        precio: 990
      },
      { id: "0005", nombre: "Avena multisemillas", stock: 0, precio: 1390 }
    ]
  },
  getters: {
    productos: state => state.productos,
    productosConStock: state => {
      return state.productos.filter(producto => producto.stock > 0);
    },
    productosBaratos: (state, getters) => {
      console.log(getters.productosConStock);
      return getters.productosConStock.filter(
        producto => producto.precio < 1000
      );
    },
    productoDisponiblePorId: (state, getters) => id => {
      return getters.productosConStock.filter(producto => {
        return producto.id == id;
      });
    }
  }
});

export default store;
