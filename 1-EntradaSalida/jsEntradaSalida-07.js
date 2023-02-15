/* daiana de la muela
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	//txtIdNumeroUno
	//txtIdNumeroDos
	// asignar valores a la variable
	//parsear los numeros
	//operacion arimetico

	let numUno;
	let numDos;
	let mensaje;

	numUno = document.getElementById ("txtIdNumeroUno").value; 
	numDos = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	mensaje = "la suma es " + ( numUno + numDos);

	alert(mensaje);	
}

function restar()
{
	let numUno;
	let numDos;
	let mensaje;

	numUno = document.getElementById ("txtIdNumeroUno").value; 
	numDos = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	mensaje= "La resta es " + (numUno - numDos);

	alert (mensaje);
}

function multiplicar()
{ let numUno;
	let numDos;
	let mensaje;
	
	numUno = document.getElementById ("txtIdNumeroUno").value; 
	numDos = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	mensaje= "La multiplicacion es " +(numUno * numDos);
	alert(mensaje);
}


function dividir()
{let numUno;
	let numDos;
	let mensaje;
	
	numUno = document.getElementById ("txtIdNumeroUno").value; 
	numDos = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	mensaje= "La division es " +( numUno / numDos);
	alert(mensaje);

}


