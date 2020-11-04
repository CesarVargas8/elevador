
var p=0,p_Actual,p_Destino,ult_piso=8;

function abrir_P(){
    p=0;
    consola.log("Llego a su piso");
}
function cerrar_p () {
    p=1;
    consola.log("Se cerro la puerta");
}
function subir_P(){
    pisoActual ++;
}
function bajar_P(){
    pisoActual --;
}
const destino_piso=function(){
    if( p_Destino > 0 && p_Destino<=ult_piso){
        if(p_Actual < p_Destino){
            cerrar_p();
            while(p_Actual<p_Destino){
                consola.log("piso destino");
                subirpiso();
            }
        }
        abrir_P();
    }
    if (p_Actual>p_Destino){
        cerrar_p();
        while(p_Actual>p_Destino){
            consola.log("piso actual");
            bajar_P();
        }
        abrir_P();
    }
}
