/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    txtIdLargo
    txtIdAncho
    txtIdRadio
    let largo;
    let ancho;
    let perimetro;
    let alambre;


    largo = document.getElementById ("txtIdLargo").value;
    ancho = document.getElementById ("txtIdAncho").value;

    //parseFloat para numeros decimales
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetro = largo * 2 + ancho * 2;
    alambre = perimetro * 3;

    console.log("La cantidad de alambre es :" + alambre);






}
function Circulo () 
{
	// mostrar la cantidad de alambre a comprar si se ingresara el radio de un terreno circular y se debe a alambre con ilos de
    //alambre.sacar el perimetro de un circulo hay que hacer 2 * pi * r*/





}
function Materiales () 
{
    //C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
	//para sacar el area de un rectangulo se hace ancho * largo
    //para sacar las bolsas de cemento multiplico mentro cuadrado por cemento y luego cal */


}