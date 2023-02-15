/*daiana de la muela
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//let nombreIngresado;
	//let mensaje;
	//nombreIngresado=txtIdNombre.value; ESTO FUNCIONA SOLO EN GOOGLE

    //  nombreIngresado =document.getElementById("txtIdNombre").value;

	//mensaje = "Vos te llamas " +nombreIngresado

	//alert(mensaje);
}

function mostrar()
{
	
	//ejercicio 3bis

	let descripcion;
	let precio;
	let mensaje;
	let porcentaje;
	let resultadoFinal;

	porcentaje= 30;
	descripcion = prompt("Ingrese descripcion del producto: ");
	precio = parseInt(document.getElementById("txtIdNombre")).value;

	porcentaje = precio + porcentaje /100;

	resultadoFinal = precio + porcentaje;

	mensaje= (descripcion + " el precio es: " + resultadoFinal);

	alert(mensaje);




}


