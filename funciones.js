/**
 * Imprime en un Div HTML la matriz.
 *
 */
function generar()
{
    console.log("la matriz inicial se genero....");
    salida.innerHTML=mat[0]+"<br>";
    salida.innerHTML+=mat[1]+"<br>";
    salida.innerHTML+=mat[2]+"<br>";
}
/**
 * marca la casilla del tablero que el usuario indique y tambien juega la maquina
 *
 */
function marcarcasillas(cx,cy)
{
    if (mat[cx-1][cy-1]==1) 
    {
        //alert("casilla no marcada");
        mat[cx-1][cy-1]="x";
        generar();
        //*************************************************juega la maquina***********************************************/
        //alert("juega la maquina");
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
}
/**
 * esta funcion busca si ya hay un ganador
 *
 */
function ganador()
{
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
                //conpos=1;
                break;
            }
            else if(htxt=="ooo")
            {
                alert("gano la maquina");
                //conpos=1;
                break;
            }
        }
    }
}
/**
 * esta funcion le muestra a la maquina las posibles jugadas 
 *
 */
function posibilidades_djuego()
{
    var matpos=[];
    var conteo_jugadas = 0;
    var posible_pos = 0;
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
    for(var j=0; j < conteo_jugadas; j++)
    {
        matpos.push( tmp_cad.split( "" ) );
        pos_jugada = matpos[ j ].indexOf( posible_pos + "" );
        matpos[ j ][ pos_jugada * 1 ] = "o";        
        console.log( j + ": " + matpos[j] + " pos_jugada " + pos_jugada + " tmp_cad: " + tmp_cad );
        posible_pos ++;
    }
    console.log("la matriz resultante fue: ",matpos);
}

/**
 * 
 *  subfuncion de ganador recorre las posibles manera de ganar *vertical**horizontal**diagonal*
 *
 */
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


/**
 * Cuenta las casillas vacias de un vector suministrado.
 * @param       array       Copia del vector original de las jugadas.
 * @param       numero      Retorna los campos vacios.
 */
function contar_casillas( vect_ )
{
    var conunos=0;
    
    for (var i = 0; i <=9; i++) 
    {
        if (vect_[i]==1) 
        {
            conunos=conunos+1;
        }
    }
    
    //console.log("el numero de casillas libres es: ",conunos);
    return conunos;   
}