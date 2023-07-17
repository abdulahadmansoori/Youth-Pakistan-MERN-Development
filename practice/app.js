
// functions

// let sum = () => {

// }


// Write a function that calculates the area of different shapes (circle, triangle, rectangle) based on user input.

// let areaOfCircle = (radius) => {
//     let area = 3.142 * (radius * radius);
//     return area;
// }
// console.log(areaOfCircle(3));

// let areaOfRectangle = (length, breath) => {
//     let area = length * breath;
//     return area;
// }
// console.log(areaOfRectangle(32, 23));

// let areaOfTriangle = (base, height) => {
//     let area = (base * height) / 2;
//     return area;
// }
// console.log(areaOfTriangle(3, 9));




// if, else if, else


// Write a JavaScript function to to find given number is negative or positive or zero.

// let findNumberSign = (num) => {
//     if (num > 0) {
//         return "positive";
//     }
//     else if (num < 0) {
//         return "negative";
//     }
//     else {
//         return "zero";
//     }
// }

// console.log(findNumberSign(0.996));
// console.log(findNumberSign(-56));
// console.log(findNumberSign(0));

// Write a JavaScript program to check if a given year is a leap year
// let leapYear = (year) => {
//     if (year % 4 == 0) {
//         return "leap year"
//     }
//     else {
//         return "not a leap year"

//     }
// }
// console.log(leapYear(2015));



// Create a program that asks the user for their age. If the age is less than 18, display a message saying they are not eligible to vote. If the age is between 18 and 65 (inclusive), display a message saying they are eligible to vote. Otherwise, display a message saying they are eligible for senior citizen benefits.

// let votingCriteria = (num)=>{
//     if (num<18){
//         return "You aren't eligible to vote"
//     }
//     else if (num<65){
//         return "Eligible to vote"
//     }
//     else{
//         return "Eligible for senior citizen benefits"
//     }
// }
// console.log(votingCriteria(18));
// console.log(votingCriteria(65));
// console.log(votingCriteria(10));

// Write a program that asks the user to enter a month number (1-12) and displays the corresponding month name. If an invalid month number is entered, display an error message.

// let findMonth = (monthNumber) => {
//     let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
//     if (monthNumber >= 1 && monthNumber <= 12) {
//         return months[monthNumber - 1];
//     } else {
//         return "invalid number number must be greater than equals to 1 and less then or equals to 12";
//     }
// }
// console.log(findMonth(-3));
// console.log("5" + findMonth(5));
// console.log(findMonth(15));

// Write a program that takes a character as input and determines whether it is a vowel (a, e, i, o, u), a consonant, or an invalid input. Display the appropriate message based on the input.

// switch

// let findVowel = (char) => {
//     if (char.length == 1) {
//         switch (char) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u": {
//                 console.log("character is in vowels");
//                 break;
//             }
//             default: {
//                 console.log("character is not in vowels");
//                 break;
//             }
//         }
//     }
//     else {
//         console.log("please enter single character");
//     }
// }

// findVowel("b");
// findVowel("e");
// findVowel("urdu");



// let getDiscount = (totalAmount) => {
//     switch(true){
//         case (totalAmount >= 15000):{
//             console.log("5% discount on total bill");
//             break;
//         }
//         case (totalAmount >= 10000):{
//             console.log("10% discount on total bill");
//             break;
//         }
//         case (totalAmount >= 5000):{
//             console.log("15% discount on total bill");
//             break;
//         }
//         default:{
//             console.log("0% discount on total bill");
//             break;
//         }
//     }
// }
// getDiscount(5500);
// getDiscount(12000);
// getDiscount(55000);
// getDiscount(200);

// loops
// foreach
// for

// Write a for loop that calculates the sum of the first 50 natural numbers.

// const sumNumber = (num) => {
//     let i;
//     let sum = 0;
//     for (i = 0; i <= num; i++) {
//         sum += i;
//         // sum = sum + num;
//         // console.log(sum);
//     }
//     console.log(sum);
// }

// sumNumber(50);
// i = i + 1;
// i++

// let generateTables = (num) => {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + " X " + i + " = " + (i * num));
//     }
// }
// generateTables(10);

// Write a for loop that finds the factorial of a given number.



// 1+2+3+4+5 = 15

// while
// do while
// OOP
// classes
// constructor
// this
// get and set


// madam
// let findWork = (word) => {
//     let len = word.length-1;
//     for (let i = 0; i <= word.length / 2; i++) {
//         if(word[i] != word[len-i]){
//             return"not pradrome";
//             break;
//         }
//     }
//     return "paradrome";
// }
// console.log(findWork("madam"));





// OOP


