function mostrarEnDisplay(valor) {
  let elementoDisplay = document.getElementById("id_display");
  elementoDisplay.innerText = elementoDisplay.innerText + valor;

  if (valor != "+") {
    concatenarNumero(valor);
  } else {
    operacionSumar();
  }
}


function operacionSumar(){
    esSegundoDigito= "1";
}

function concatenarNumero(numero){
    if(esSegundoDigito === "0"){
        num1 = num1 + numero;
    }else{
        
    }
}
