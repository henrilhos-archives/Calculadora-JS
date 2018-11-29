describe('Calculator', function() {
  it('Deve efetuar uma adição com dois valores fixos', function() {
    var result = addition(2, 2)
    expect(result).toBe(2 + 2)
  })

  it('Deve efetuar uma subtração com dois valores fixos', function() {
    var result = subtraction(2, 2)
    expect(result).toBe(2 - 2)
  })

  it('Deve efetuar uma multiplicação com dois valores fixos', function() {
    var result = multiplication(2, 2)
    expect(result).toBe(2 * 2)
  })

  it('Deve efetuar uma divisão com dois valores fixos', function() {
    var result = division(2, 2)
    expect(result).toBe(2 / 2)
  })

  it('Deve efetuar uma exponenciação com dois valores fixos', function() {
    var result = exponentiation(2, 2)
    expect(result).toBe(2 ** 2)
  })

  it('Deve efetuar uma adição com dois valores randômicos', function() {
    var valueA = randomIntFromInterval(0, 100)
    var valueB = randomIntFromInterval(0, 100)
    var result = addition(valueA, valueB)
    expect(result).toBe(valueA + valueB)
  })

  it('Deve efetuar uma subtração com dois valores randômicos', function() {
    var valueA = randomIntFromInterval(0, 100)
    var valueB = randomIntFromInterval(0, 100)
    var result = subtraction(valueA, valueB)
    expect(result).toBe(valueA - valueB)
  })

  it('Deve efetuar uma multiplicação com dois valores randômicos', function() {
    var valueA = randomIntFromInterval(0, 100)
    var valueB = randomIntFromInterval(0, 100)
    var result = multiplication(valueA, valueB)
    expect(result).toBe(valueA * valueB)
  })

  it('Deve efetuar uma divisão com dois valores randômicos', function() {
    var valueA = randomIntFromInterval(0, 100)
    var valueB = randomIntFromInterval(0, 100)
    var result = division(valueA, valueB)
    expect(result).toBe(valueA / valueB)
  })

  it('Deve efetuar uma exponenciação com dois valores randômicos', function() {
    var valueA = randomIntFromInterval(0, 100)
    var valueB = randomIntFromInterval(0, 100)
    var result = exponentiation(valueA, valueB)
    expect(result).toBe(valueA ** valueB)
  })
})

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}