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
