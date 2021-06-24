// JavaScript Document
var texto = "";

function Consultorio(nombre, paciente) {
  this.nombre = nombre;
  this.paciente = paciente || [];
}

function Paciente(nombre, edad, rut, diagnotico) {
  var _nombre = nombre;
  var _edad = edad;
  var _rut = rut;
  var _diagnotico = diagnotico;
  Object.defineProperty(this, "_getNombre", {
    get: function() {
      return _nombre;
    }
  });
  Object.defineProperty(this, "_getEdad", {
    get: function() {
      return _edad;
    }
  });
  Object.defineProperty(this, "_getRut", {
    get: function() {
      return _rut;
    }
  });
  Object.defineProperty(this, "_getDiagnostico", {
    get: function() {
      return _diagnotico;
    }
  });
  Object.defineProperty(this, "_setNombre", {
    set: function(nombre) {
      _nombre = nombre;
    }
  });
  Object.defineProperty(this, "_setEdad", {
    set: function() {
      _edad = edad;
    }
  });
  Object.defineProperty(this, "_setRut", {
    set: function() {
      _rut = rut;
    }
  });
  Object.defineProperty(this, "_setDiagnostico", {
    get: function() {
      _diagnotico = diagnotico;
    }
  });
}

Paciente.prototype.setNombre = function(nombre) {
  this._setNombre = nombre;
};

Paciente.prototype.setEdad = function(edad) {
  this._setEdad = edad;
};

Paciente.prototype.setRut = function(rut) {
  this._setRut = rut;
};

Paciente.prototype.setDiagnostico = function(diagnotico) {
  this._setDiagnostico = diagnotico;
};

Paciente.prototype.getNombre = function(nombre) {
  return this._getNombre;
};

Paciente.prototype.getEdad = function(edad) {
  return this._getEdad;
};

Paciente.prototype.getRut = function(rut) {
  return this._getRut;
};

Paciente.prototype.getDiagnostico = function(diagnotico) {
  return this._getDiagnostico;
};

Consultorio.prototype.setAgregarPaciente = function(paciente_nuevo) {
  this.paciente.push(paciente_nuevo);
};

var paciente1 = new Paciente("Marcelo", 20, "111-1", "ANEMIA");
var consultorio1 = new Consultorio("Arica", [paciente1]);

//----------- guardar pacientes ------------------//
const guardar_pacientes = () => {
  var an = document.getElementById("nombre_p").value;
  var ae = parseInt(document.getElementById("edad_p").value);
  var ar = document.getElementById("rut_p").value;
  var ad = document.getElementById("diag_p").value;
  if (an.length == 0) {
    alert("Nombre Vacío");
    document.getElementById("nombre_p").focus();
    return;
  }

  if (isNaN(ae) || ae < 0) {
    alert("Edad debe ser mayor o igual a 0");
    document.getElementById("edad_p").focus();
    return;
  }
  if (ar.length == 0) {
    alert("Rut Vacío");
    document.getElementById("rut_p").focus();
    return;
  }
  if (ad.length == 0) {
    alert("Diagnóstico Vacío");
    document.getElementById("diag_p").focus();
    return;
  }

  var pacienteX = new Paciente(an, ae, ar, ad);
  consultorio1.setAgregarPaciente(pacienteX);
  document.getElementById("nombre_p").value = "";
  document.getElementById("edad_p").value = "";
  document.getElementById("rut_p").value = "";
  document.getElementById("diag_p").value = "";
  alert("paciente ingresado");
};

//----------- mostrar pacientes ------------------//
const mostrar_pacientes = () => {
  var divr = document.getElementById("div_mostrar");

  var pac = [];
  var $i = 0;

  $.each(consultorio1.paciente, (index, value) => {
    pac = [$i][0] = index;
    pac = [$i][1] = value;
    $i++;
  });
  $texto =
    '<br><br><p ">-----------------  LISTADO DE PACIENTES -------------- </p>';

  for ($i = 0; $i < consultorio1.paciente.length; $i++) {
    $texto +=
      "<p>NOMBRE:" +
      consultorio1.paciente[$i].getNombre() +
      ", EDAD:" +
      consultorio1.paciente[$i].getEdad() +
      ", RUT:";
    $texto +=
      consultorio1.paciente[$i].getRut() +
      ", DIAGNOSTICO:" +
      consultorio1.paciente[$i].getDiagnostico() +
      "</p>";
    // console.log('111:'+consultorio1['paciente'][$i].nombre);
  }

  document.getElementById("div_mostrar").innerHTML = $texto;
};

//--------------------- buscar paciente ---------------------//
const buscar_pacientes = () => {
  var abuscar = document.getElementById("nombre2_p").value;
  console.log(consultorio1);
  const resultado = consultorio1.paciente.find(
    pac => pac.getNombre() === abuscar
  );
  console.log(resultado);
  if (resultado !== "undefined") {
    $texto =
      '<br><br><p ">-----------------  PERSONA ENCONTRADA -------------- </p>';
    $texto +=
      resultado.getNombre() +
      ", EDAD:" +
      resultado.getEdad() +
      ", RUT:" +
      resultado.getRut() +
      ", DIAGNOSTICO:" +
      resultado.getDiagnostico();
    document.getElementById("p_buscar").innerHTML = $texto;
  }
};
