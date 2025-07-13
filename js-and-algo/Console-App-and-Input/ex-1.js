// Command Line Calculator

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Please enter 3 arguments: <number1> <operation> <number2>");
  process.exit(1);
}

const [num1, operator, num2] = args;
const a = parseFloat(num1);
const b = parseFloat(num2);

if (isNaN(a) || isNaN(b)) {
  console.log("Please enter valid numbers");
  process.exit(1);
}

let result;

switch (operator) {
  case '+':
    result = a + b;
    break;
  case '-':
    result = a - b;
    break;
  case '*':
    result = a * b;
    break;
  case '/':
    if (b === 0) {
      console.log("Cannot divide by zero");
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.log("Invalid operation. Use +, -, *, or /");
    process.exit(1);
}

console.log(`${a} ${operator} ${b} = ${result}`);
