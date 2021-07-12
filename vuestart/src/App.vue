<template lang="html">
  <div id="app">
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
        <li v-for="fruta in frutas">
          <span>{{ fruta.name }}</span>
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
      checked: true,
      frutas: [{ name: "Frutillas" }, { name: "Manzanas" }, { name: "Kiwis" }],
      mostrar: true,
      message: "Desafio  Latam!!! 🤟🤟",
      pathImage:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png"
    };
  },
  methods: {
    metodoDelPadre() {
      console.log("Evento del hijo controlado");
      this.checked = !this.checked;
    },
    mostrarComponente() {
      console.log("Soy un metodo");
      this.mostrar = !this.mostrar;
    }
  }
};
</script>
