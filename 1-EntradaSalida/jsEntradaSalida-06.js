/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let suma; //resultado
	//o let num1, num2 
	num2 = document.getElementById("txtIdNumeroDos").value;		//solicitar numero 2
	//parseInt(num1);//codigo para pasar de txt a numero , "parsefloat" completo si es con . o ,
	//parseInt(num2);
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value); //otra solucion
	num2 = parseInt(num2);
	suma = num1 + num2;     //sumar var 1 + var 2
	alert("La suma es " + suma);
 
}

