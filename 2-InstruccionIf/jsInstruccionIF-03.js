function mostrar()
{
	//tomo la edad  
	
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad => 18 ){

		alert(" Sos mayor de edad")
 
	}else{

		alert ("Sos menor")

	}


}//FIN DE LA FUNCIÓN