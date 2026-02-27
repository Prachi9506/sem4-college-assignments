const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


let exp = 1;
switch (exp) {
    case 1:
        console.log("Sum: " + sum(10, 5));
        break;
    case 2:
        console.log("Subtract: " + subtract(10, 5));
        break;
    case 3:
        console.log("Multiply: " + multiply(10, 5));
        break;
    case 4:
        console.log("Divide: " + divide(10, 5));
        break;
    default:
        console.log("Invalid Expression");
}