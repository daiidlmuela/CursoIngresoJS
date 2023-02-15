/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;
	let mensaje;

	edadIngresada = parseInt(prompt("Ingresar edad entre 18 y 90 años: "));

	while (edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = parseInt(prompt("ERROR:Ingresar edad entre 18 y 90 años: "));
	}
	
	sexoIngresado = prompt("ingrese F ó M .");

	while(sexoIngresado != "f" && sexoIngresado != "m" + sexoIngresado != "F" && sexoIngresado != "M")
	{
		sexoIngresado = prompt("ERROR: ingrese F ó M .");
	}
	
	estadoCivilIngresado = prompt("Ingrese estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
	while(estadoCivilIngresado < 1 || estadoCivilIngresado > 5)
	{
		estadoCivilIngresado = prompt(" ERROR: Ingrese estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
	}

	sueldoBruto = parseInt(prompt("ingrese sueldo bruto."))
	while(sueldoBruto < 8000)
	{
		sueldoBruto = parseInt(prompt("ERROR:ingrese sueldo bruto, mayor a 8000."))
	}

	/* numeroLegajo = parseInt(prompt("Ingrese número de legajo, numérico de 4 cifras, sin ceros a la izquierda."))
	while(numeroLegajo )
	{

	} */

	 nacionalidad = prompt("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.")
	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
	{
		nacionalidad = prompt("ERROR:Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.")
	} 

	 document.getElementById("txtIdEdad").value = edadIngresada
	 document.getElementById("txtIdSexo").value = sexoIngresado
	 document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado
	 document.getElementById("txtIdSueldo").value = sueldoBruto	
	 document.getElementById("txtIdLegajo").value = numeroLegajo
	 document.getElementById("txtIdNacionalidad").value = nacionalidad


}	
