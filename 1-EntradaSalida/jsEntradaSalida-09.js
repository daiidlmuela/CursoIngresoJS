/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()

{

    let sueldo;
    let porcentajeAplicado;
    let porcentaje;
    let resultado;

    porcentaje= 10;

    sueldo= document.getElementById("txtIdSueldo").value;

    sueldo=parseInt(sueldo);
    

    porcentajeAplicado = sueldo * porcentaje /100;
    resultado= sueldo + porcentajeAplicado;

    document.getElementById("txtIdResultado").value = resultado;





}
