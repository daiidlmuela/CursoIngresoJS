function mostrar()
{
	/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/

let edad;
let civil;
let mensaje;


edad = document.getElementById("txtIdEdad").value;
edad = parseInt(edad);

civil = document.getElementById("estadoCivil").value;

if(edad >= 18 && civil == "Soltero" )
{
mensaje = "Es soltero y no es menor"
	alert(mensaje);

}


}//FIN DE LA FUNCIÓN