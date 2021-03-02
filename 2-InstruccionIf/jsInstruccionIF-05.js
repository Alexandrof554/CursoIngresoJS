function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	alert(edad);
	if(edad <= 17){
		if(edad >= 13){
			alert("No es adolescente");
		}
		else{
			alert("Es adolescente");
		}
	}
	else{
		alert("Es adolescente");
	}
	
}//FIN DE LA FUNCIÓN

/* 
otra solucion
if(edad >=13 && edad <=17){
	alert("No es adolescente")
}
else{
	alert("Es adolescente")
}
operador or doble pipe ||
operador and doble ampersan &&

Del profesor

if(edad<13 || edad>17 ){
	alert("Es adolescente")
}


*/