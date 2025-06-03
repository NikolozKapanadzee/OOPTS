"use strict";
// // გადავწეროთ მოცემული ფაილი typescript_ზე.
// function calculateRectangleArea(rectangle: RectangleTypes): number {
//   return rectangle.width * rectangle.height;
// }
// const rectangle: RectangleTypes = {
//   width: 5,
//   height: 10,
// };
// console.log(calculateRectangleArea(rectangle));
// function calculateRectanglePerimeter(rectangle: RectangleTypes): number {
//   return 2 * (rectangle.width + rectangle.height);
// }
// const rectangle: RectangleTypes = {
//   width: 5,
//   height: 10,
// };
// console.log(calculateRectanglePerimeter(rectangle));
// function calculateCircleArea(circle: CircleTypes): number {
//   return Math.PI * Math.pow(circle.radius, 2);
// }
// const circle: CircleTypes = {
//   radius: 5,
// };
// console.log(calculateCircleArea(circle));
// function calculateCirclePerimeter(circle: CircleTypes): number {
//   return 2 * Math.PI * circle.radius;
// }
// const circle: CircleTypes = {
//   radius: 10,
// };
// console.log(calculateCirclePerimeter(circle));
// // Independent Functions
// function addNumbers(a: number, b: number) {
//   return a + b;
// }
// console.log(addNumbers(2, 5));
// function multiplyNumbers(a: number, b: number) {
//   return a * b;
// }
// console.log(multiplyNumbers(5, 10));
// function capitalizeString(str: string) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(capitalizeString("guja kupreishvili"));
// function filterEvenNumbers(numbers: number[]) {
//   return numbers.filter((num) => num % 2 === 0);
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// function findMax(numbers: number[]) {
//   return Math.max(...numbers);
// }
// console.log(findMax([1, 6, 2, 5, 2, 6, 9, 10, 20, 3]));
// function isPalindrome(str: string): boolean {
//   const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//   const reversedStr = cleanStr.split("").reverse().join("");
//   return cleanStr === reversedStr;
// }
// console.log(isPalindrome("guja kupreishvili kargi bichia"));
// console.log(isPalindrome("123321"));
// function calculateFactorial(n: number): number {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * calculateFactorial(n - 1);
//   }
// }
// console.log(calculateFactorial(10));
// // Test Cases
// // სასურველია გავაკეთოთ Rectangle და Circle კლაზები და დავუმატოთ შესაბამისი მეთოდები.
// class Rectangle {
//   private width: number;
//   private height: number;
//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea(): number {
//     return this.width * this.height;
//   }
//   getPerimeter(): number {
//     return 2 * (this.width + this.height);
//   }
// }
// class Circle {
//   private radius: number;
//   constructor(radius: number) {
//     this.radius = radius;
//   }
//   getArea(): number {
//     return Math.PI * this.radius ** 2;
//   }
//   getPerimeter(): number {
//     return 2 * Math.PI * this.radius;
//   }
// }
// const rectangle = new Rectangle(10, 12);
// const circle = new Circle(8);
// const rectangleArea = rectangle.getArea();
// const rectanglePerimeter = rectangle.getPerimeter();
// const circleArea = circle.getArea();
// const circlePerimeter = circle.getPerimeter();
// console.log(
//   `Rectangle Area: ${rectangleArea}, Perimeter: ${rectanglePerimeter}`
// );
// console.log(`Circle Area: ${circleArea}, Perimeter: ${circlePerimeter}`);
// class BasicCalculator {
//   private num1: number;
//   private num2: number;
//   private array?: number[];
//   constructor(num1: number, num2: number, array?: number[]) {
//     this.num1 = num1;
//     this.num2 = num2;
//     this.array = array;
//   }
//   addNumbers(): number {
//     return this.num1 + this.num2;
//   }
//   multiplyNumbers(): number {
//     return this.num1 * this.num2;
//   }
//   evenNumbers(): number[] | undefined {
//     return this.array?.filter((el) => el % 2 === 0);
//   }
//   maxNumber(): number | undefined {
//     if (!this.array || this.array.length === 0) return undefined;
//     return Math.max(...this.array);
//   }
//   factorialResult(): number {
//     let result = 1;
//     for (let i = 1; i <= this.num1; i++) {
//       result = result * i;
//     }
//     return result;
//   }
// }
// const calculator = new BasicCalculator(10, 20, [23, 56, 12, 89, 43]);
// const sumResult = calculator.addNumbers();
// console.log(`Sum: ${sumResult}`);
// const multiplicationResult = calculator.multiplyNumbers();
// console.log(`Multiplication: ${multiplicationResult}`);
// const evenNumbers = calculator.evenNumbers();
// console.log(`Even Numbers: ${evenNumbers}`);
// const maxNumber = calculator.maxNumber();
// console.log(`Max Number: ${maxNumber}`);
// const factorial = calculator.factorialResult();
// console.log(`Factorial: ${factorial}`);
// class StringCalculator {
//   private str: string;
//   constructor(str: string) {
//     this.str = str;
//   }
//   capitalizedString(): string {
//     return this.str.charAt(0).toUpperCase() + this.str.slice(1);
//   }
//   isPalindromeResult(): string | boolean {
//     const cleanStr = this.str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//     const reversedStr = cleanStr.split("").reverse().join("");
//     return cleanStr === reversedStr;
//   }
// }
// const string = new StringCalculator("hello world");
// const capitalizedString = string.capitalizedString();
// console.log(`Capitalized String: ${capitalizedString}`);
// const isPalindromeResult = string.isPalindromeResult();
// console.log(`Is Palindrome: ${isPalindromeResult}`);
// /*
// 2. შევქმნათ კლასი BankAccount რომელსაც ექნება accountNumber,balance და transactionHistory ფროფერთები.
//    კონსტრუქტორში უნდა ვიღებდეთ accountNumber და initialBalance მნიშვნელობებს.
//    გარედან არუნდა იყოს შესაძლებელი accountNumber, balance და transactionHistory შეცვლა.
//    კლასში უნდა გვქონდეს მეთოდები:
//    getAccountInfo
//    deposit - თანხის დამატება ანგარიშზე.
//    withdraw - თანხის მოკლება ანგარიშიდან.
//    transferFunds - გადარიცხვა სხვა BankAccount_ზე
//    getTransactionHistory - აბრუნებს transactionHistory_ მასივს
//    recordTransaction - transactionHistory_ში ამატებს ჩნაწერს ტრანსფერის შესახებ
//    შევქმნათ მინიმუმ 2 BankAccount_ის ინსტანსი.
//    გავაკეთოთ სხვადასხვა ოპერაციები.
//    დავბეჯდოთ შექმნილი ექაუნთების transactionHistory.
// */
// class BankAccount {
//   private accountNumber: number;
//   private balance: number;
//   private transactionHistory: string[];
//   constructor(accountNumber: number, initialBalance: number) {
//     this.accountNumber = accountNumber;
//     this.balance = initialBalance;
//     this.transactionHistory = [];
//   }
//   private recordTransaction(description: string): void {
//     this.transactionHistory.push(`${description}`);
//   }
//   getAccountInfo(): string {
//     return `account Number: ${this.accountNumber}, balance: ${this.balance}`;
//   }
//   deposit(amount: number): void {
//     if (amount <= 0) {
//       console.log("Deposit amount must be positive.");
//       return;
//     }
//     this.balance += amount;
//     this.recordTransaction(`deposited ${amount}`);
//   }
//   withdraw(amount: number): void {
//     if (amount > this.balance) {
//       console.log("amount is higher than balance");
//     }
//     this.balance -= amount;
//     this.recordTransaction(`withdrawed ${amount}`);
//   }
//   getTransactionHistory(): string[] {
//     return this.transactionHistory;
//   }
// }
// const BankAccount1 = new BankAccount(1, 500);
// const BankAccount2 = new BankAccount(2, 600);
// console.log(BankAccount1.deposit(100));
// console.log(BankAccount1.getAccountInfo());
// console.log(BankAccount2.getAccountInfo());
// console.log(BankAccount1.getTransactionHistory());
// console.log(BankAccount1.getAccountInfo());