// Create a class called "Person" with properties for name, age, and gender.
// class Person {
//     // constructor(name, age, gender) {
//     //     this.name = name;
//     //     this.age = age;
//     //     this.gender = gender;
//     // }
//     get name() {
//         return this.name;
//     }
//     set name(name) {
//         this.name = name;
//     }
//     get age() {
//         return this.age;
//     }
//     set age(age) {
//         this.age = age;
//     }
//     get gender() {
//         return this.gender;
//     }
//     set gender(gender) {
//         this.gender = gender;
//     }
// }
// var person = new Person();
// person.name = ""

// Implement a method in the Person class to display the person's information and Create an object of the Person class and display its information.

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    displayInformation = () => {
        console.log(this.name, this.age, this.gender);
    }

}
const person = new Person("abc", 23, "M");
person.displayInformation();

// Create a class called "Student" that extends the Person class and has an additional property for student ID.
// Implement a method in the Student class to display the student's information.
// Create an object of the Student class and display its information.

class Student extends Person {
    constructor(name, age, gender, stdID) {
        super(name, age, gender);
        this.stdID = stdID;
    }
    displayInformation = () => {
        console.log(this.name, this.age, this.gender, this.stdID);
    }
}
const std = new Student("abc", "45", "M", "001");
std.displayInformation();

// Create a class called "Teacher" that extends the Person class and has an additional property for subject.
// Implement a method in the Teacher class to display the teacher's information.
// Create an object of the Teacher class and display its information.

class Teacher extends Person {
    constructor(name, age, gender, subject) {
        super(name, age, gender);
        this.subject = subject;
    }
    displayInformation = () => {
        console.log(this.name, this.age, this.gender, this.subject);
    }
}
const teacher = new Teacher("abc", "34", "M", "Programming");
teacher.displayInformation();

// Create a class called "Rectangle" with properties for width and height.
// Implement a method in the Rectangle class to calculate and return the area of the rectangle.
// Create an object of the Rectangle class and calculate its area.

class Rectangle {
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    areaOfRectangle(h, l) {
        if (typeof (l) == "number" && typeof (h) == "number") {
            return h * l;
        } else {
            return "invalid input!!";
        }
    }
}
const rectangle = new Rectangle(56, 555);
console.log(rectangle.areaOfRectangle(rectangle.height, rectangle.width));

// Create a class called "Circle" with a property for radius.
// Implement a method in the Circle class to calculate and return the area of the circle.
// Create an object of the Circle class and calculate its area.
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    areaOfCircle(r) {
        if (typeof (r) == "number") {
            return 3.142 * (r * r);
        } else {
            return "invalid input!!";
        }
    }
}
const circle = new Circle(45);
console.log(circle.areaOfCircle(circle.radius));


// Create a class called "Car" with properties for make, model, and year.
// Implement a method in the Car class to display the car's information.
// Create an object of the Car class and display its information.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // static displayInformation = () => {
    displayInformation = () => {
        console.log(this.make, this.model, this.year);
    }
}
const car = new Car("honda", "2023", "2023");
car.displayInformation();
// Car.displayInformation();


// Create a class called "Animal" with a property for species.
// Implement a method in the Animal class to display the animal's information.
// Create an object of the Animal class and display its information.
class Animal {
    constructor(species) {
        this.species = species;
    }
    displayInformation = () => {
        console.log(this.species);
    }
}
const animal = new Animal("abc");
animal.displayInformation();

// Create a class called "Dog" that extends the Animal class and has an additional property for breed.
// Implement a method in the Dog class to display the dog's information.
// Create an object of the Dog class and display its information.
class Dog extends Animal{
    constructor(species, breed){
        super(species);
        this.breed = breed;
    }
    displayInformation = () => {
        console.log(this.species, this.breed);
    }
}
const dog = new Dog("abc","xyz");
dog.displayInformation();

// Create a class called "BankAccount" with properties for account number and balance.
// Implement methods in the BankAccount class to deposit and withdraw funds.
// Create an object of the BankAccount class and perform deposit and withdrawal operations.

class BankAccount{
    get accNumber(){
        return this.accountNumber;
    }
    set accNumber(num){
        this.accountNumber = num;
    }
    get bal(){
        return this.balance;
    }
    set bal(num){
        this.balance = num;
    }
    deposit(amount){
        this.balance += amount;
        console.log(this.balance);
    }
    withdraw(amount){
        this.balance -= amount;
        console.log(this.balance);
    }
}

const account = new BankAccount();
account.bal=5600;
account.accNumber = "00001-bac-00010";
console.log(account.bal);
account.deposit(5000);
account.withdraw(3050);