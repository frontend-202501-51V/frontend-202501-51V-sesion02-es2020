'use strict';

// estructura de un objeto, key / value
const myObj = {foo: true}
// 1. Object.keys - obtener las llaves
// 2. Object.values - obtener los valores
// 3. Object.entries - obtener valores en clave-valor
// 4. Object.freeze - para congelar un objeto
// 5. Object.seal - sellar un objeto - no se permite agregar/quitar pero si MODIFICAR

// 6. Object.getOwnPropertyDescriptor: conocer la descripcion de una propiedad
// 7. Object.defineProperty - para definir una propiedad

const usuario = {
  nombre: 'juan',
  edad: 30,
  profesion: "desarrollador"
};

// me piden obtener las llaves del objeto
console.log('objeto usuario', usuario)
const claves = Object.keys(usuario) // aqui ya tengo las llaves del objeto ['nombre', 'edad', 'profesion']
console.log('claves con Object.keys', claves) // ['nombre', 'edad', 'profesion']

console.log('--- obtener los pares clave-valor ---');
// [ ["nombre", "juan"], ["edad", 30], ... ]
const pares = Object.entries(usuario);
console.log(pares)

console.log('--- obtener solamente los valores ---');
const valores = Object.values(usuario);
console.log('valores', valores)

console.log('--- debemos proteger un objeto de configuracion ---');
const configuracion = {
  tema: 'oscuro',
  idioma: 'es',
  notificaciones: true
}
console.log("configuracion antes de freeze", configuracion)
Object.freeze(configuracion) // implementacion de congelamiento de objeto
try {
  configuracion.tema = 'claro' // no funcionara
} catch (error) {
  console.error("error al modificar", error.message)
}
console.log('configuracion final', configuracion)

console.log('--- debemos proteger un objeto pero que no se permita agregar/quitar propiedades ---');
const usuarioSellado = {nombre: 'ana', edad: 25};
Object.seal(usuarioSellado);
usuarioSellado.edad = 30; // esto es permitido
try {
  usuarioSellado.profesion = 'Ingenieria' // no
  delete usuario.edad; // no
} catch (error) {
  console.error('error al agregar una propeidad a un objeto sellado', error.message);
}
console.log('usuario sellado', usuarioSellado)

