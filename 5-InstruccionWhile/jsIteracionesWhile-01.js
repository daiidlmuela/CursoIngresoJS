/* /*
al presionar el botón mostrar 125 repeticiones 
con números ASCENDENTE, desde el 1 al 125
a) contar numeros IMPARES
b) contar numeros PARES
c) el total de los numeros impares.
d) el total de los numeros impares.
e) el mayor de los numeros impares*/
/* function mostrar()
{

	let i;
	let contadorNumeroPares;
	let contadorNumeroimpares;
	let acumuladorNumerosImpares;
	let acumuladorNumerosPares;
	let mayorNumeroImpar;

	i = 1;
	contadorNumeroPares = 0;
	contadorNumeroimpares = 0;
	acumuladorNumerosImpares = 0;
	mayorNumeroImpar = 1;

	while (i < 125 && i > 10)
{
	if (i%2 != 0)
	{
		contadorNumeroimpares = contadorNumeroimpares + 1;

		acumuladorNumerosImpares = acumuladorNumerosImpares +1;

		if(i > mayorNumeroImpar)
		{
			mayorNumeroImpar = i;
		}
	}
	else
	{
		contadorNumeroPares = contadorNumeroPares + 1;
		acumuladorNumerosPares = acumuladorNumerosPares + i;
	}
	i = i + 1;

	consola.log(i );
}

	console.log("La cantidad de numeros impares es: " +contadorNumeroimpares);
	console.log("La cantidad de numeros pares es: " + contadorNumeroPares);
	console.log("El total de la suma de los numeros impares: " + acumuladorNumerosImpares);
	console.log ("El total de los numeros pares: " + acumuladorNumerosPares);
	console.log ("El mayor de los numeros impares: " + mayorNumeroImpar)


	alert('iteración while'); 
}//FIN DE LA FUNCIÓN */

//al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
function mostrar()
{

	let i;

	i = 0

	while( i < 10)
	{
		i= i +1;

		console.log (i)
	}







}