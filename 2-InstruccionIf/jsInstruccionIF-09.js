function mostrar()
{
	//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
	
	let numRandom;
	let mensaje;

	numRandom = Math.ceil(Math.random() *10);

	mensaje = "Numero random " + numRandom;

	console.log(mensaje);



}//FIN DE LA FUNCIÓN