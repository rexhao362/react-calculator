import Operators from 'operators'

class App {
    constructor() {
        this.displayValue = 0
        this.firstValue = 0
        this.secondValue = 0
        this.operators = new Operators()
    }

    clearInput = () => {
        this.displayValue = 0
        this.firstValue = 0
        this.secondValue = 0
    }

    handleOperator = op => {
        this.firstValue = this.displayValue
        this.displayValue = 0
    }

    handleNumber = num => {
        this.displayValue =
            this.displayValue === 0
                ? str(num)
                : str(this.displayValue + num)
    }
}

module.exports = App
