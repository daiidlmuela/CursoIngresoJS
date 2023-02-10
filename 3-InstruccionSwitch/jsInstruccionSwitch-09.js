function mostrar()
{


	let porcentaje;
	let destinoIngresado;
	let estacionIngresada;
	let estadia;
	let precioFinal;

	estacionIngresada = document.getElementById ("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	estadia = 15000;
	porcentaje = 0;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cataratas" :
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
				case "Cordoba":
					porcentaje = -10;
	
			}
			break;

		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cataratas" || "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
			}
			break;
		case "Otoño " && "Primavera":
				switch (destinoIngresado)
				{
					case "Bariloche":
						porcentaje = 10;
						break;
					case "Cataratas":
						porcentaje = 10;
						break;
					case "Mar del plata":
						porcentaje = 10;
					case "Cordoba":
						porcentaje = 0
						break;
			}
			break;
	 }

	precioFinal= estadia + (estadia * porcentaje /100);

	alert (precioFinal)
}