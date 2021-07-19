<template lang="html">
  <div id="app">
    <h2>Cantidad de frutas : {{ cantidadDeFrutas }}</h2>
    <button @click="mostrarComponente">Mostrar u ocultar</button>
    <div v-if="mostrar">
      {{ message }}
      <img :src="pathImage" />
      <HelloVue
        :message1="' (Soy un comp. hijo)'"
        @MePongoALlorar="comprarJuguete"
      />
      <!-- @ presencia de un evento      -->
      <input type="text" v-model="message" />
      <input type="checkbox" v-model="checked" />

      <ul>
        <li v-for="(fruta, index) in frutas">
          <!-- oye tbm me puedes mandar mi css, mediante un objeto... y ese obj puede ser un;
           variable computed,
           una props
           una variable
         -->
          <!-- este objeto se escribe { color: 'red', 'font-size': '12px !important;' } -->
          <!-- class binding - clase reactiva -->
          <!-- :class="{ propiedadNombreClase: seraIngresadaSiempreYCuandoLaCondicionSeaVerdadera }" -->
          <span
            style="font-size: 12px; color: red;"
            :style="[frutaUnica, borderFruta]"
            class="mi-clase-rojo"
            :class="{ rayado: fruta.comprado && checked }"
            @click="eliminarFruta(index)"
            >{{ fruta.name }}</span
          >
        </li>
      </ul>
    </div>
    <div v-else-if="mostrar == undefined">
      Yo necesito estar debajo de mi IF <3
    </div>
    <div v-else>
      Ultimo caso
    </div>
  </div>
</template>

<script>
import HelloVue from "./helloVue.vue";

export default {
  name: "app",
  components: {
    HelloVue
  },
  data() {
    return {
      borderFruta: {
        "border-bottom": "2px solid black"
      },
      unaNuevaVariable: "blue",
      checked: true,
      frutas: [
        { name: "Frutillas", comprado: true },
        { name: "Manzanas", comprado: true },
        { name: "Kiwis", comprado: false }
      ],
      mostrar: true,
      message: "Desafio  Latam!!! 🤟🤟",
      pathImage:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png"
    };
  },
  computed: {
    frutaUnica() {
      if (this.checked) return { "font-size": "12px", color: "red !important" };
      else
        return { "font-size": "10px", color: unaNuevaVariable + " !important" };
    },
    cantidadDeFrutas() {
      if (this.checked)
        return (
          "Desactive funcion checked, " +
          this.frutas[this.frutas.length - 1].name
        );
      return this.frutas.length;
    }
  },
  beforeCreate() {
    console.log("before Create : ", this.message);
  },
  created() {
    console.log(" Created : ", this.message);
  },
  beforeMount() {
    console.log("before mount", this.message);
  },
  mounted() {
    console.log("mounted", this.message);
  },
  beforeUpdate() {
    console.log("before Update", this.message);
  },
  updated() {
    console.log("Updated", this.message);
  },
  methods: {
    eliminarFruta() {},
    comprarJuguete() {
      console.log("Evento del hijo super bien criado ");
      this.checked = !this.checked;
      this.frutas.push({ name: "NuevaFruta", comprado: true });
    },
    mostrarComponente() {
      //FETCH  de superheroes
      // data de la api
      // modificamos el objeto descargado
      this.pathImage = "https://ruta.com/superhero/10";
      console.log("Soy un metodo");
      this.mostrar = !this.mostrar;
    }
  }
};
</script>

<style>
.rayado {
  text-decoration: line-through;
}
</style>
