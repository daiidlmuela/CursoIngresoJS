/*Daiana de la muela
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	

//let importe;
//let porcentaje;
//let importeFinal;
//let descuento;

//descuento= -25;

//importe= document.getElementById("txtIdImporte").value;
//importe=parseInt(importe);

//porcentaje= importe * descuento /100;
//importeFinal= importe + porcentaje;



 //document.getElementById("txtIdResultado").value=importeFinal



	
}

//10bis
function mostrarAumento()

{

   // Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
   // Transformarlo a entero (parseInt), luego
   // pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO"

    let importe;
    let descuentoIngresado;
    let resultado;
    let descuento;

    importe= document.getElementById("txtIdImporte").value;

    descuentoIngresado= prompt ("Ingresar un porcentaje de descuento ");
    descuentoIngresado=parseInt(descuentoIngresado);

    descuento= importe * descuentoIngresado/100;

    resultado = importe - descuento;

    document.getElementById("txtIdResultado").value=resultado









}






















