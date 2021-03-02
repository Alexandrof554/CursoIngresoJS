/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre = document.getElementById("txtIdNombre").value; 	//solicitar valor nombre
	let edad = document.getElementById("txtIdEdad").value; //solicitar valor edad
	alert ("Usted se llama " + nombre + " y tiene " + edad + " años"); //mostrar en ventanilla Usted se llama nombre y tiene edad años
	//otro posible alert (`Usted se llama ${nombre}`)
}

