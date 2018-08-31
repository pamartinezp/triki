var vect=[];
vect.push([",--3--","---","---","---<br>"]);
vect.push(["--2--","---","---","---<br>"]);
vect.push(["--1--","---","---","---<br>"]);
vect.push(["-----","-1-","-2-","-3-<br>"]);
var tm1=0;
var tm2=0;
var tm3=0;
var tm4=0;
var tm5=0;
var tm6=0;
var tm7=0;
var tm8=0;
var tm9=0;
window.onload = function()
{
    console.log("hola mundo");
}
function generar()
{
    console.log("holamundo");
    salida.innerHTML=vect;
}
function jugar()
{
    console.log("entro a funcion jugar")
    var dx=document.getElementById("cx");
    var cx=dx.value;
    var dy=document.getElementById("cy");
    var cy=dy.value;
    console.log("las coordenadas son: "+cx+" en x y "+cy+" en y ");
    if (cx==1 && cy==1)
    {
        console.log(tm1);
        if (tm1==0) 
        {
            console.log("coordenadas: "+cx+" y "+cy);
            vect[2][1]="-x-";
            tm1=1;
            salida.innerHTML=vect;   
        } 
        else 
        {
            alert("casilla ya marcada");   
        }
    } 
    else 
    {
        if (cx==1 && cy==2)
        {
            console.log(tm2);
            if (tm2==0) 
            {
                console.log("coordenadas: "+cx+" y "+cy);
                vect[2][2]="-x-";
                tm2=1;
                salida.innerHTML=vect;   
            } 
            else 
            {
                alert("casilla ya marcada");   
            }
        } 
        else 
        {
            if (cx==1 && cy==3)
            {  
                console.log(tm2);
                if (tm3==0) 
                {
                    console.log("coordenadas: "+cx+" y "+cy);
                    vect[2][3]="-x-<br>";
                    tm3=1;
                    salida.innerHTML=vect;   
                } 
                else 
                {
                    alert("casilla ya marcada");   
                }
            } 
            else 
            {
                if (cx==2 && cy==1)
                {
                    console.log(tm4);
                    if (tm4==0) 
                    {
                        console.log("coordenadas: "+cx+" y "+cy);
                        vect[1][1]="-x-";
                        tm4=1;
                        salida.innerHTML=vect;   
                    } 
                    else 
                    {
                        alert("casilla ya marcada");   
                    }
                } 
                else 
                {
                    if (cx==2 && cy==2)
                    {
                        /*console.log("coordenadas: "+cx+" y "+cy);
                        vect[1][2]="-x-";
                        salida.innerHTML=vect;*/
                        console.log(tm5);
                        if (tm5==0) 
                        {
                            console.log("coordenadas: "+cx+" y "+cy);
                            vect[1][2]="-x-";
                            tm5=1;
                            salida.innerHTML=vect;   
                        } 
                        else 
                        {
                            alert("casilla ya marcada");   
                        }
                    } 
                    else 
                    {
                        if (cx==2 && cy==3)
                        {
                            /*console.log("coordenadas: "+cx+" y "+cy);
                            vect[1][3]="-x-<br>";
                            salida.innerHTML=vect;*/
                            console.log(tm6);
                            if (tm6==0) 
                            {
                                console.log("coordenadas: "+cx+" y "+cy);
                                vect[1][3]="-x-<br>";
                                tm6=1;
                                salida.innerHTML=vect;   
                            } 
                            else 
                            {
                                alert("casilla ya marcada");   
                            }
                        } 
                        else 
                        {
                            if (cx==3 && cy==1)
                            {
                                /*console.log("coordenadas: "+cx+" y "+cy);
                                vect[0][1]="-x-";
                                salida.innerHTML=vect;*/
                                console.log(tm7);
                                if (tm7==0) 
                                {
                                    console.log("coordenadas: "+cx+" y "+cy);
                                    vect[0][1]="-x-";
                                    tm7=1;
                                    salida.innerHTML=vect;   
                                } 
                                else 
                                {
                                    alert("casilla ya marcada");   
                                }
                            }
                            else 
                            {
                                if (cx==3 && cy==2)
                                {
                                    /*console.log("coordenadas: "+cx+" y "+cy);
                                    vect[0][2]="-x-";
                                    salida.innerHTML=vect;*/
                                    console.log(tm8);
                                    if (tm8==0) 
                                    {
                                        console.log("coordenadas: "+cx+" y "+cy);
                                        vect[0][2]="-x-";
                                        tm8=1;
                                        salida.innerHTML=vect;   
                                    } 
                                    else 
                                    {
                                        alert("casilla ya marcada");   
                                    }
                                } 
                                else 
                                {
                                    if (cx==3 && cy==3)
                                    {

                                        /*console.log("coordenadas: "+cx+" y "+cy);
                                        vect[0][3]="-x-<br>";
                                        salida.innerHTML=vect;*/
                                        console.log(tm9);
                                        if (tm9==0) 
                                        {
                                            console.log("coordenadas: "+cx+" y "+cy);
                                            vect[0][3]="-x-<br>";
                                            tm9=1;
                                            salida.innerHTML=vect;   
                                        } 
                                        else 
                                        {
                                        alert("casilla ya marcada");   
                                        }
                                    } 
                                    else 
                                    {
                                        console.log("coordenadas erroneas");
                                    }
                                }
                            }
                        }
                    }
                } 
            }
        }     
    }
}
