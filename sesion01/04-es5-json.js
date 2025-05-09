// JSON - Javascript object notation, basado en key values

// 1. JSON.stringify - para convertir un JSON a una cadena -> FRONTEND -> BACKEND
// 2. JSON.parse - para convertir una cadena JSON a objeto javascript // BACKEND -> FRONTEND

const usuario = {
  nombre: 'juan',
  edad: 30,
  activo: true
}
console.log("--- JSON.stringify  para transformar a texto un objeto---")
console.log('objeto', usuario)
const jsonUsuario = JSON.stringify(usuario)
console.log("JSON a texto", jsonUsuario) // {"nombre":"juan","edad":30,"activo":true}

console.log("--- JSON.parse ---")
const objetoUsuario = JSON.parse(jsonUsuario);
console.log("objeto otra vez", objetoUsuario) // { nombre: 'juan', edad: 30, activo: true }
