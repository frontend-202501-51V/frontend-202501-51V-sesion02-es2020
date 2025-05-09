// indicar al codigo que se ejecute en modo estricto
// 1. prevenir el uso de variables no declaradas
// 2. lanzar errores para operaciones que fallan en forma silenciosa
// 3. restringe el uso de palabras reservadas ejemplo: const let = 12;
// 4. ayuda a evitar errores comunes y vaalidar que el codigo sea seguro

// cafeteria
// deberia tener reglas, sino causa problemas silenciosos

function cafeteriaSinReglas() {
  // sin 'use-strict' errores aparecen
  pedido = 'cafe con leche';
  console.log('pedido registrado', pedido);
}

function cafateriaConReglas() {
  'use strict'; // activando el modo estricto

  try {
    pedido = 'cafe con leche'; // no se usa
  } catch (error) {
    console.error("error detectado", error.message) // error por no usar const/let
  }
}

console.log("=== cafeteria sin reglas === ")
cafeteriaSinReglas();

console.log("=== cafeteria con reglas === ")
cafateriaConReglas();
