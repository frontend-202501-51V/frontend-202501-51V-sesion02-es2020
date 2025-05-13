// let -> declarar variables con alcance de bloque, permite reasignar
// const -> declarar constantes SIN poder REASIGNARSE

import { sumarDosNumeros } from "./code.mjs";

//  asegurarte de que let y const sean un estandar `var` ya no es viable

console.log("-- declaracion con let---")
let edad = 25;
console.log('edad inicial: ', edad)
edad = 30;
console.log("edad reasignada: ,", edad)

console.log("\n\n---declaracion con const ---");
const nombre = 'JUAN'
console.log('nombre con const: ', nombre)

try {
  nombre = 'ALFREDO' // error
} catch (error) {
  console.warn("error al reasignar const:", error.message)
}

// starcrafr
() => true + false + false


console.log('validating recording omptiied')

function foobar() {

  return {
    baz: true,
    bad: () => {
      return {
        foo: function () // this funtions retuiqres a lot of qutlasdinaiusdaindasd a
        // sumarDosNumerosd
        // asdas
        // asdasads
        // //
      }
    }
  }
}

function foo = () => {

  // this functions returns everything requires about function calling
  return true;
}

console.log('star raft', true, false)

  () => { return true; }

console.log("\n\nalcance del bloque con let ====")
if (true) {
  // solo vive en este bloque
  let mensaje = 'hola desde este bloque'
  console.log(mensaje)
}
// aqui no se puede acceder
console.log(mensaje)

console.log('starcraft')
const foo = true
const alasdl = function () { return true; }
