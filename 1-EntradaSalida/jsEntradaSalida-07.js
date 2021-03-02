/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
//arriba de todo se puede usar variable para todo (no es necesario) variable e let.
function sumar()
{	
	let num1;
	let num2;
	let variable;
	num1 = document.getElementById("txtIdNumeroUno").value; 
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);
	variable = num1 + num2; //se puede colocar - + * /
	alert("la suma es " + variable) //lo del mas es concatenar
}

function restar()
{
	let num1;
	let num2;
	let variable;
	num1 = document.getElementById("txtIdNumeroUno").value; 
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);
	variable = num1 - num2;
	alert("la Resta es " + variable)
}

function multiplicar()
{ 
	let num1;
	let num2;
	let variable;
	num1 = document.getElementById("txtIdNumeroUno").value; 
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);
	variable = num1 * num2;
	alert("la Multiplicacion es " + variable)
}

function dividir()
{
	let num1;
	let num2;
	let variable
	num1 = document.getElementById("txtIdNumeroUno").value; 
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);
	variable = num1 / num2;
	alert("la Division es " + variable)
}

