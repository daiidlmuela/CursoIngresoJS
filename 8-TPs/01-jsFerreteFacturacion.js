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
    let mensaje;
    

precioUno=document.getElementById("txtIdPrecioUno").value;
precioDos=document.getElementById("txtIdPrecioDos").value;
precioTres=document.getElementById("txtIdPrecioTres").value;

precioUno=parseInt (precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);

mensaje= (precioUno + precioDos + precioTres)

alert (mensaje)
}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    

precioUno=document.getElementById("txtIdPrecioUno").value;
precioDos=document.getElementById("txtIdPrecioDos").value;
precioTres=document.getElementById("txtIdPrecioTres").value;

precioUno=parseInt (precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);


suma= (precioUno + precioDos + precioTres)
promedio= suma/3; 

alert (promedio)



}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let iva;

precioUno=document.getElementById("txtIdPrecioUno").value;
precioDos=document.getElementById("txtIdPrecioDos").value;
precioTres=document.getElementById("txtIdPrecioTres").value;

precioUno=parseInt (precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);

suma= (precioUno + precioDos + precioTres  );
iva= suma * 21 /100;


alert (suma + iva)
}