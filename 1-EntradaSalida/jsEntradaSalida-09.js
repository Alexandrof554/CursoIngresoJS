/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let suma
	let resultado;
	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseFloat(sueldo); //parcefloat es como parceint pero con decimales
	suma = sueldo *10 /100;
	resultado = sueldo + suma;
	document.getElementById("txtIdResultado").value = resultado.toFixed(2); //tofixed es para que solo muestre 2 decimales
}
