window.onload = function()
{
    console.log("hola mundo");
}
function generar()
{
    console.log("holamundo");
    var i,j;
    for(i=0; i<=2; i++)
    {
        console.log(i);
        salida.innerHTML=salida.innerHTML+i;
        for (j=0; j<=2; j++) 
        {
            console.log(j);
            salida.innerHTML=salida.innerHTML+j;  
        }
        salida.innerHTML=salida.innerHTML+"<br>";
    }
}