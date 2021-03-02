function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;
	
	switch(mes){  											//comienzo shitch (variable) en if es (condicion)
		case "Enero" : 										//condiciones para entrar al switch
			alert(mes + ", que comiences bien el año");		
			break;
		case "Marzo": 
			alert("a clases");
			break;
		case "Julio":
			alert(mes +", Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert(mes +", Felices fiestas!!!");
			break;
		default:
			alert(mes)
	}
	
	


	/*  con if
	let mes = document.getElementById("txtIdMes").value;
	if (mes == "Enero"){
		alert(mes + ", que comiences bien el año");
	}
	else if (mes == ("Marzo")){
		alert(mes +", A clases");
	}
	else if (mes = "Julio"){
		alert(mes +", Se vienen las vacaciones");
	}
	else if (mes = "Diciembre"){
		alert(mes +", Felices fiestas!!!");
	}
	else{
		alert(mes)
	}


	cuando usar SWITCH o IF ELSE
*/



}//FIN DE LA FUNCIÓN