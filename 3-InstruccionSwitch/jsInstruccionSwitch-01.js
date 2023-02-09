function mostrar()
{
	/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/

	let mesDelAño;
	let mensaje;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje = "Que comiences bien el año!!!."
			break;
		case "Marzo":
			mensaje = "A clases!!!."
			break;
		case "Julio":
			mensaje = "Se vienen las vacaciones!!!."
			break;
		case "Diciembre":
			mensaje = "Felices fiesta!!!."
			break;
		default: 
			mensaje = "Es un mes aburrido"
	}

			alert (mensaje)

}//FIN DE LA FUNCIÓN