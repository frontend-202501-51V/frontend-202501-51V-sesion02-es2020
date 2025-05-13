# ES5: Propiedades Getter y Setter

En este capítulo exploraremos las propiedades getter y setter introducidas en ES5. Estas propiedades permiten definir funciones personalizadas para obtener y establecer valores en un objeto, proporcionando un control más preciso sobre cómo se accede y modifica la información.

## Implementación técnica del tema

### Descripción

Las propiedades getter y setter son métodos especiales que se utilizan para controlar el acceso y la modificación de las propiedades de un objeto. Estas propiedades no almacenan valores directamente, sino que ejecutan funciones cuando se accede a ellas o se les asigna un valor.

### Métodos principales

1. **Getter (`get`)**: Define una función que se ejecuta cuando se accede al valor de una propiedad.
2. **Setter (`set`)**: Define una función que se ejecuta cuando se asigna un valor a una propiedad.

### Ejemplo: Uso básico de Getter y Setter

```javascript
console.log('Paso 1: Definiendo el objeto "persona" con propiedades getter y setter...');
const persona = {
  nombre: 'Juan',
  apellido: 'Pérez',
  get nombreCompleto() {
    console.log('Accediendo al getter "nombreCompleto"...');
    // 
  },
  set nombreCompleto(nombreCompleto) {
    console.log(`Usando el setter "nombreCompleto" con valor: "${nombreCompleto}"...`);
    // 
  }
};

console.log('Paso 2: Accediendo al valor de la propiedad "nombreCompleto"...');
console.log(`Resultado del getter: "${persona.nombreCompleto}"`); 

console.log('Paso 3: Modificando el valor de la propiedad "nombreCompleto"...');

console.log('Paso 4: Verificando los valores actualizados...');
console.log(`Nuevo nombre: "${persona.nombre}"`); // 
console.log(`Nuevo apellido: "${persona.apellido}"`); // 
```

## Niveles de aprendizaje

### Nivel 100: Introducción básica

- **Objetivo**: Comprender los fundamentos de las propiedades getter y setter.
- **Ejemplo(s)**: Uso básico de getter y setter para acceder y modificar propiedades.
- **Ejercicio completo**: Diseña un ejercicio práctico para implementar un objeto con propiedades getter y setter.

#### Ejercicio completo: Implementación básica de Getter y Setter

```javascript
console.log('Definiendo el objeto "producto" con propiedades getter y setter...');
const producto = {
  nombre: 'Laptop',
  precio: 1500,
  get descripcion() {
    console.log('Accediendo al getter "descripcion"...');
    return `${this.nombre} cuesta $${this.precio}`;
  },
  set actualizarPrecio(nuevoPrecio) {
    console.log(`Usando el setter "actualizarPrecio" con valor: ${nuevoPrecio}...`);
    if (nuevoPrecio > 0) {
      this.precio = nuevoPrecio;
      console.log(`Precio actualizado a: $${this.precio}`);
    } else {
      console.error('El precio debe ser mayor a 0');
    }
  }
};

console.log('Accediendo a la descripción del producto...');
console.log(producto.descripcion); // 'Laptop cuesta $1500'

console.log('Actualizando el precio del producto...');
producto.actualizarPrecio = 1800;
console.log(producto.descripcion);  // 'Laptop cuesta $1800'

console.log('Intentando asignar un precio inválido...');
producto.actualizarPrecio = -500; // Error: El precio debe ser mayor a 0

describe('Nivel 100: Implementación básica de Getter y Setter', () => {
  it('Debe devolver la descripción correcta del producto', () => {
    const producto = { nombre: 'Laptop', precio: 1500, get descripcion() { return `${this.nombre} cuesta $${this.precio}`; } };
    expect(producto.descripcion).toBe('Laptop cuesta $1500');
  });

  it('Debe actualizar correctamente el precio del producto', () => {
    const producto = { nombre: 'Laptop', precio: 1500, set actualizarPrecio(nuevoPrecio) { if (nuevoPrecio > 0) this.precio = nuevoPrecio; } };
    producto.actualizarPrecio = 2000;
    expect(producto.precio).toBe(2000);
  });

  it('Debe mostrar un error al intentar asignar un precio inválido', () => {
    const producto = { nombre: 'Laptop', precio: 1500, set actualizarPrecio(nuevoPrecio) { if (nuevoPrecio > 0) this.precio = nuevoPrecio; else console.error('El precio debe ser mayor a 0'); } };
    console.error = jest.fn();
    producto.actualizarPrecio = -500;
    expect(console.error).toHaveBeenCalledWith('El precio debe ser mayor a 0');
  });
});
```

### Nivel 200: Aplicaciones prácticas

- **Objetivo**: Aplicar propiedades getter y setter en un caso de negocio.
- **Ejemplo(s)**: Uso de getter y setter para validar y formatear datos.
- **Ejercicio completo**: Diseña un ejercicio práctico para implementar validaciones y formateos en un objeto.

