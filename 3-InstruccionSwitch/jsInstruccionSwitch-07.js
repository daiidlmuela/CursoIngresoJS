function mostrar()
{
	/* Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste */



	let destinoIngresado;
	
	destinoIngresado=document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Se encuentra en el este del pais."
			break;
		case "Cataratas":
			mensaje = "Se encuentran en el norte del pais."
			break;
		case "Mar del plata":
			mensaje = "Se encuentra en el oeste del pais."
			break;
		case "Ushuaia":
			mensaje = "Se encuentra en el sur del pais."
			break;



	}

		alert(mensaje)





}//FIN DE LA FUNCIÓN