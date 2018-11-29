function Calculator() {
  this.operation = null
}

Calculator.prototype = {
  setOperation: function(operation) {
    this.operation = operation
  },
  calculate: function(valueA, valueB) {
    return this.operation.calculate(valueA, valueB)
  }
}