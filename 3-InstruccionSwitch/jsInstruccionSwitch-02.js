function mostrar()
{
	/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/ 

let estaciones;
let mensaje;

	estaciones = document.getElementById("txtIdMes").value;

switch(estaciones)
{
	case "Enero":
		mensaje = "Ya pasamos el frio, ahora calor!!!."
		break;
	case "Febrero":
		mensaje = "Ya pasamos el frio, ahora calor!!!."
		break;
	case "Marzo":
		mensaje = "Falta para el invierno."
		break;
	case "Abril":
		mensaje = "Falta para el invierno."
		break;
	case "Mayo":
		mensaje = "Falta para el invierno."
		break;
	case "Junio":
		mensaje = "Falta para el invierno."
		break;
	case "Julio":
		mensaje = "Abrigate que hace frio."
		break;
	case "Agosto":
		mensaje = "Abrigate que hace frio."
		break;
	case "Septiembre":
		mensaje = "Ya pasamos el frio, ahora calor!!!."
		break;
	case "Octubre":
		mensaje = "Ya pasamos el frio, ahora calor!!!."
		break;
	case "Noviembre":
		mensaje = "Ya pasamos el frio, ahora calor!!!."
		break;
	case "Diciembre":
		mensaje = "Ya pasamos el frio, ahora calor!!!."
		break;
		
}

alert(mensaje);

}//FIN DE LA FUNCIÓN