/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre; //guardar variable	(declarar variable)
	nombre = prompt ("ingrese su nombre"); //solicitar variable
	document.getElementById("txtIdNombre").value = nombre; //guardar variable en texto en pagina
}

