var miBtn = document.getElementById("boton");
miBtn.addEventListener("click", () => {
  let texto = document.querySelector(".input-a-buscar");
  document.querySelector(
    ".resultado"
  ).innerHTML = `Estas buscando nada mes que: ${texto.value}`;
});
