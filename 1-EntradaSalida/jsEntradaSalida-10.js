/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let numero;
	let pocent;
	let resultado; //variables
	numero = document.getElementById("txtIdImporte").value; //tomar variable del cuadro en la pagina
	numero = parseFloat(numero); //convertir de texto a numero 
	porcent = numero *25 /100; //sacar el 25% del total (con *0.25 tambien funciona)
	resultado = numero - porcent; //restar el porcentaje sacado al numero
	document.getElementById("txtIdResultado").value = resultado.toFixed(2); //mostrar resultado 
}
