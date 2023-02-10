function mostrar()
{
	/* Al ingresar una hora, informar:
	si está entre las 7 y las 11 : "Es de mañana.".
	si está entre las 12 y las 19 : "Es de tarde.".
	si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
	si NO está entre las 0 y las 24 : "la hora no existe.". */


	let mensaje;
	let horaDelDia;

	horaDelDia= document.getElementById("txtIdHora").value;


	if (horaDelDia >=0 && horaDelDia <=24 ){ 
		switch(horaDelDia)
	{  		
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje = "Es de mañana."
			break;

		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			mensaje = "Es la tarde"
			break;
		default:
			"Es de noche"
		}
	 } else {
			mensaje = "La hora no existe."

	 }
	 			alert (mensaje)

		 }

	




	













