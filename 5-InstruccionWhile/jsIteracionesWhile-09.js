/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variables
	banderaDelPrimero=true;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado =parseInt(prompt("ingrese el primer numero"))
		while (isNaN(numeroIngresado)){

			numeroIngresado =parseInt(prompt("ERROR:ingrese un numero" ))
		}
		if (banderaDelPrimero)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}
		else if(numeroMaximo < numeroIngresado)
		{
			numeroMaximo = numeroIngresado;
		}
		else if(numeroMinimo > numeroIngresado)
		{
			numeroMinimo = numeroIngresado;
		}
		respuesta=prompt("Desea continuar? si/ no");
	}

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN