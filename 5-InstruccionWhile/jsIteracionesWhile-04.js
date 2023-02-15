/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
MiBotonUTNnav */
function mostrar()
{
	let numeroIngresado;
	let mensaje;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	
	while ( isNaN (numeroIngresado) || numeroIngresado < -1 || numeroIngresado > 10){

		numeroIngresado = prompt("ERROR: ingrese un número entre 0 y 10.");
	}

	mensaje = (numeroIngresado + " es correcto");

	document.getElementById("txtIdNumero").value = mensaje;

}//FIN DE LA FUNCIÓN