function Multiplication() {
  this.calculate = function(valueA, valueB) {
    var total = valueA * valueB
    if (isNaN(total)) return 0
    else return total
  }
}