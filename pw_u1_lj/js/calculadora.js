// es un lenguaje de programacion
// comportamiento y o funcionalidad de la pagina web
//no maneja una version directa, como CSS3 y HTML5. se basa en un standar ECMAscript (ult ver. ECMAscript2024)
// 
// manipulacion dimanica de elementos HTML, a traves del DOM (Documento Object Model) 
// [estructura en forma de arbol que contiene de manera jerarquica todos los elementos de la pagina web]
// [accede modifica agrega o elimina cualquier elemento del DOM]
// [siempre hay un elemento raiz "Document"]

// tiene tipos de declaracion: funcionalidad y comportamiento... 
//  en linea (a un solo elemento),
//  interno (a una sola pagina),
//  externo (a varias paginas de manera centralizada).


const SUMA = '+';
const RESTA = '-';
function sumar(numero1, numero2) {
    return numero1 + numero2;

}


function restar(numero1, numero2) {
    return numero1 - numero2;
}


function dividir(numero1, numero2) {
    return numero1 / numero2;
}


function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}


function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_numero1').value);
    let num2 = parseFloat(document.getElementById('id_numero2').value);
    let resultado = 0;
    if (tipo === SUMA) {
        resultado = sumar(num1, num2);
    }
    if (tipo === RESTA) {
        resultado = restar(num1, num2);
    }
    if (tipo === '*') {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === '/') {
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = 'Resultado: ' + resultado.toString();


    /*Tipos de variable  
    var: antiguo obsoleto
    let: variables cambiantes
    const: variables constantes
     */

    let nombre = '10';
    let numero = 10;
    let arreglo = [1, 2, 3, 4, 5];

    const nomrbrec = '10';
    console.log(arreglo);
    console.log('texto de prueba');

    /* Arreglos */

    const diasLaborables = ['Lunes', 'martes', 'miercoles', 'jueves', 'viernes']
    console.log(diasLaborables);
    console.log(diasLaborables[0]);

    consologe.log(diasLaborables[10]);
    let valor = '';
    consolo.log(valor);

    diasLaborables.push('Sabado');
    diasLaborables.unshift('Dias')
    console.log(diasLaborables);

    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosPares = [2, 4, 6, 8];
    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros)

    /* Sentencias de Control  */

    for (const dia of diasLaborables) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log('Por fin viernes');
        } else {
            console.log('aun no es viernes');

        }


        if (dia !== 'Viernes') {
            console.log('Dia Normal');
        } else {
            console.log('Dia de salida');

        }
    }

    /* Manejos de objetos  */

    const miProfesor = {
        nombre: 'Joel',
        apellido: 'Luna',
        edad: 35,
        genero: 'Masculino',
        ciudad: 'Quito'
    }

    console.log(miProfesor)
    console.log(miProfesor.nombre);

    /* Seteo de atributos */

    miProfesor.apellido = 'Drake';
    console.log(miProfesor)



    const estudiantes = [
        {
          nombre: 'Joel',
          apellido: 'Luna',
          edad: 35,
          genero: 'Masculino',
          ciudad: 'Quito'
        },
        {
          nombre: 'Ana',
          apellido: 'Torres',
          edad: 28,
          genero: 'Femenino',
          ciudad: 'Guayaquil'
        },
        {
          nombre: 'Luis',
          apellido: 'Gómez',
          edad: 22,
          genero: 'Masculino',
          ciudad: 'Cuenca'
        }
      ];
    
      
      console.table(estudiantes);
    
    



    
    const fundamentos = (num1, num2) => {
        console.log('Fundamentos JS');
    }





}
