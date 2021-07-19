<template>
  <div class="border-comentarios">
    <p>
      <b>Juan ({{ $route.params.user }}) dice:</b>
      <label>Es un gran blog. Los sigo.</label>
    </p>
    <!-- <p>
      <b>Carlos dice:</b>
      <label>Excelente contenido.</label>
    </p> -->
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  }
};
</script>
<style>
.border-comentarios {
  border: 1px solid red;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
