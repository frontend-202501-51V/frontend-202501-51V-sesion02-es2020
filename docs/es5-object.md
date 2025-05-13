# ES5: Métodos de Objetos

En este capítulo exploraremos los métodos más importantes de los objetos en ES5. Estos métodos son fundamentales para trabajar con objetos en JavaScript y permiten realizar operaciones como obtener claves, valores, pares clave-valor, proteger objetos, y más.

## Implementación técnica del tema

### Descripción

Los objetos son una de las estructuras de datos más importantes en JavaScript. ES5 introdujo varios métodos útiles para trabajar con objetos, que permiten manipular y proteger sus propiedades de manera eficiente.

### Métodos principales

1. **`Object.keys`**: Devuelve un array con las claves (propiedades) de un objeto.
2. **`Object.values`**: Devuelve un array con los valores de las propiedades de un objeto.
3. **`Object.entries`**: Devuelve un array de pares clave-valor.
4. **`Object.freeze`**: Congela un objeto, evitando cualquier modificación.
5. **`Object.seal`**: Sella un objeto, permitiendo modificar propiedades existentes pero no agregar o eliminar propiedades.
6. **`Object.getOwnPropertyDescriptor`**: Obtiene la descripción de una propiedad específica.
7. **`Object.defineProperty`**: Define una nueva propiedad o modifica una existente con configuraciones específicas.

### Ejemplo: Uso de `Object.keys`, `Object.values` y `Object.entries` en un contexto genérico

```javascript
// Definimos un objeto genérico con información básica
const datos = {
  clave1: 'valor1',
  clave2: 'valor2',
  clave3: 'valor3'
};

// Obtener las claves del objeto
// const claves = 
// console.log('Claves:', claves); // ['clave1', 'clave2', 'clave3']

// Obtener los valores del objeto
// const valores = 
// console.log('Valores:', valores); // ['valor1', 'valor2', 'valor3']

// Obtener los pares clave-valor del objeto
// const pares = 
// console.log('Pares clave-valor:', pares);
// [['clave1', 'valor1'], ['clave2', 'valor2'], ['clave3', 'valor3']]
```

## Niveles de aprendizaje

### Nivel 100: Introducción básica

- **Objetivo**: Comprender los fundamentos de los métodos básicos de objetos.
- **Ejemplo(s)**: Uso de `Object.keys`, `Object.values` y `Object.entries`.
- **Ejercicio completo**: Diseña un ejercicio práctico para explorar las claves, valores y pares clave-valor de un objeto.

#### Ejercicio completo: Exploración básica de un objeto

```javascript
  // es5-object-100.mjs
  
// Paso 1: Define un objeto con propiedades básicas
const producto = {
  nombre: 'Laptop',
  precio: 1500,
  disponible: true
};

// Paso 2: Obtén las claves del objeto
// const claves = 
// console.log('Claves:', claves);

// Paso 3: Obtén los valores del objeto
// // const valores = 
// console.log('Valores:', valores);

// Paso 4: Obtén los pares clave-valor del objeto
// const pares = 
// console.log('Pares clave-valor:', pares);

export { pares, valores, claves, producto }

// es5-object-100.test.mjs
import { pares, valores, claves, producto } from '../es5-object-100.mjs'

// `expect / toEqual`

describe('Nivel 100: Exploración básica de un objeto', () => {
  it('Debe obtener correctamente las claves del objeto', () => {

  });

  it('Debe obtener correctamente los valores del objeto', () => {

  });

  it('Debe obtener correctamente los pares clave-valor del objeto', () => {
  });
});
```

### Nivel 200: Aplicaciones prácticas

- **Objetivo**: Aplicar los métodos de objetos en un caso de negocio.
- **Ejemplo(s)**: Uso de `Object.freeze` y `Object.seal` para proteger objetos.
- **Ejercicio completo**: Diseña un ejercicio práctico para proteger un objeto de configuración.

#### Ejercicio completo: Protección de un objeto de configuración

