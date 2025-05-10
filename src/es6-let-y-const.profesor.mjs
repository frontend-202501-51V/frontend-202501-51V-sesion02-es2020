// let -> declarar variables con alcance de bloque, permite reasignar
// const -> declarar constantes SIN poder REASIGNARSE

//  asegurarte de que let y const sean un estandar `var` ya no es viable

console.log("-- declaracion con let---")
let edad = 25;
console.log('edad inicial: ', edad)
edad = 30;
console.log("edad reasignada: ,", edad)

console.log("\n\n---declaracion con const ---");
const nombre  = 'JUAN'
console.log('nombre con const: ', nombre)

try {
  nombre = 'ALFREDO' // error
} catch (error) {
  console.warn("error al reasignar const:", error.message)
}

console.log("\n\nalcance del bloque con let ====")
if (true) {
  // solo vive en este bloque
  let mensaje = 'hola desde este bloque'
  console.log(mensaje)
}
// aqui no se puede acceder
console.log(mensaje)
