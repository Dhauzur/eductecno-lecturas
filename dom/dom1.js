document.getElementById("textoSaludo").innerHTML =
  "Hola, este párrafo fue modificado";
document.getElementById("entradaUno").value = "Click Aquí";
document.getElementById("entradaUno").type = "button";
document
  .getElementById("entradaUno")
  .setAttribute("style", "color: red; background-color: green");

////////////////////////////
let box = document.getElementById("box");
////////////////////////////

console.log("agregacion ");

//ES6 Javascript -> DOM
const miFuncion = () => alert("click sobre la caja");
// ERROR miFuncion = () => alert("click sobre la caja roja");
box.addEventListener("click", miFuncion);
console.log("agregacion OKKKK");

box.addEventListener("mouseover", function() {
  box.innerHTML = "El puntero está por encima";
});
box.addEventListener("mouseout", function() {
  box.innerHTML = "El puntero ya no está por encima";
});
