// describe - nombre de la prueba unitaria
// it nombre del caso unitario
// expect (esperar) toBe(que sea) -> valor

function sumarDosNumeros(num1, num2){
  return num1 + num2;
}

describe("valida la funcion sumarDosNumeros", () => {
  it('debe sumar dos numeros', () => {
    expect(sumarDosNumeros(2,4)).toBe(6)
    expect(sumarDosNumeros(3,6)).not.toBe(20) // correcto
    expect(sumarDosNumeros(3,6)).not.toBeFalsy()
    expect(sumarDosNumeros(123456, 12315)).toBe(135771)
    expect(sumarDosNumeros(6, 3)).toBe(9)
    expect(sumarDosNumeros(23, 10)).toBe(33)
  })
})
