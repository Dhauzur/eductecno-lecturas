<template>
  <div>
    <h1 v-text="cliente"></h1>
  </div>
</template>
<script>
export default {
  props: {
    cliente: {
      type: String,
      required: true
    }
  },
  computed: {
    titulo() {
      return `Nuestro cliente ${this.cliente} nos recomienda...`;
    }
  }
};
</script>
