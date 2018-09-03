//inicio codigo
// creacion de la matriz:

var mat=[];
mat.push([1,1,1]);
mat.push([1,1,1]);
mat.push([1,1,1]);
//funcion windows on load

window.onload = function()
{
    console.log("funciono");
}

function generar()
{
    console.log("holamundo");
    salida.innerHTML=mat[0]+"<br>";
    salida.innerHTML+=mat[1]+"<br>";
    salida.innerHTML+=mat[2]+"<br>";
}

function ganah(filcol,des)
{
    console.log("--entro a funcion gana--");
    var txt="";
    //ganador horizontal
    for(var i=0; i<=2; i++)
    {
        console.log("--entro a for--");
        if (des==1) 
        {
            txt+=mat[filcol][i]; 
        } 
        else if(des==2)
        {
            txt+=mat[i][filcol];
        }
        else if(des==3)
        {
            txt+=mat[i][i];
        }
        else 
        {
            txt+=mat[i][2-i];
            console.log(txt);
        }
    }
    console.log("--salio del for--");
    return txt;
}

//****************************************************funcion jugar**********************************************************
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

    //casillas ya marcadas....
    if (mat[cx-1][cy-1]==1) 
    {
        alert("casilla no marcada");
        mat[cx-1][cy-1]="x";
        generar();
        //*************************************************juega la maquina***********************************************/
        alert("juega la maquina");
        var iw=0;
        var wb=0;
        while(iw==0)
        {
            var numalex=Math.floor((Math.random()*3)+1);
            console.log("---numero aleatorio en x ---: ",numalex);
            var numaley=Math.floor((Math.random()*3)+1);
            console.log("---numero aleatorio en y ---: ",numaley);
            if (mat[numalex-1][numaley-1]==1) 
            {
                mat[numalex-1][numaley-1]="o";
                iw=1;
                generar();
            } 
            else 
            {
                wb=wb+1;
                if (wb==20) 
                {
                    iw=1;
                    alert("todas las casillas han sido marcadas ya");
                }
            }
        }
    } 
    else 
    {
        alert("casilla ya marcada");    
    }
    //******************************************************desicion de quien ganó******************************************************
    for(var k=1; k<=4; k++)
    {
        for(var i=0; i<=2; i++)
        {
            console.log("---antes gana---");
            console.log("estado del vector: "+ganah(i,k));
            var htxt=ganah(i,k);
            console.log("---despues gana---")
            if(htxt=="xxx")
            {
                alert("gano el usuario");
                break;
            }
        }
    }
    
}
