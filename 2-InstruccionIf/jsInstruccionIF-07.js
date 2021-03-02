function mostrar()
{
	let edad;
	let estado;

	// edad menor a 18 y estado distinto de "soltero"
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;
	if (edad < 18 && estado != "Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	}
/*
// edadad menor a 18 y estado casado o estado divorciado 
if (edad < 18 && (estado == "Casado" || estado == "Divorciado")){
	alert("Es muy pequeño para NO ser soltero");
}
*/


}//FIN DE LA FUNCIÓN