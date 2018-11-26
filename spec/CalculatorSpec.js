describe('Calculator', function() {
    it('Deve efetuar uma adição', function() {
        var calculator = new Calculator()
        var result = calculator.calculate('plus', 2, 2)

        expect(result).toBe(2 + 2)
    })

    it('Deve efetuar uma subtração', function() {
        var calculator = new Calculator()
        var result = calculator.calculate('minus', 2, 2)

        expect(result).toBe(2 - 2)
    })

    it('Deve efetuar uma multiplicação', function() {
        var calculator = new Calculator()
        var result = calculator.calculate('times', 2, 2)

        expect(result).toBe(2 * 2)
    })

    it('Deve efetuar uma divisão', function() {
        var calculator = new Calculator()
        var result = calculator.calculate('divide', 2, 2)

        expect(result).toBe(2 / 2)
    })

    it('Deve efetuar uma exponenciação', function() {
        var calculator = new Calculator()
        var result = calculator.calculate('raised', 2, 2)

        expect(result).toBe(2 ** 2)
    })
})