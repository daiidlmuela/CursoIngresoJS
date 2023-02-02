/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    
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
    //txtIdLargo
    //txtIdAncho
    //txtIdRadio
    
    let radio;
    let perimetro;
    let alambre;
    let PI;
    let cantAlambre;
    let cantidadTotal;

    PI = 3.14;

    radio = document.getElementById ("txtIdRadio").value;
    radio = parseFloat (radio);

    cantAlambre= 2 * PI * radio;
    cantidadTotal= cantAlambre * 3;

    mensaje = ("La cantidad de alambre que se necesita es: " + cantidadTotal );

     console.log(mensaje);











}
function Materiales () 
{
    //C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
	//para sacar el area de un rectangulo se hace ancho * largo
    //para sacar las bolsas de cemento multiplico mentro cuadrado por cemento y luego cal */

    let area;
    let cemento;
    let cal;
    

    cemento = 2;
    cal = 3;

    largo = document.getElementById ("txtIdLargo").value;
    ancho = document.getElementById ("txtIdAncho").value;

    
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    area = ancho * largo;
    
    cemento = area * 2 / 1;

    console.log("Se necesitan " + cemento + " bolsas de cemento")







}