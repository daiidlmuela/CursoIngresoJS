/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contPositivos;
	let contNegativos;
	let contCeros;
	let contpares;
	let promedioNegativos;
	let promedioPositivos;
	let diferencia;

	contNegativos = 0;
	contPositivos = 0;
	contCeros =0;
	contpares = 0;
	sumaPositivos =0;
	sumaNegativos = 0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado =parseInt(prompt("ingrese el primer numero"))
		while (isNaN(numeroIngresado)){

			numeroIngresado =parseInt(prompt("ERROR:ingrese un numero" ))
		}

		if (numeroIngresado < 0){
			//punto 1 y 4
			sumaNegativos = sumaNegativos + numeroIngresado
			contNegativos = contNegativos + 1
		}
		else if (numeroIngresado > 0)
		{//punto 2 y 3
			sumaPositivos = sumaPositivos + numeroIngresado
			contPositivos = contPositivos + 1
		}
		else 
		{
			contCeros = contCeros + 1;
		}
		if(numeroIngresado % 2 ==0)
		{
			contpares = contpares + 1;
		}

		respuesta=prompt("desea continuar? si/no");
	}//fin del while
	promedioPositivos = sumaPositivos/contPositivos;
	promedioNegativos = sumaNegativos/contNegativos;

	diferencia = sumaPositivos - sumaNegativos;

	document.write("la suma de negativos es :"+sumaNegativos + "<br>");
	document.write("la suma de positivos es :"+sumaPositivos +"<br>");
	document.write("la cantidad de positivos es :"+ contPositivos + "<br>");
	document.write("la cantidad de negativos es :"+ contNegativos + "<br>");
	document.write("la cantidad de ceros es :"+ contCeros + "<br>");
	document.write("la cantidad de pares es :"+ contpares + "<br>");
	document.write("promedio de negativos es :"+ promedioNegativos + "<br>" );
	document.write("promedio de positivos es :"+ promedioPositivos + "<br>" );

}//FIN DE LA FUNCIÓN