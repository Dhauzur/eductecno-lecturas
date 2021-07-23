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
      return getters.productosConStock.filter(
        producto => producto.precio < 1000
      );
    },
    productoDisponiblePorId: (state, getters) => id => {
      return getters.productosConStock.filter(producto => {
        return producto.id == id;
      });
    }
  },
  mutations: {
    modificarOcupado: state => {
      state.ocupado = !state.ocupado;
    },
    agregarStock: (state, producto) => {
      state.productos.map(p => {
        //Aqui hacer algo con el obj. producto
        if (p.id == producto.id) p.stock++;
      });
    },
    venderProducto: (state, producto) => {
      state.productos.forEach(p => {
        if (p.id == producto.id && p.stock > 0) {
          p.stock--;
        }
      });
    },
    actualizarTotal: (state, producto) => {
      state.totalVentas += producto.precio;
    }
  },
  actions: {
    modificarOcupado: ({ commit }) => {
      commit("modificarOcupado");
    },
    vender({ dispatch }, producto) {
      dispatch("procesarVenta", producto)
        .then(() => {
          alert("Venta procesada exitosamente");
          dispatch("actualizarTotal", producto);
        })
        .catch(e => {
          //Y el catch, es para capturar ERRORES
          //SI NO HAY STOCK, ES UN PROCESO Q TIENE VALIDAR ESO
          //SI EL PRODUCTO NO EXISTE, ES UN GETTER Q LO DEBE FILTRAR
          alert("Venta rechazada. Ha surgido un error inesperado.");
          console.log(e);
        });
      //nada mas... ¿para q usar await, si dsp del await... no hay nada?
    },
    procesarVenta: ({ commit, state }, producto) => {
      return new Promise((resolve, reject) => {
        let tiempoEjecucion = Math.floor(Math.random() * 5000 + 1);
        setTimeout(() => {
          let resultado = false;
          state.productos.forEach(p => {
            if (p.id == producto.id && p.stock > 0) {
              commit("venderProducto", producto);
              resultado = true;
            }
          });
          if (resultado) resolve();
          else reject();
        }, tiempoEjecucion);
      });
    },
    actualizarTotal: ({ commit }, producto) => {
      return new Promise(resolve => {
        let tiempoEjecucion = Math.floor(Math.random() * 3000 + 1);
        setTimeout(() => {
          commit("actualizarTotal", producto);
          resolve();
        }, tiempoEjecucion);
      });
    }
  }
});

export default store;
