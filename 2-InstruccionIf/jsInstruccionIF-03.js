function mostrar()
{
	//tomo la edad  
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad <= 0){ //este lo puse yo
		alert("Edad invalida");
	}
	else{
		if(edad >= 18){ // si
			alert("Mayor de edad");
		}
		else{  //si no (son excluyentes)
			alert("Es menor de edad");
		}
	}

}//FIN DE LA FUNCIÓN