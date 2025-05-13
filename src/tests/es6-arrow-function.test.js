describe("validando compatibilidad de function y arrow function", () => {

  it("debe arrow y function retornar el mismo resultado", () => {
    // declara una funcion, que retorne la resta de dos numeros
    const myFn = function resta(num1, num2){ return num1 - num2}

    // declara un arrow function que retorne la resta de dos numeros
    const myArrowFn = (num1, num2) => num1-num2

    expect(myFn(5,3)).toBe(myArrowFn(5,3)) //
  })
})
