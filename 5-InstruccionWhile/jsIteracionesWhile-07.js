/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let respuesta;
	let suma;
	do{
		suma = parseInt (prompt("Ingrese numero para sumar"));
		respuesta = prompt("Para agregar numeros ingrese s");
	}while(respuesta == "s");
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = suma/2
}//FIN DE LA FUNCIÓN

//numero par (numero % 2 == 0)
//isNaN(variable) true no es numero, false es numero