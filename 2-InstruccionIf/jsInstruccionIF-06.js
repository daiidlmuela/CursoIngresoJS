
/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/



function mostrar()
{
	//txtIdEdad
	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17 )
	{
		mensaje = "Mayor de edad";
		

	} else {
		
	 if (edad >= 13 )
	 {
		mensaje = "Es adolescente ";	

	}else{

		mensaje = " Es menor de edad";
	}



}
	alert (mensaje);
	
}//FIN DE LA FUNCIÓN