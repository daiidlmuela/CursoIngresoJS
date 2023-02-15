/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m" + sexoIngresado != "F" && sexoIngresado != "M"){

		sexoIngresado = prompt("ERROR: ingrese f ó m .");
	}
	mensaje = "Sexo ingresado correctamente";
	document.getElementById("txtIdSexo").value=mensaje;
}//FIN DE LA FUNCIÓN 