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
/* function CalcularPrecio () */ 
/* {
 	

let cantidad;
let descuento;
let mensaje;
let precioUnitario;
let marca;
let precioTotal;
let porcentaje;
let aumento;
let precioImpuesto;

aumento = 10;
precioUnitario = 35;
descuento = 50;
porcentaje = 0;

cantidad = document.getElementById("txtIdCantidad").value;
cantidad = parseInt(cantidad);
marca = document.getElementById("Marca").value;



if(cantidad >=6)
{
   descuento =50;
} else if(cantidad ==5) { 
    if (marca == "ArgentinaLuz"){
        descuento = 40;
    }else{
        descuento = 30;
    }
} else if (cantidad == 4 ) {
     if( marca == "ArgentinaLuz" || marca == "FelipeLamparas" ){
     descuento = 25;
 }  else{ 
    descuento= 20;
}
} else if(cantidad == 3)
    if (marca == "ArgentinaLuz"){
    descuento =  15;
} else if (marca == "FelipeLamparas"){
    descuento = 10;
} else {
    descuento =5;
}else {
descuento = 0;
}


 precioUnitario = precioUnitario * descuento/100;
 precioTotal = precioUnitario - descuento;

 mensaje = "$ "+ precioTotal;

   impuesto = precioTotal * aumento /100;
    precioImpuesto = precioTotal + aumento;

 if( precioTotal >= 120){
    alert ("Usted pago $ " + precioImpuesto + "  de IIBB, siento $ " + impuesto + " El impuesto que se pago");
}
    document.getElementById("txtIdprecioDescuento").value=mensaje;
} */

/* function CalcularPrecio () 
{
    let cantLamparas;
    let marca;
    let precioLamp;
    let descuento;
    let ingresoBruto;
    let precioTotal;
    let precioFinal;
    let Final;

    ingresoBruto = 10;
    precioLamp = 35;
    descuento = 0;

    cantLamparas = document.getElementById("txtIdCantidad").value;
    cantLamparas = parseInt(cantLamparas);
    marca = document.getElementById("Marca").value;
    
    if (cantLamparas >= 6){        
        descuento = 50;
    }
    else {
        if (cantLamparas == 5){ 
            switch (marca)
            {  
                case "ArgentinaLuz":
                    descuento = 40;
                    break;
                default: 
                    descuento = 30;               
            }
        }
        else if (cantLamparas == 4){
            switch (marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;
                default:
                    descuento = 20;
            }
        }
        else if (cantLamparas == 3){
            switch (marca)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
            }
        }
        else{
            descuento = 0;
        }
    }

    precioTotal = precioLamp * cantLamparas;
    precioFinal = precioTotal * descuento/100;
    Final = precioFinal - descuento;

    mensaje = "$ "+ precioFinal;

    impuesto = precioTotal * ingresoBruto /100;
    precioImpuesto = precioTotal + ingresoBruto;

    if( precioFinal >= 120){
        alert ("Usted pago $ " + precioImpuesto + "  de IIBB, siento $ " + impuesto + " El impuesto que se pago");
    }
    document.getElementById("txtIdprecioDescuento").value=mensaje;
}
 */
/* 
function CalcularPrecio ()
 {
    let final;
    let cantLamparas;
    let marca;
    let precioLamp;
    let descuento;
    let ingresoBruto;
    let precioTotal;
    let precioFinal;

    ingresoBruto = 10;
    precioLamp = 35;
    descuento = 0;

    cantLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    switch (cantLamparas){
        case "1":
        case "2":
            descuento = 0;
            break;
        case "3":
            if (marca == "ArgentinLuz"){ 
            descuento = 15;
            }else if (marca == "FelipeLamparas"){
                descuento = 10;
            }else { 
                descuento = 5;
            }
            break;
        case "4":
            if(marca == "ArgentinaLuz" || "FelipeLamparas"){
                descuento = 25;
            }else { 
                descuento = 20;
            }
            break;
        case "5":
            if(marca == "Argentinaluz"){
                descuento = 40;
            }else {
                descuento = 30; 
            }
            break;
        default:
            descuento = 50;

    }
    
    precioTotal = precioLamp * cantLamparas;
    precioFinal = precioTotal * descuento/100;
    final = precioTotal - precioFinal;

    mensaje = "$ "+ final;

    impuesto = final * ingresoBruto /100;
    precioImpuesto = precioTotal + ingresoBruto;

    if( final >= 120){
        alert ("Usted pago $ " + precioImpuesto + "  de IIBB, siento $ " + impuesto + " El impuesto que se pago");
    }
    document.getElementById("txtIdprecioDescuento").value=mensaje;

} */

/* function CalcularPrecio ()
{

let final;
    let cantLamparas;
    let marca;
    let precioLamp;
    let descuento;
    let ingresoBruto;
    let precioTotal;
    let precioFinal;

    ingresoBruto = 10;
    precioLamp = 35;
    descuento = 0;

    cantLamparas = document.getElementById("txtIdCantidad").value;
    cantLamparas = parseInt(cantLamparas);
    marca = document.getElementById("Marca").value;

    

switch (cantLamparas){
    case 1:
    case 2:
        descuento = 0;
        break;
    case 3:
        switch (marca)
        {
            case "ArgentinaLuz":
                descuento = 15;
                break;
            case "FelipeLamparas":
                descuento = 10;
                break;
            default: 
                descuento = 5;
        }break;
    case 4:
        switch (marca)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento = 25;
                break;
            default:
                descuento = 20;
        }break;
    case  5:
        switch (marca)
        {
            case "ArgentinaLuz":
                descuento = 40;
        }break;
    default:
        descuento = 50;

}

precioTotal = precioLamp * cantLamparas;
precioFinal = precioTotal * descuento/100;
final = precioTotal - precioFinal;

mensaje = "$ "+ final;

impuesto = final * ingresoBruto /100;
precioImpuesto = precioTotal + ingresoBruto;

if( final >= 120){
    alert ("Usted pago $ " + precioImpuesto + "  de IIBB, siento $ " + impuesto + " El impuesto que se pago");
}
document.getElementById("txtIdprecioDescuento").value=mensaje;

} */






