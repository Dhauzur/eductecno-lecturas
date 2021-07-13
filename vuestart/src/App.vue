<template lang="html">
  <div id="app">
    <h2>Cantidad de frutas : {{ cantidadDeFrutas }}</h2>
    <button @click="mostrarComponente">Mostrar u ocultar</button>
    <div v-if="mostrar">
      {{ message }}
      <img :src="pathImage" />
      <input v-model="message" />
      <HelloVue
        :message1="' (Soy un comp. hijo)'"
        @eventoDelHijo="metodoDelPadre"
      />
      <input type="checkbox" id="checkbox" v-model="checked" />
      {{ checked }}
      <ul>
        <li v-for="(fruta, index) in frutas">
          <span
            :style="[frutaUnica, borderFruta]"
            :class="{ rayado: fruta.comprado && checked }"
            @click="eliminarFruta(index)"
            >{{ fruta.name }}</span
          >
        </li>
      </ul>
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
      frutaUnica: {
        "font-size": "12px",
        color: "red !important"
      },
      borderFruta: {
        "border-bottom": "2px solid black"
      },
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
    metodoDelPadre() {
      console.log("Evento del hijo controlado");
      this.checked = !this.checked;
      this.frutas.push({ name: "NuevaFruta", comprado: true });
    },
    mostrarComponente() {
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
