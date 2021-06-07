let form = document.getElementById("formulario");
function login(event) {
  event.preventDefault();
  var email = document.querySelector(".email");
  var password = document.querySelector(".password").value;
  var patron1 = /gato/i;
  if (password.match(patron1)) {
    alert("Palabra ingresada permitida");
  } else {
    alert("La palabra ingresada no es permitida");
  }
  alert("Ingreso exitoso: " + password);
}
form.addEventListener("submit", login);

// let form = document.getElementById("formulario");
// form.addEventListener("submit", event => {
//   event.preventDefault();
//   var email = document.querySelector(".email");
//   var password = document.querySelector(".password");
//   document.querySelector(".resultado").innerHTML = `Bienvenido
// ${email.value}`;
//   alert("Ingreso exitoso: " + email.value);
// });

// let button = document.getElementById("buttonSubmit");
// button.addEventListener("click", () => {
//   var email = document.querySelector(".email");
//   var password = document.querySelector(".password");
//   document.querySelector(".resultado").innerHTML = `Bienvenido
// ${email.value}`;
//
// });
