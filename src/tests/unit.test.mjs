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
