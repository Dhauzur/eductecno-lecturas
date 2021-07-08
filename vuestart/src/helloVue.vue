<template>
  <div class="hellovue">
    {{ message1 }}
  </div>
</template>

<script>
export default {
  name: "HelloVue",
  data() {
    return {
      message1: "🤙 .... Soy otro Componente .... 🤙"
    };
  }
};
</script>

<style scoped>
.hellovue {
  color: royalblue;
  font-size: 20px;
}
</style>
