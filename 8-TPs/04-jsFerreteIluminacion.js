/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

txtIdCantidad
txtIdprecioDescuento
 */
function CalcularPrecio () 
{
 	

let cantidad;
let descuento;
let mensaje;
let precioUnitario;
let marca;
let precioTotal;


precioUnitario = 35;
descuento = 50;

cantidad = document.getElementById("txtIdCantidad").value;
cantidad = parseInt(cantidad);
marca = document.getElementById("Marca").value;



if(cantidad >=6)
{
   precioTotal = precioUnitario * cantidad ;
   precioTotal = precioTotal * descuento/100;
   // precioFinal = total - descuento; 

   // mensaje = total;
    document.getElementById("txtIdprecioDescuento").value = precioTotal;

} else if(cantidad ==5 && marca == "ArgentinaLuz")
  {  descuento = 1- 40/100;
    precioTotal= precioUnitario * cantidad;
    precioTotal = precioTotal * descuento;

    document.getElementById("txtIdprecioDescuento").value = precioTotal;
    
} 
    else if(cantidad ==5 && marca != "ArgentinaLuz")
 {descuento = 1 - 30/100;
 precioTotal= precioUnitario * cantidad;
precioTotal = precioTotal * descuento;

document.getElementById("txtIdprecioDescuento").value = precioTotal;
} else if (cantidad == 4 && marca == "ArgentinaLuz" || "FelipeLamparas")
{
    descuento = 1 - 25/100;
    precioTotal= precioUnitario * cantidad;
   precioTotal = precioTotal * descuento;
   
   document.getElementById("txtIdprecioDescuento").value = precioTotal;

}else if (cantidad == 4 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas"))
{ 
    descuento =  20/100;
    precioTotal= precioUnitario * cantidad;
   precioTotal = precioTotal * descuento; //me da mal el resultado
   
   document.getElementById("txtIdprecioDescuento").value = precioTotal;

}else if(cantidad == 3 && marca == "ArgentinaLuz")
{
    descuento = 1 -  15/100;
    precioTotal= precioUnitario * cantidad;
   precioTotal = precioTotal * descuento;//me da mal el resultado
   
   document.getElementById("txtIdprecioDescuento").value = precioTotal;


}
}








