function mostrar()
{
	/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */

	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "En el destino hace frio"
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "En el destino hace calor"
			break;
		
	}

			alert (mensaje);
}//FIN DE LA FUNCIÓN