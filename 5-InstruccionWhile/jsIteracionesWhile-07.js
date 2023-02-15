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

	suma=0;
	promedio=0;
	respuesta='si';

	numeroingresado = parseInt(prompt("Ingrese un numero"));
	respuesta = prompt("desea ingresar otro numero?");

	while(respuesta == "si" || respuesta == "Si" || respuesta == "SI" ){
	
	numeroingresado = parseInt(prompt("Ingrese un numero"));
	respuesta = prompt("desea ingresar otro numero?");

	}
	
	document.getElementById("txtIdSuma").value=promedio;
	document.getElementById("txtIdPromedio").value=promedio/suma;

}//FIN DE LA FUNCIÓN