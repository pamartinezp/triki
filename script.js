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
    var conpos=0;
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
                conpos=1;
                break;
            }
            else if(htxt=="ooo")
            {
                alert("gano la maquina");
                conpos=1;
                break;
            }
        }
    }
    /*******************************************************posibilidades del juego********************************************/
    var matpos=[];
    var conteo_jugadas = 0;
    var posible_pos = 0;
    /*if (conpos==0) 
    {*/
        var vect=[];
        var tmp_cad = "";
        var pos_jugada = -1;
        vect=mat[0]+",";
        tmp_cad = mat[0];
        vect+=mat[1]+",";
        tmp_cad += mat[ 1 ];
        vect+=mat[2];
        tmp_cad += mat[ 2 ];
        //console.log("Vect: " + vect);
        vect=vect.split(",");
        //console.log("Vect: " + vect);
        
        //Sacamos la coma del vector.
        while( tmp_cad.indexOf( "," ) > -1 ) tmp_cad = tmp_cad.replace( ",", "" );        
        conteo_jugadas = contar_casillas( vect );
        console.log( "conteo_jugadas " + conteo_jugadas );
        
        for( j = 2; j < 20; j ++ )
        {            
            if( tmp_cad.indexOf( "1" ) > -1 )
            {
                tmp_cad = tmp_cad.replace( "1", j + "" );
            }
        }
        
        console.log( "tmp_cad...." + tmp_cad );
        vect = tmp_cad.split( "" );
        
    posible_pos = 2;
        
    /*}*/
    //asignacion de la matriz posibles resultados codigo 
    for(var j=0; j < conteo_jugadas; j++)
    {
        matpos.push( tmp_cad.split( "" ) );
        pos_jugada = matpos[ j ].indexOf( posible_pos + "" );
        matpos[ j ][ pos_jugada * 1 ] = "o";        
        console.log( j + ": " + matpos[j] + " pos_jugada " + pos_jugada + " tmp_cad: " + tmp_cad );
        posible_pos ++;
    }
    
    //console.log( "tmp_cad: " + tmp_cad );
    //console.log("la matriz resultante fue: ", matpos);
    //alert(matpos);

    /*var yauno=0;

    for(var i=0; i<=conunos-1; i++)
    {
        var temp=0;
        for(var j=0; j<=8; j++)
        {
            if (vect[j]==1 && yauno==0) 
            { 
                if (i==temp) 
                {
                    matpos[i][j]="o";
                    yauno=1;
                } 
                else 
                {
                    temp=temp+1;
                    matpos[i][j]=vect[j];
                }
            }
            else
            {
                matpos[i][j]=vect[j];
            }
            
        }
    }*/
    console.log("la matriz resultante fue: ",matpos);
    //alert(matpos);
}




