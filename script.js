var vect=[];
vect.push([",--3--","---","---","---<br>"]);
vect.push(["--2--","---","---","---<br>"]);
vect.push(["--1--","---","---","---<br>"]);
vect.push(["-----","-1-","-2-","-3-<br>"]);
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
        console.log("coordenadas: "+cx+" y "+cy);
        vect[2][1]="-x-";
        salida.innerHTML=vect;
    } 
    else 
    {
        if (cx==1 && cy==2)
        {
            console.log("coordenadas: "+cx+" y "+cy);
            vect[2][2]="-x-";
            salida.innerHTML=vect;
        } 
        else 
        {
            if (cx==1 && cy==3)
            {
                console.log("coordenadas: "+cx+" y "+cy);
                vect[2][3]="-x-<br>";
                salida.innerHTML=vect;
            } 
            else 
            {
                if (cx==2 && cy==1)
                {
                    console.log("coordenadas: "+cx+" y "+cy);
                    vect[1][1]="-x-";
                    salida.innerHTML=vect;
                } 
                else 
                {
                    if (cx==2 && cy==2)
                    {
                        console.log("coordenadas: "+cx+" y "+cy);
                        vect[1][2]="-x-";
                        salida.innerHTML=vect;
                    } 
                    else 
                    {
                        if (cx==2 && cy==3)
                        {
                            console.log("coordenadas: "+cx+" y "+cy);
                            vect[1][3]="-x-<br>";
                            salida.innerHTML=vect;
                        } 
                        else 
                        {
                            if (cx==3 && cy==1)
                            {
                                console.log("coordenadas: "+cx+" y "+cy);
                                vect[0][1]="-x-";
                                salida.innerHTML=vect;
                            } 
                            else 
                            {
                                if (cx==3 && cy==2)
                                {
                                    console.log("coordenadas: "+cx+" y "+cy);
                                    vect[0][2]="-x-";
                                    salida.innerHTML=vect;
                                } 
                                else 
                                {
                                    if (cx==3 && cy==3)
                                    {
                                        console.log("coordenadas: "+cx+" y "+cy);
                                        vect[0][3]="-x-<br>";
                                        salida.innerHTML=vect;
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
