// es una forma abreviada de declaracion de funciones
// sintaxis mas limpia y predecible

// forma normal
function sumar(num1, num2) {
  return num1 + num2
}

// arrow function estructura
// -------
//  (n) =>  n*2
// n es el parametro
// igual y signo mayor es el cuerpo inicial
// n*2 es el retorno de la funcion

// con arrow function
// no necesitamos parentesis
// se puede retornar en una sola linea
// se debe almacenar en una variable (depende)
const sumar2 = (num1, num2) => num1 + num2;

console.log("--- funcion flecha sin parametros --- ")
const saludar = () => "hola mundo!! "
console.log(saludar());

console.log('--- usando arrow function para callbacks / calculos')
const numeros = [1,2,4,5,6] // arreglo
const numerosDoblesFn = () => numeros.map(function(n) { return n * 2; }) // con funciones
const numerosDoblesArrow = () => numeros.map(n => n * 2) // arrow function
console.log('numeros FN', numerosDoblesFn())
console.log('numeros Arrow', numerosDoblesArrow())
