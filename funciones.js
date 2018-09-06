



/**
 * Imprime en un Div HTML la matriz.
 *
 */
function generar()
{
    console.log("holamundo");
    salida.innerHTML=mat[0]+"<br>";
    salida.innerHTML+=mat[1]+"<br>";
    salida.innerHTML+=mat[2]+"<br>";
}

/**
 * Esta función decide si alguien gana en determinado momento.
 *
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