#### Ejercicio completo: Validación y Formateo de Datos

```javascript
console.log('Paso 1: Definiendo el objeto "usuario" con validaciones y formateos...');
const usuario = {
  _edad: 0,
  get edad() {
    console.log('Accediendo al getter "edad"...');
    return `${this._edad} años`;
  },
  set edad(valor) {
    console.log(`Usando el setter "edad" con valor: ${valor}...`);
    if (valor >= 0) {
      this._edad = valor;
      console.log(`Edad actualizada a: ${this._edad} años`);
    } else {
      console.error('La edad no puede ser negativa');
    }
  }
};

console.log('Paso 2: Asignando una edad válida...');
usuario.edad = 25;
console.log(`Resultado del getter: ${usuario.edad}`); // '25 años'

console.log('Paso 3: Intentando asignar una edad inválida...');
usuario.edad = -5; // Error: La edad no puede ser negativa

describe('Nivel 200: Validación y Formateo de Datos', () => {
  it('Debe devolver la edad formateada correctamente', () => {
    const usuario = { _edad: 25, get edad() { return `${this._edad} años`; } };
    expect(usuario.edad).toBe('25 años');
  });

  it('Debe asignar correctamente una edad válida', () => {
    const usuario = { _edad: 0, set edad(valor) { if (valor >= 0) this._edad = valor; } };
    usuario.edad = 30;
    expect(usuario._edad).toBe(30);
  });

  it('Debe mostrar un error al intentar asignar una edad negativa', () => {
    const usuario = { _edad: 0, set edad(valor) { if (valor >= 0) this._edad = valor; else console.error('La edad no puede ser negativa'); } };
    console.error = jest.fn();
    usuario.edad = -10;
    expect(console.error).toHaveBeenCalledWith('La edad no puede ser negativa');
  });
});
```

### Nivel 300: Escenarios avanzados

- **Objetivo**: Profundizar en el uso de getter y setter en escenarios avanzados.
- **Ejemplo(s)**: Uso de getter y setter para calcular propiedades derivadas.
- **Ejercicio completo**: Diseña un ejercicio para calcular propiedades derivadas en un objeto.

#### Ejercicio completo: Cálculo de Propiedades Derivadas

```javascript
console.log('Paso 1: Definiendo el objeto "rectangulo" con propiedades derivadas...');
const rectangulo = {
  _ancho: 0,
  _alto: 0,
  get area() {
    console.log('Accediendo al getter "area"...');
    return this._ancho * this._alto;
  },
  set dimensiones({ ancho, alto }) {
    console.log(`Usando el setter "dimensiones" con valores: ancho=${ancho}, alto=${alto}...`);
    if (ancho > 0 && alto > 0) {
      this._ancho = ancho;
      this._alto = alto;
      console.log(`Dimensiones actualizadas: ancho=${this._ancho}, alto=${this._alto}`);
    } else {
      console.error('Las dimensiones deben ser mayores a 0');
    }
  }
};

console.log('Paso 2: Asignando dimensiones válidas...');
rectangulo.dimensiones = { ancho: 5, alto: 10 };
console.log(`Área calculada: ${rectangulo.area}`); // 50

console.log('Paso 3: Intentando asignar dimensiones inválidas...');
rectangulo.dimensiones = { ancho: -3, alto: 10 }; // Error: Las dimensiones deben ser mayores a 0

describe('Nivel 300: Cálculo de Propiedades Derivadas', () => {
  it('Debe calcular correctamente el área del rectángulo', () => {
    const rectangulo = { _ancho: 5, _alto: 10, get area() { return this._ancho * this._alto; } };
    expect(rectangulo.area).toBe(50);
  });

  it('Debe asignar correctamente las dimensiones válidas', () => {
    const rectangulo = { _ancho: 0, _alto: 0, set dimensiones({ ancho, alto }) { if (ancho > 0 && alto > 0) { this._ancho = ancho; this._alto = alto; } } };
    rectangulo.dimensiones = { ancho: 5, alto: 10 };
    expect(rectangulo._ancho).toBe(5);
    expect(rectangulo._alto).toBe(10);
  });

  it('Debe mostrar un error al intentar asignar dimensiones inválidas', () => {
    const rectangulo = { _ancho: 0, _alto: 0, set dimensiones({ ancho, alto }) { if (ancho > 0 && alto > 0) { this._ancho = ancho; this._alto = alto; } else console.error('Las dimensiones deben ser mayores a 0'); } };
    console.error = jest.fn();
    rectangulo.dimensiones = { ancho: -3, alto: 10 };
    expect(console.error).toHaveBeenCalledWith('Las dimensiones deben ser mayores a 0');
  });
});
```

## Resumen final

- **Mensaje**: Las propiedades getter y setter en ES5 son herramientas poderosas para controlar el acceso y la modificación de datos en objetos.
- **Reflexión**: Dominar estas propiedades mejora la capacidad de escribir código más seguro, legible y eficiente.
