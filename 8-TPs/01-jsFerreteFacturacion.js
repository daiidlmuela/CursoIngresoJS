/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	

    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    let mensaje;
    

precioUno=document.getElementById("txtIdPrecioUno").value;
precioDos=document.getElementById("txtIdPrecioDos").value;
precioTres=document.getElementById("txtIdPrecioTres").value;

precioUno=parseInt (precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);

resultado = precioUno + precioDos + precioTres;
mensaje= "La suma es " + resultado ;

console.log(mensaje);
}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let mensaje;

precioUno = document.getElementById("txtIdPrecioUno").value;
precioDos = document.getElementById("txtIdPrecioDos").value;
precioTres = document.getElementById("txtIdPrecioTres").value;

precioUno = parseInt (precioUno);
precioDos = parseInt(precioDos);
precioTres = parseInt(precioTres);


suma= (precioUno + precioDos + precioTres);
promedio= suma/3; 

mensaje= ("Resultado con promedio: " + promedio);

console.log(mensaje);



}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let iva;
    let mensaje;
    let precioFinal;

    iva= 21;
precioUno=document.getElementById("txtIdPrecioUno").value;
precioDos=document.getElementById("txtIdPrecioDos").value;
precioTres=document.getElementById("txtIdPrecioTres").value;

precioUno=parseInt (precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);

suma= precioUno + precioDos + precioTres;

precioFinal= suma + ( suma * iva / 100);

mensaje= ("La suma final con IVA (21%) es " + precioFinal);

console.log (mensaje);

}