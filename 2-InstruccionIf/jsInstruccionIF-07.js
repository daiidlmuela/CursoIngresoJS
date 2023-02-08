function mostrar()
{
	
	
	 let edad;
	 let civil;
	let mensaje;

	 edad = document.getElementById("txtIdEdad").value;
	 civil = document.getElementById("estadoCivil").value;

	 edad = parseInt(edad);

	 if ( edad <18 && civil != "Soltero")	
	{
		mensaje = "Es muy pequeño para no ser soltero"
		alert(mensaje);

	}

	


	}//FIN DE LA FUNCIÓN