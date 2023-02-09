function mostrar()
{
	//txtIdEdad

	/*let edad;

	edad = document.getElementById("txtIdEdad").value; 
	edad = parseInt(edad);
	
	if(edad == 15) 
	{
		alert("Niña bonita")
	}*/

}
function mostrar()
{
	/*Ejercicio 1bis: 
/con if
pedir a una persona que fue de vaciones , 
la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento 
hata 80km/h= lento 
hasta 100= buen ritmo
hasta 120= ahi de la ley 
mas = eso no se hace/ */

let velocidad;
let mensaje;

velocidad = document.getElementById("txtIdEdad").value;
velocidad = parseInt (velocidad);

if (velocidad == 60)
{
	mensaje = velocidad + " muy lento";
	alert (mensaje)

}else if (velocidad == 80 )
{
	mensaje = velocidad + " lento";
	alert (mensaje)
}else if(velocidad == 100)
	{
		mensaje = velocidad + " Buen ritmo"
		alert(mensaje)
	}
}
