//Variables Operativas
var operando1;
var operando2;
var operando;

function init(){
    //variables
    var resultado = document.getElementById("result");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("result");
    var division = document.getElementById("division");
    var multiplicacion = document.getElementById("multiplicacion");
    var igual = document.getElementById("igual");
    var punto = document.getElementById("punto");
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");

    //Eventos

    //Botones Numericos
    punto.onclick = function(e){
        resultado.textContent = resultado.textContent + "."
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0"
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9"
    }

    //Botones especiales
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operando1 = resultado.textContent;
        operando = "+";
        limpiar();

    }
    
}