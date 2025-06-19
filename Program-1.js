class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation.toLowerCase();
  }

  calculate() {
    switch (this.operation) {
      case 'add':
      case 'addition':
        return this.a + this.b;

      case 'subtract':
      case 'subtraction':
        return this.a - this.b;

      case 'multiply':
      case 'multiplication':
        return this.a * this.b;

      case 'divide':
      case 'division':
        if (this.b === 0) {
          return 'Error: Division by zero';
        }
        return this.a / this.b;

      default:
        return 'Invalid operation';
    }
  }
}const calc1 = new Calculator(10.5, 2.5, 'add');
console.log('Result:', calc1.calculate());
