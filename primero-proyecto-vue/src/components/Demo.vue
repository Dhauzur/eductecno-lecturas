<template>
  <div>
    <h1>Demostración de transiciones</h1>
    <button @click="mostrarDemo">Transición usando opacity y padding</button>
    <transition name="mi-transicion">
      <router-view v-if="mostrar"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: false
    };
  },
  methods: {
    mostrarDemo() {
      this.mostrar = !this.mostrar;
    }
  }
};
</script>

<style scoped>
.mi-transicion-enter-active,
.mi-transicion-leave-active {
  transition: opacity 0.5s, padding 1s;
}
.mi-transicion-enter,
.mi-transicion-leave-to {
  opacity: 0;
  padding: 10px;
}
</style>
