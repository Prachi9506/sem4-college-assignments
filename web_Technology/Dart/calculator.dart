import 'dart:io';
void main() {
  print("Enter first number:");
  int a = int.parse(stdin.readLineSync()!);
  print("Enter second number:");
  int b = int.parse(stdin.readLineSync()!);
  print("\nChoose operation:");
  print("1. Sum");
  print("2. Difference");
  print("3. Product");
  print("4. Division");
  int c = int.parse(stdin.readLineSync()!);
  switch (c) {
    case 1:
      print("Sum of $a and $b is ${a + b}");
      break;
    case 2:
      print("Difference of $a and $b is ${a - b}");
      break;
    case 3:
      print("Product of $a and $b is ${a * b}");
      break;
    case 4:
      if (b == 0) {
        print("Division by zero not allowed");
      } else {
        print("Result: ${a / b}");
      }
      break;
    default:
      print("Wrong choice");
  }
}