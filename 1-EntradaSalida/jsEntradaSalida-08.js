/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//txtIdNumeroDividendo
	//txtIdNumeroDivisor

	
	// let numDividendo;
	//let numDivisor;
	//let mensaje;


	//numDividendo = document.getElementById("txtIdNumeroDividendo").value;
	//numDivisor = document.getElementById("txtIdNumeroDivisor").value;

	//numDividendo = parseInt (numDividendo);
	//numDivisor = parseInt (numDivisor);


	//mensaje= "El resto es "  + numDividendo % numDivisor;

	//alert(mensaje); 
}
function SacarResto()

{

	//daiana de la muela
	//ejercicio 8 bis

	//Ejercicio 8.bis: Ingresar dos numeros por id Se pide:
	//mostrar por alert:
	//a) La suma de los dos numeros
	//b) El promedio de los numeros
	//c) El resto de los numeros (el primero en modulo del segundo) 

	let numUno;
	let numDos;
	let suma;
	let promedio;
	let resto;
	let mensajeUno;
	let mensajeDos;
	let mensajeTres;



	numUno = document.getElementById("txtIdNumeroDividendo").value;
	numDos = document.getElementById("txtIdNumeroDivisor").value;

	numUno = parseInt (numUno);
	numDos = parseInt (numDos);

	suma = numUno + numDos ;

	mensajeUno = ("La suma es: " + suma );

	promedio = suma / 2;

	mensajeDos = (" El promedio es " + promedio);

	resto = numUno % numDos;

	mensajeTres =(" El resto es: " + resto);

  alert (mensajeUno + mensajeDos + mensajeTres);







}