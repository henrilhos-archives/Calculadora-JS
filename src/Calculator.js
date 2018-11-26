function Calculator() {
    return {
        calculate: function(operator, num1, num2) {
            var response = 0

            switch (operator) {
                case 'plus':
                    response = num1 + num2
                    break
                case 'minus':
                    response = num1 - num2
                    break
                case 'times':
                    response = num1 * num2
                    break
                case 'divide':
                    response = num1 / num2
                    break
                case 'raised':
                    response = num1 ** num2
                    break
            }

            return response
        }
    }
}

function calculate(operator) {
    var calculator = new Calculator()
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)

    document.getElementById('response').innerHTML = calculator.calculate(operator, num1, num2)
}