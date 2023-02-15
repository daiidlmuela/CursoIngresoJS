/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;
	let suma;
	
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado =parseInt(prompt("ingrese el primer numero"))
		while (isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("ERROR:ingrese un numero" ))
		}
		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else 
		{
			multiplicacionNegativos=numeroIngresado * multiplicacionNegativos
			
		}

		respuesta = prompt("Desea continuar? si/ no");
	}
	
	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN