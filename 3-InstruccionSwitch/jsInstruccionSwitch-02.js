function mostrar()
{
	//tomo el mes
	let mes= document.getElementById("txtIdMes").value;
	switch(mes){ 											//comienzo shitch (variable) en if es (condicion)
		case "Enero" : 										//condiciones para entrar al switch
			alert(mes + ", Falta para el invierno.");		
			break;
		case "Febrero":
			alert(mes + ", Falta para el invierno.");
			break;	
		case "Marzo": 
			alert(mes + ", Falta para el invierno.");
			break;
		case "Abril":
			alert(mes + ", Falta para el invierno.");
			break;
		case "Mayo":
			alert(mes + ", Falta para el invierno.");
			break;
		case "Junio":
			alert(mes + ", Falta para el invierno.");
			break;	
		case "Julio":
			alert(mes +", Abrigate que hace frio.");
			break;
		case "Agosto":
			alert(mes + ", Abrigate que hace frio.");
			break;
		default: //se puede usar por que hay lista desplegable.
			alert(mes +" Ya pasamos el frio, ahora calor");
	}

	/*
	case "enero":
	case "febrero":
	case "marzo":
	case "abril":
		alert("mes + ", Falta para el invierno.")
	break;
	case "Julio":
	case "Agosto":
		alert(mes +", Abrigate que hace frio.")

	*/
}	//FIN DE LA FUNCIÓN