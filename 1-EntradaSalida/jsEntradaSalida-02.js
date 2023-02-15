/*Daiana de la muela
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombrePersona; //Declaracion de variable
	let apellidoPersona;

	nombrePersona = prompt("Cuál es tu nombre?")
	apellidoPersona = prompt("Cual es tu apellido?")
	
	alert("su nombre es "+nombrePersona + " su apellido es " +apellidoPersona);
}

