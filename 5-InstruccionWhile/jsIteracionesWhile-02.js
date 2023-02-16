/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
/* function mostrar()
{
	let i;

	i = 11

	while( i > 0)
	{
		i= i -1;

		console.log (i)
	}

}//FIN DE LA FUNCIÓN */
function mostrar()
{
/* 	while 2 bis: Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 
y menores 20 (inclusive en ambos casos)*/

	let numeroIngresado;
	let contador;
	let contadorMayor;
	let contadorMenor;
	let respuesta;

	respuesta = "si"
	contador = 5;

	while (respuesta == "si")
	{
		numeroIngresado= parseInt(prompt("Ingrese un numero"))

		while(isNaN(numeroIngresado)) 
		{
			numeroIngresado = parseInt(prompt("ERROR:Ingrese un numero "))
		}
		if(numeroIngresado >10 )
		{
			contadorMayor = contadorMayor + 1;
		}
		else if (numeroIngresado < 20)
		{
			contadorMenor = contadorMenor + 1;
		}
		numeroIngresado= parseInt(prompt("desea ingresar otro un numero: si / no"))

	}
}