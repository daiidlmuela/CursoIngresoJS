function mostrar()
{
	let promedio;
	let suma;
	let numeroTres;
	let numeroUno;
	let numeroDos;
	let numeroCuatro;
	let numeroCinco;

	numeroUno =parseInt(prompt("ingrese el primer numero"))
	numeroDos =parseInt(prompt("ingrese el segundo numero"))
	numeroTres =parseInt(prompt("ingrese el tercero numero"))
	numeroCuatro=parseInt(prompt("ingrese el cuarto numero"))
	numeroCinco=parseInt(prompt("ingrese el quinto numero"))

	suma = numeroUno + numeroDos + numeroTres + numeroCuatro + numeroCinco;
	
	
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=suma/5;
}//FIN DE LA FUNCIÓN