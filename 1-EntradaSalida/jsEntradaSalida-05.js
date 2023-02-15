/*daiana de la muela
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	//id nombre txtIdNombre
	//id edad txtIdEdad

	/*let nombreIngresado;
	let edadIngresada;
	let mensaje;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada =document.getElementById("txtIdEdad").value;
	mensaje="Usted se llama "+ nombreIngresado + " y tiene " +edadIngresada +" años";

	alert(mensaje);*/
}

function mostrar()
{

	/* Ejercicio 5.bis: 
 se debe mostrar un mensaje :
 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan */

//Daiana de la muela
//ejercicio 5 bit

let nombre;
let apellido;
let anios;
let mensaje;

apellido = prompt ("Cual es su apellido?");

nombre = document.getElementById("txtIdNombre").value 
anios = document.getElementById("txtIdEdad").value 

alert(apellido + " usted se llama " + nombre + " y tiene " + anios + " años.")





}