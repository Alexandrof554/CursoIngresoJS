/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
  let clave;
  let Intentos;
  clave = prompt("Ingrese la Clave");
  Intentos = 3;
  if (clave == "utn750") {
    alert("Clave correcta");
  } else {
    while (clave != "utn750" && Intentos >= 1) {
      alert("Clave incorrecta, intentos: " + Intentos);
      clave = prompt("Ingrese la Clave");
      Intentos = Intentos - 1;
    }
    if (Intentos == 0) {
      alert("Se supero el numero de intentos.");
    } else {
      alert("Clave Correcta");
    }
  }
  // variable++ aumente la variable en 1
} //FIN DE LA FUNCIÓN
