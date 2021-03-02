function mostrar()
{
	
let edad;
edad = parseInt(document.getElementById("txtIdEdad").value);
if(edad <= 17){
	if(edad >=13 && edad <= 17){
		alert("Es adolescente");
	}
	else {
		alert("Es menor de edad");
	}
}
else{
	alert("Es mayor de edad")
}
/*
Otra solucion
if(edad <= 17){
	if(edad >=13 && edad <= 17){
		alert("Es adolescente");
	}
	else {
		alert("Es menor de edad");
	}
}
else{
	alert("Es mayor de edad")
}
*/
}//FIN DE LA FUNCIÓN