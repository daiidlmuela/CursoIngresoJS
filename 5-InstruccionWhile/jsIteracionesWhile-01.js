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
/* function mostrar()
{

	let i;

	i = 0

	while( i < 10)
	{
		i= i +1;

		console.log (i)
	}

} */

function mostrar()
{
//While 1 bis- edad y nombre , informar el nombre de la persona mas vieja y la mas joven

	let edad;
	let edadMayor;
	let edadMenor;
	let nombre;
	let nombreMayor;
	let nombreMenor;
	let banderaDelPrimero;
	let respuesta;
	let mensaje;
	
	respuesta = "si"

	banderaDelPrimero = true 

	while ( respuesta == "si")
	{ 
		nombre= prompt("Ingrese su nombre: ")
		edad = parseInt(prompt("Ingrese su edad:" ))

		while (edad < 0 || edad > 123 )
		{
			edad = parseInt(prompt("ERROR:Ingrese su edad:"))
		}

		if (banderaDelPrimero == true)
		{
		nombreMayor = nombre;
		nombreMenor = nombre;
		edadMayor = edad;
		edadMenor = edad;
		banderaDelPrimero = false
		}
		else if(edadMayor < edad)
		{
			nombreMayor = nombre;
			edadMayor = edad;
		}
		else if (edadMenor = edad)
		{
			nombreMenor = nombre;
			edadMenor = edad;
		}
		respuesta= prompt("Desea ingresar mas datos? si/no")
	
    }
		mensaje = "la persona mas joven es : " + nombreMenor;
		mensaje += "y persona mayor es: " + nombreMayor;
		document.write  (mensaje);

}