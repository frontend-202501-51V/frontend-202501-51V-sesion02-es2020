// caracteristica muy usada en ES6

// sintaxis que permite desempacar valores de arreglos y propiedades de objetos

//
// ejemplo
const arr1 = [1, 2, 3]
// quiero acceder al primer y segundo elemento
const primerArr1 = arr1[0] // accediendo via el indice
const ultimoArr1 = arr1[arr1.length - 1] // accediendo via el indice

console.log('ahora con destructuring') // arreglos
const [primero, , ultimo] = arr1
console.log('valores', primero, ultimo)


console.log('destructuring con objetos')
const obj1 = {
  nombre: 'carlo',
  edad: 32
}
// sin destructuring
const nombreObj1 = obj1.nombre
const edadObj1 = obj1.edad
//  con destructuring
// const { nombre, edad} = obj1
const { nombre: miNombre, edad: miEdad } = obj1
console.log('objetos con destructuring', miNombre, miEdad) // cambiando los nombres por defecto


// caso de la vida real

const respAPI = {
  data: {
    usuario: {
      id: 1,
      nombre: 'miguel'
    },
    token: 'Bearer 712378'
  }
} // rpta de un apo
console.log("\n\n--- obteniendo el nombre sin destructuring")
console.log(respAPI.data.usuario.nombre) // forma larga

// con destructuring
const { data: {
  usuario: {
    nombre // valor accesible
  }
}
} = respAPI
console.log("validacion de destructuring ", nombre)