```javascript
// es5-object-200.mjs

// Paso 1: Define un objeto de configuración
const configuracion = {
  tema: 'oscuro',
  idioma: 'es',
  notificaciones: true
};

export const configuracionOriginal = { ...configuracion };

// Paso 2: Congela el objeto para evitar modificaciones

console.log('Configuración inicial:', configuracion);

// Paso 3: Intenta modificar, agregar y eliminar propiedades
try {
  //  
} catch (error) {
  console.error('Error al modificar:', error.message);
}

try {
  // 
} catch (error) {
  console.error('Error al agregar:', error.message);
}

try {
  // 
} catch (error) {
  console.error('Error al eliminar:', error.message);
}

console.log('Configuración final:', configuracion);


// es5-object-200.test.mjs
import { configuracionOriginal } from '../es5-object-200.mjs'

describe('Nivel 200: Protección de un objeto de configuración', () => {
  it('Debe mantener el objeto congelado sin modificaciones', () => {
    Object.freeze(configuracionOriginal);

    expect(() => {
      // modifica una propiedad existente
    }).toThrow();

    expect(() => {
      // agrega una nueva propiedad
    }).toThrow();

    expect(() => {
      // elimina una propiedad existente
    }).toThrow();

    expect(configuracionOriginal).toEqual({
      // propiedades originales
    });
  });
});
```

### Nivel 300: Escenarios avanzados

- **Objetivo**: Profundizar en el uso de métodos avanzados como `Object.defineProperty`.
- **Ejemplo(s)**: Uso de `Object.defineProperty` para definir propiedades con configuraciones específicas.
- **Ejercicio completo**: Diseña un ejercicio para definir propiedades avanzadas en un objeto.

#### Ejercicio completo: Procesamiento avanzado de datos

```javascript
// es5-object-300.mjs

// Paso 1: Define un conjunto de datos complejo
console.log('Paso 1: Definiendo el conjunto de datos de empleados...');
const empleados = [
  { id: 1, nombre: 'Ana', departamento: 'Ventas', salario: 5000 },
  { id: 2, nombre: 'Luis', departamento: 'IT', salario: 7000 },
  { id: 3, nombre: 'Carlos', departamento: 'Ventas', salario: 4500 },
  { id: 4, nombre: 'María', departamento: 'IT', salario: 8000 },
  { id: 5, nombre: 'Sofía', departamento: 'Recursos Humanos', salario: 4000 }
];
console.log('Lista completa de empleados:', empleados);

// Paso 2: Filtrar empleados por departamento
console.log('Paso 2: Filtrando empleados del departamento IT...');
// const empleadosIT = 
// console.log('Empleados del departamento IT:', empleadosIT);

// Paso 3: Mapear los datos para obtener un resumen
console.log('Paso 3: Mapeando datos para obtener un resumen de empleados IT...');
// const resumenIT =
// console.log('Resumen de empleados IT (nombre y salario anual):', resumenIT);

// Paso 4: Reducir los datos para calcular el total de salarios
console.log('Paso 4: Calculando el total de salarios mensuales del departamento IT...');
// const totalSalariosIT = 
// console.log('Total de salarios mensuales del departamento IT:', totalSalariosIT);

// Paso 5: Generar un reporte final
console.log('Paso 5: Generando el reporte final del departamento IT...');
const reporteIT = {
  departamento: 'IT',
  empleados: resumenIT,
  totalSalarios: totalSalariosIT
};
// console.log('Reporte final del departamento IT:', );

// es5-object-300.test.mjs

describe('Nivel 300: Procesamiento avanzado de datos', () => {
  it('Debe filtrar correctamente los empleados del departamento IT', () => {
    const empleados = [
      { id: 1, nombre: 'Ana', departamento: 'Ventas', salario: 5000 },
      { id: 2, nombre: 'Luis', departamento: 'IT', salario: 7000 },
      { id: 3, nombre: 'Carlos', departamento: 'Ventas', salario: 4500 },
      { id: 4, nombre: 'María', departamento: 'IT', salario: 8000 },
      { id: 5, nombre: 'Sofía', departamento: 'Recursos Humanos', salario: 4000 }
    ];
  });

  it('Debe calcular correctamente el total de salarios del departamento IT', () => {
    const empleadosIT = [
      { id: 2, nombre: 'Luis', departamento: 'IT', salario: 7000 },
      { id: 4, nombre: 'María', departamento: 'IT', salario: 8000 }
    ];
  });

  it('Debe generar correctamente el reporte del departamento IT', () => {
    const reporteIT = {
      departamento: 'IT',
      empleados: [
        { nombre: 'Luis', salarioAnual: 84000 },
        { nombre: 'María', salarioAnual: 96000 }
      ],
      totalSalarios: 15000
    };
  });
});
```

## Resumen final

- **Mensaje**: Los métodos de objetos en ES5 son herramientas esenciales para trabajar con datos estructurados en JavaScript.
- **Reflexión**: Dominar estos métodos mejora la capacidad de manipular y proteger datos, lo que es crucial en el desarrollo de aplicaciones robustas y seguras.
