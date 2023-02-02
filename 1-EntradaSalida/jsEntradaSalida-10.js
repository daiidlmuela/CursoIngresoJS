/*Daiana de la muela
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	

let importe;
let porcentaje;
let importeFinal;
let descuento;

descuento= -25;

importe= document.getElementById("txtIdImporte").value;
importe=parseInt(importe);

porcentaje= importe * descuento /100;
importeFinal= importe + porcentaje;



 document.getElementById("txtIdResultado").value=importeFinal



	
}
























