/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let suma;
	let promedio;
	let respuesta;
	let numeroingresado;
	let acumulador; 

	suma=0;
	promedio=0;
	respuesta='si';
	acumulador = 0;

	numeroingresado = parseInt(prompt("Ingrese un numero"));
	respuesta = prompt("desea ingresar otro numero?");

	while(respuesta == "si" || respuesta == "Si" || respuesta == "SI" )
	{ 
	numeroingresado = parseInt(prompt("Ingrese un numero"));
	respuesta = prompt("desea ingresar otro numero?");
	
		while(isNaN(numeroingresado))
		{ 
		numeroingresado = parseInt(prompt("ERROR:Ingrese un numero"));
		}
		suma = numeroingresado + 1
	acumulador = acumulador + numeroingresado;
	}	
	
	promedio = acumulador / suma;


	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN