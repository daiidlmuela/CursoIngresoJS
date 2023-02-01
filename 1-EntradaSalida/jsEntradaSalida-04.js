/* daiana de la muela
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	
//declaro mi variable
	let datoIngresado;
	let cajita
//pido dato
	datoIngresado =prompt("Ingresar dato")

//accedo a la cajita
document.getElementById("txtIdNombre").value =datoIngresado

	//alert("ok");
}

