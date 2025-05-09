// arreglos
const arr = [3, 2, 5, 4] // 4 valores
console.log('accediendo a los valores')
// primer valor
console.log(arr[0]) // 3
console.log("obteniendo el tercer valor")
console.log(arr[2]) // 5

// ejemplo: valores numericos y queremos filtrar todos los numeros que sean cero
const arrNum = [2, 5, 7, 1, 0, 2, 3, 0, 4]
// 1. iterar sobre todos los elementso
// 2. asignar a una variable los que no sean cero
// 3. retornar el nuevo valor
// 4. validar el resultado

// metodo filter: crear un arrego con elementos que cumplen una condicion
// la funcion recibe cada uno de los valores del arreglo
// si no cumple la condicion entonces se FILTRA
const arrNoZero = arrNum.filter(function (numero) { return numero !== 0 })
console.log('arrNoZero', arrNoZero)

// probando el filter de una forma mas entendible
// que sucede??
const arrNoZero2 = arrNum.filter(function (numero) { return false; })
console.log('filtrando con false')
console.log(arrNoZero2)

const arrNoZero3 = arrNum.filter(function (numero) { return true; })
console.log('filtrando con true')
console.log(arrNoZero3)

// 1. forEach: iterar sobre cada uno de los elementos de un arreglo
// [1,2,3].forEach(function(num) { console.log(num)})
// 2. filter: filtra un arreglo en base a una condicion
// 3. map: transforma un arreglo a otro
  // [1,2,3]
  // [2,4,6]
// 4. reduce: reducir elementos del arreglo
// 5. some: validar que cada elemento cumpla la condicion
  // [2,4,6,8,10]
  // condicion: de que TODOS SEAN PARES -> TRUE | FALSE
// 6.every - si alguien no cumple retorna FALSE
// 7. indexOf: encuentra el indice de un arreglo
  // [10,20,30,50]
  // cual es el indice del valor 30??

console.log("validando el uso de indexOf");
console.log([10,20,30,50].indexOf(30))

// en aplicaciones reales se trabaja con JSON

const compras = {
  carrito: [
    {
      nombre: 'champu',
      costo: 12
    },
    50,
    'hola mundo',
    {
      nombre: 'comida',
      costo: 30

    }
  ]
}

const productos = [
  {
    nombre: "laptop", precio: 1500
  },
  {
    nombre: "mouse", precio: 20
  },
  {
    nombre: "teclado", precio: 50
  },
  {
    nombre: "monitor", precio: 300
  },
]
// filtrame y obten los productos mas caros que sean mayores a 100 e imprimelos
console.log("--- filter ----")
const productosCaros = productos.filter(function(producto){ return producto.precio > 100;});
console.log('productos caros: ', productosCaros)

// usando reduce para calcular el total del carrito
console.log("--- reduce ---");
const totalCarrito = productos.reduce(function(total, producto){ return total + producto.precio }, 0)
console.log('total del carrito: ', totalCarrito)

// usando filter + reduce
console.log("--- filter + reduce ---");
const totalProductosCaros = productos
  .filter(function(producto){ return producto.precio > 100;})
  // filter retorna un arreglo y  se reduce
  .reduce(function(total, producto){ return total + producto.precio }, 0);

console.log('total productos caros ', totalProductosCaros)
