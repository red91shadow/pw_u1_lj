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

const SUMA = '+'
const RESTA = '-'
const MULTIPLICACION = '*'
const DIVISION = '/'

function sumar(numero1, numero2) {
    return numero1 + numero2;
}
function restar(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
function dvidir(numero1, numero2) {
    return numero1 / numero2;
}
function evaluarOperacion(tipo
) {
    let numero1 = parseFloat(document.getElementById('id_numero1').value);
    let numero2 = parseFloat(document.getElementById('id_numero2').value);
    let resultado = 0;
    if (tipo === SUMA) {
        resultado = sumar(numero1, numero2)
    }
    if (tipo === RESTA) {
        resultado = restar(numero1, numero2)
    }
    if (tipo === MULTIPLICACION) {
        resultado = multiplicar(numero1, numero2)
    }
    if (tipo === DIVISION) {
        resultado = dvidir(numero1, numero2)
    }

    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado;
}

const fundamentos = () => {
    console.log('Fundamentos JS')
    /* Tipos de variables
 var (obsoleto), let (variables cambiantes), const (variables constantes)    
 */
    let nombre = '10';
    let arreglo = [1, 2, 3, 4, 5, 6]
    const NOMBREV = '11'

    console.log('Hola Mundo')

    /* Arreglo   */
    const DIASLABORABLES = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
    console.log(DIASLABORABLES)
    console.log(DIASLABORABLES[0])
    console.log(DIASLABORABLES[50])

    let valor = '';
    console.log(valor);

    DIASLABORABLES.push('Sabado');
    console.log(DIASLABORABLES);
    DIASLABORABLES.unshift('Dias');
    console.log(DIASLABORABLES);
    const arregloNumerosImpares = [1, 3, 5, 7, 9, 11];
    const arregloNumerosPpares = [2, 4, 6, 8, 10, 12];
    numerosTotal = arregloNumerosImpares.concat(arregloNumerosPpares);
    console.log(numerosTotal);

    for (const dia of DIASLABORABLES) {
        console.log(dia);
        if (dia === 'viernes') { console.log('por fin viernes') }
        else {
            console.log('Aun no es vienes')
        }

        if (dia !== 'viernes') { console.log('dia normal') }
        else {
            console.log('Dia de salida')
        }
    }

    /** Manejo de objetos */

    const miProfesor = {
        nombre: 'Joel',
        apellido: 'Joel Luna',
        edad: 23,
        genero: 'Masculino',
        ciudad: 'UIO'
    }
    console.log(miProfesor);
    console.log(miProfesor.apellido);
    miProfesor.apellido = 'Valdiviezo';
    console.log(miProfesor.apellido);

    if (miProfesor.ciudad === 'UIO') console.log('capitalino');

    const estudiante1 = { nombre: 'Emil', apellido: 'Rasputin' };
    const estudiante2 = { nombre: 'Joel', apellido: 'call' };
    const estudiante3 = { nombre: 'Dante', apellido: 'My' };
    const arreglo1 = [estudiante1, estudiante2, estudiante3];

    console.log(arreglo1)
    console.table(arreglo1)

    const ciudadano = {
        nombre: ' Joel',
        apellido: 'Luna',
        direccion: {
            callePrincipal: 'Orquideas',
            calleSecundaria: 'Luis Larenas',
            numeracion: '5620',
            barrio: {
                referencia: 'Diagonal UPC'
            }
        }
    }
    console.log(ciudadano)
    console.log(ciudadano.nombre);
    console.log(ciudadano.direccion);
    console.log(ciudadano.direccion.callePrincipal);

    ciudadano.direccion.callePrincipal = 'Avenidad Amazones';
    console.log(ciudadano)

    const est1 = {
        nombre: 'Joel'
    }

    const est2 = {
        nombre: 'Dante'
    }

    est1.nombre = 'Daniel';

    const arreglosEstudiantes = [est1, est2];
    console.log(arreglosEstudiantes);

    const arreglosEstudiantes2 = [{ nombre: 'Mir', apellido: 'Carl' }, { nombre: 'Mir2', apellido: 'Carl2' }]
    console.log(arreglosEstudiantes2)

    console.log(arreglosEstudiantes2[1].apellido);

    // Destructuracion de Arreglos

    const colores = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    const [c1, c2, c3, c4, c5] = colores;
    console.log(c1);
    console.log(c5);

    const [cuno, cdos] = colores;
    console.log(cuno);
    console.log(cdos);
    const [, , ctres] = colores;
    console.log(ctres);

    const [c01, c02] = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    console.log(c01);
    console.log(c02);

    // puedo destructurar en cualquier parte un codigo un arreglo 

    desestructuracionArreglo(colores);
    const [, p2, p3, p4, p6, p7, p8, p9, p10] = desestructuracionArreglo2();
    console.log(p2);
    console.log(p3);

    // Desestructuracion por operador rest
console.log(' Desestructuracion por operador rest')
const[p1,...resto]=desestructuracionArreglo2();
console.log(p1);
console.log(resto);
// es por si necesito desestructurar una parte de un arreglo y que el resto queda igual



    //como conclusion la desestrucuturacion de objetos se hace atravez de sus posiciones


    // DESESTRUCTURACION DE OBJETOS
    const auto = {
        marca: 'Toyota',
        modelo: 'prius',
        anio: 2020,
        color: 'amarillo'
    }

    // en objeto el criterio de desestructuracion son

    const { marca, color, anio } = auto;
    console.log(color);

    const { anio1 } = {
        marca: 'Toyota',
        modelo: 'prius',
        anio: 2020,
        color: 'amarillo'
    }

    console.log(anio1);
    desestructuracionObjeto(auto);

    // donde yo tenga un objeto ya sea como returno de una funcion yo puedo reestructurar

    const universidad = {
        nombreR: 'UCE',
        direccion: 'America',
        rector: {
            nombre: 'Daniel',
            apellido: 'Teran'
        }
    }

    const { rector, nombreR } = universidad;
    const { apellido } = rector;
    console.log(apellido);


    const universidad2 = {
        nombre2: 'UCE',
        direccion2: 'America',
        rector2: {
            nombreR2: 'Daniel',
            apellido2: 'Teran'
        }


    }

    const {nombre2,rector2:{nombreR2}}= universidad2
    console.log(nombreR2);

    // Dessestructuracion por operador rest
    const autoR = {
        marcaR: 'Toyota',
        modeloR: 'prius',
        anioR: 2020,
        colorR: 'amarillo'
    }

    const {marcaR,...restoo}=autoR;
    console.log(marcaR);
    console.log(restoo);


}

function desestructuracionArreglo([c1, c2, c3]) {
    console.log(c1);
    console.log(c2);
    console.log(c3);


}

function desestructuracionArreglo2() {
    const colores = ['Rosado', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    return colores


}

function desestructuracionObjeto({ marca, color }) {
    console.log(marca);
    console.log(color);
}