<template>
  <div class="hellovue">
    soy un primer texto estatico de un componente hijo
    {{ message1 }}
    <button @click="clickResponse">Llamar al padre</button>
  </div>
</template>

<script>
export default {
  name: "HelloVue",
  props: {
    message1: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      llorar: "hola papa"
    };
  },
  methods: {
    clickResponse(event) {
      //sentencias, condicion, iteracion x cada, emito un evento ,etc
      this.$emit("MePongoALlorar", llorar);
    }
  }
};
</script>

<style scoped>
.hellovue {
  color: royalblue;
  font-size: 20px;
  border: 1px solid black;
  padding: 20px;
}
</style>
