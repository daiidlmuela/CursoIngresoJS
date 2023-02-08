function mostrar()
{
	/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
	
let nota;
let mensaje;


nota =Match.floor( Math.random() *10 + 1 );

if(nota >= 9)
{

mensaje= nota + " Exelente";

}
else{
	if(nota >= 4)
	{
		mensaje = nota + " Aprobado";

	}
	else{

		mensaje =  nota + " Reprobado";
	}
	


}
	alert (mensaje);


}//FIN DE LA FUNCIÓN