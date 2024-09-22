// -1. let y var: comparativa de los respectivos alcances (scopas).
function letvariable() {
    let x=1;
    if(true) {
        let x=2;
        console.log(x);  //Este va a imprimir '2'
    }
    console.log(x);  //Este va a imprimir '1'
}

function varvariable() {
    var x=1;
    if(true) {
        var x=2;
        console.log(x);  //Este va a imprimir '2'
    }
    console.log(x);  //Este va a imprimir '2'
}

// -2. let y var: redeclaración de variables y hoisting de declaraciones.
//Let
let saludar = 'Hola'; // El let se puede redeclarar si esta fuera del mismo bloque.
/*let saludar = 'Adios';*/ // El let no se puede redeclarar si esta dentro del mismo bloque.
if(true) { 
    let saludar = 'Adios';
    console.log(saludar);  //Este va a imprimir 'Adios'
}



//Var

console.log(saludar); //El var se permite redeclarar en el mismo bloque.
var saludar1 = 'Hola';
var saludar1 = 'Adios';
console.log(saludar1);



// -3. Conversión a tipo numérico desde varios otros tipos de dato con Numeric().
let Nombre = 'Anass';
console.log(Number(Nombre)); //Este va a imprimir NaN.
let vBoolean = true;
console.log(Number(vBoolean)); //Este va a imprimir 1.
let vNull = null;
console.log(Number(vNull)); //Este va a imprimir 0.
let vUndefined = undefined;
console.log(Number(vUndefined)); //Este va a imprimir NaN.

// -4. Diferencia de uso entre Numeric() vs parseInt().
let vNumber="123p";
console.log(Number(vNumber)+1); //Este va a imprimir NaN.
let vNumber2="123p";
console.log(parseInt(vNumber2)+1); //Este va a imprimir 124.
// -5. Diferencia entre null y undefined.
let vNull2 = null;
console.log(vNull2); //Este va a imprimir 'null'.
let vUndefined2;
console.log(vUndefined2); //Este va a imprimir 'undefined'.

console.log(vNull2 == vUndefined2); //Este va a imprimir 'true'.
console.log(vNull2 === vUndefined2); //Este va a imprimir 'false'.
// -6. Comparación entre igualdad estricta y no estricta.

let vNumero = 1;
let VNombre = '1';
console.log(vNumero == VNombre); //Este va a imprimir 'true'.
console.log(vNumero === VNombre); //Este va a imprimir 'false'.


// -7. ¿Uso del operador condicional?. Comparación con estructura yf clásica.
let temperatura =90;
let clima;
if(temperatura > 100) {
    clima = 'Calor';
} 
else {
    clima = 'Frio';
}
console.log(clima); // Podemos escribir este estructura de otra manera con el operador condicional.

clima = (temperatura > 100) ? 'Calor' : 'Frio';
console.log(clima);




// -8. Uso del operador nullish coallescing.
let x = 0;
let y=1;
let result = (x != null && x != undefined) ? x : y;
console.log(result); // Este va a imprimir '0', y podemos usar el operador nullish coallescing.

result = (x ?? y);
console.log(result); // Este va a imprimir '0'.

// -9. Break y continúe en bucles for.
for (let i = 0; i < 10; i++) { 
    if(i == 5) {
        break;
    }
    console.log(i);
}// Este va a imprimir 0, 1, 2, 3, 4. Y sale del bucle.

for (let i = 0; i < 10; i++) {
    if(i == 5) {
        continue;
    }
    console.log(i);
}// Este va a imprimir 0, 1, 2, 3, 4, 6, 7, 8, 9. Y continua el bucle.
// -10. Funciones con parámetros por defecto.
function saludar (nombre, saludo = 'Hola') {
    console.log(`${saludo} ${nombre}`);
}
saludar(); // Este va a imprimir 'Hola undefined'.
// -11. Función pasada como parámetro en otra función.
function sumar (a, b) {
    return a + b;
}
function restar (a, b) {
    return a - b;
}
console.log(restar(sumar(1, 2), 3)); // Este va a imprimir '0'.
// -12. Hoisting en declaraciones de funciones vs hoisting en expresiones de funciones.
//Hoisting en declaraciones de funciones
sayHello(); // Este va a imprimir 'Hello'.
function sayHello() { // 
    console.log('Hello');
}
//Hoisting en expresiones de funciones
sayHello1(); // En las expresiones de funciones, solo la variable es "elevada", pero la asignación de la función no lo es.
            //Esto significa que, si intentas invocar la función antes de la asignación, obtendrás un error.
let sayHello1 = function() { 
    console.log('Hello');
}
// -13. Traducción de una función en notación clásica en la notación flecha (funciones de una línea de código y funciones de más de una línea de código).
function sumar1 (a, b) { //función de una linea
    return a + b;
} 
//podemos escribir este funcion de la siguiente manera:
let sumar2 = (a, b) => a + b;

function calculadora (a,b, operacion) {
        switch(operacion) {
            case 'sumar':
                return a + b;
            case 'restar':
                return a - b;
            case 'multiplicar':
                return a * b;
            case 'dividir':
                return a / b;
            default:
                return 'No se reconoce la operación';
        }
}

console.log(calculadora(1, 2, 'sumar')); // Este va a imprimir '3'
//Podemos escribir esta función de la siguiente manera:
let calculadora2 = (a, b, operacion) => {
    switch(operacion) {
        case 'sumar':
            return a + b;
        case 'restar':
            return a - b;
        case 'multiplicar':
            return a * b;
        case 'dividir':
            return a / b;
        default:
            return 'No se reconoce la operación';
    }
}
// -14. Depuración de código en el navegador web: poner breakpoints e inspeccionar el valor de una variable.
function calcularSuma(a, b) {
    let resultado = a + b; //Ponemos el breakpoint en este linea , y recargamos la pagina para ver el resultado.
    return resultado;
}
//Ponemos el brea
function iniciarCalculo() {
    let valor1 = 5;
    let valor2 = 10;
    let suma = calcularSuma(valor1, valor2);
    console.log("Resultado de la suma:", suma);
}

iniciarCalculo();