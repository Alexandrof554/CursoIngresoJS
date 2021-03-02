function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	let nota;
	
	nota = Math.floor(Math.random()*10) + 1;

	if (nota > 9){
		alert(nota +" Exelente");
	}
	else if (nota >= 4 ){
		alert(nota +" Aprobo");
	}else {
		alert (nota +" Vamos, la proxima se puede");
	}




}//FIN DE LA FUNCIÓN