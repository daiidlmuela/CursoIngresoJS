/*daiana de la muela
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
let mensaje;
	//nombreIngresado=txtIdNombre.value; ESTO FUNCIONA SOLO EN GOOGLE

      nombreIngresado =document.getElementById("txtIdNombre").value;

mensaje = "Vos te llamas " +nombreIngresado

	alert(mensaje);




}


