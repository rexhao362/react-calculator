class Operators {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    add = () => this.a + this.b

    sub = () => this.a - this.b

    mul = () => this.a * this.b

    div = () => this.a / this.b

    pow = () => Math.pow(this.a, this.b)

    pi = () => Math.PI

    nRoot = () => Math.pow(this.a, 1/this.b)

    fraction = () => this.a/this.b

    percent = () => (this.a/this.b) * 100

    
}

module.exports = Operators