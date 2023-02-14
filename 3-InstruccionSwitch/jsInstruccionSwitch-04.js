function mostrar()
{
	/* al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */

	//tomo el mes

	let mesDelAño;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño)
	{	
		case "Febrero":
			mensaje = "Tiene 28 dias."
			break;
		case "Abril":
		case "junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Tiene 30 dias"
		
		default:
			mensaje = "Tiene 31 dias"
	}
	alert(mensaje);
	

}//FIN DE LA FUNCIÓN