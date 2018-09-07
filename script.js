//*********************************************inicio codigo********************************************************
//*****************************************creacion de la matriz:***************************************************

var mat=[];
mat.push([1,1,1]);
mat.push([1,1,1]);
mat.push([1,1,1]);

//****************************************funcion windows on load***************************************************

window.onload = function()
{
    console.log("funciono");
}
//**************************************************jugar*********************************************************** 
function jugar() 
{
    //entro a la funcion.....
    console.log("entro a funcion jugar");

    //obtencion de las variables
    var dx=document.getElementById("cx");
    var cx=dx.value;
    var dy=document.getElementById("cy");
    var cy=dy.value;
    console.log("las coordenadas son: "+cx+" en x y "+cy+" en y ");   
    marcarcasillas(cx,cy);
    ganador();
    posibilidades_djuego();
}