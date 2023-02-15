function mostrar()
{
	
	let acumulador;
	let numeroIngresado;
	let contador;
	let promedio;
		
	acumulador = 0;
	contador = 0;

//     variable        condicion    aumento/decremento
	for(let i = 0;       i < 10;              i++ )
	{
		
		numeroIngresado =parseInt(prompt("ingrese el primer numero"))
		while (isNaN(numeroIngresado)){

			numeroIngresado =parseInt(prompt("ERROR:ingrese el primer numero" ))
		}
		contador = contador + 1
	acumulador = acumulador + numeroIngresado;
	//promedios y porcentajes afuera de while
	}
	
	promedio = acumulador / contador;
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN