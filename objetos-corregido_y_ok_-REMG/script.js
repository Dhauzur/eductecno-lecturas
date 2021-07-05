// JavaScript Document
var $texto = '';


//--------------------- consultorio ----------------------//
function Consultorio(nombre, paciente) {
     this.nombre = nombre;
  this.paciente = paciente || [];
    
   /*     var _nombre = nombre;
        var _paciente = paciente || [];
    
        Object.defineProperty(this, "_getNombre", {
        get: function () {
        return _nombre;
        }
        });

        Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
        _nombre = nombre;
        }
        });


        Object.defineProperty(this, "_getPaciente", {
        get: function () {
        return _paciente;
        }
        });

        Object.defineProperty(this, "_setPaciente", {
        set: function (paciente) {
        _paciente = paciente;
        }
        }); */   
}


/*
Consultorio.prototype.getNombre = function(){
return this._getNombre;
};
Consultorio.prototype._setNombre = function(nombre){
this._setNombre = nombre;
};

Consultorio.prototype.getPaciente = function(){
return this._getPaciente;
};
Consultorio.prototype._setPaciente = function(paciente){
this._setPaciente = paciente;
};
*/
//---------------------fin consultorio-----------------------------//




//--------------------paciente----------------------------//

function Paciente(nombre, edad, rut, diagnostico) {
  //this.nombre = nombre;
    var _nombre = nombre;
    Object.defineProperty(this, "_getNombre", {
        get: function () {
        return _nombre;
        }
        });

        Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
        _nombre = nombre;
        }
        });

//  this.edad = edad;
    var _edad = edad;
    Object.defineProperty(this, "_getEdad", {
        get: function () {
        return _edad;
        }
        });

        Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
        _edad = edad;
        }
        });

 // this.rut = rut;
    var _rut = rut;
    Object.defineProperty(this, "_getRut", {
        get: function () {
        return _rut;
        }
        });

        Object.defineProperty(this, "_setRut", {
        set: function (rut) {
        _rut = rut;
        }
        });
    
 // this.diagnotico = diagnotico;
    var _diagnostico = diagnostico;
    Object.defineProperty(this, "_getDiag", {
        get: function () {
        return _diagnostico;
        }
        });

        Object.defineProperty(this, "_setDiag", {
        set: function (diagnostico) {
        _diagnostico = diagnostico;
        }
        });
     
}



Paciente.prototype.getNombre = function(nombre){
return this._getNombre;
};
Paciente.prototype._setNombre = function(nombre){
this._setNombre = nombre;
};

Paciente.prototype.getRut = function(rut){
return this._getRut;
};
Paciente.prototype._setRut = function(rut){
this._setRut = rut;
};

Paciente.prototype.getEdad = function(edad){
return this._getEdad;
};
Paciente.prototype._setEdad = function(edad){
this._setEdad = edad;
};

Paciente.prototype.getDiag = function(diagnostico){
return this._getDiag;
};
Paciente.prototype._setDiag = function(diagnostico){
this._setDiag = diagnostico;
};


//----------------fin ----paciente----------------------------//

Consultorio.prototype.setAgregarPaciente = function (paciente_nuevo) {
  this.paciente.push(paciente_nuevo);
}

var paciente1 = new Paciente('Marcelo', 20, '111-1', 'ANEMIA');
var consultorio1 = new Consultorio('Arica', [paciente1]);




//----------- guardar pacientes ------------------//
const guardar_pacientes = () => {

  var an = document.getElementById('nombre_p').value;
  var ae = parseInt(document.getElementById('edad_p').value);
  var ar = document.getElementById('rut_p').value;
  var ad = document.getElementById('diag_p').value;
  if (an.length == 0) {
    alert('Nombre Vacío');
    document.getElementById("nombre_p").focus();
    return;
  }


  if (isNaN(ae) || ae < 0) {
    alert('Edad debe ser mayor o igual a 0');
    document.getElementById("edad_p").focus();
    return;
  }
  if (ar.length == 0) {
    alert('Rut Vacío');
    document.getElementById("rut_p").focus();
    return;
  }
  if (ad.length == 0) {
    alert('Diagnóstico Vacío');
    document.getElementById("diag_p").focus();
    return;
  }

  var pacienteX = new Paciente(an, ae, ar, ad);
  consultorio1.setAgregarPaciente(pacienteX);
//var new Consultorio('Arica', [paciente1]);
    
  document.getElementById("nombre_p").value = '';
  document.getElementById("edad_p").value = '';
  document.getElementById("rut_p").value = '';
  document.getElementById("diag_p").value = '';
  alert('paciente ingresado');
}


//----------- mostrar pacientes ------------------//
const mostrar_pacientes = () => {
  var divr = document.getElementById("div_mostrar")

  //var pac = [];
  var $i = 0;

 /*$.each(consultorio1.paciente, (index, value) => {

    pac = [$i][0] = index;
    pac = [$i][1] = value;
    $i++;

  });*/

  $texto = '<br><br><p ">-----------------  LISTADO DE PACIENTES -------------- </p>';

//  for ($i = 0; $i < consultorio1['paciente'].length; $i++) {
      for ($i = 0; $i < consultorio1.paciente.length; $i++) {
    //$texto += '<p>NOMBRE:' + consultorio1['paciente'][$i].nombre + ', EDAD:' + consultorio1['paciente'][$i].edad + ', RUT:';
     $texto += '<p>NOMBRE:' + consultorio1.paciente[$i].getNombre() + ', EDAD:' + consultorio1.paciente[$i].getEdad() + ', RUT:';   
   // $texto += consultorio1['paciente'][$i].rut + ', DIAGNOSTICO:' + consultorio1['paciente'][$i].diagnotico + '</p>';
        $texto += consultorio1.paciente[$i].getRut() + ', DIAGNOSTICO:' + consultorio1.paciente[$i].getDiag() + '</p>';
   console.log(consultorio1.paciente[$i].nombre);
  }

  document.getElementById("div_mostrar").innerHTML = $texto;
}


//--------------------- buscar paciente ---------------------//
const buscar_pacientes = () => {
    var abuscar = document.getElementById("nombre2_p").value
   // const resultado = consultorio1['paciente'].find(pac => pac.nombre === abuscar);
 const resultado = consultorio1.paciente.find(
    pac => pac.getNombre() === abuscar
  );
    if (resultado === undefined ){} 
    else
    {
        alert('paso '+resultado )
      $texto = '<br><br><p ">-----------------  PERSONA ENCONTRADA -------------- </p>';
     // $texto += resultado.nombre + ', EDAD:' + resultado.edad + ', RUT:' + resultado.rut + ', DIAGNOSTICO:' + resultado.diagnotico;
      $texto +=
      resultado.getNombre() +
      ", EDAD:" +
      resultado.getEdad() +
      ", RUT:" +
      resultado.getRut() +
      ", DIAGNOSTICO:" +
      resultado.getDiag();
      document.getElementById("p_buscar").innerHTML = $texto;
    }
}