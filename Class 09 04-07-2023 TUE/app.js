console.log("javascript");
// var Student = {
//     name : "ahad",
// }


// constructor function
//  function Student(name, course){
//     this.name = name ;
//     this.course = course;
// this.greeting = function(){
//     console.log("hello " + this.name);
// }
//  }
//  var std1 = new Student("fahad", "MERN");
//  std1.greeting();
//  console.log(std1);
//  var std2 = new Student("saad", "MERN");
//  console.log(std2);
//  std2.greeting();

// prototype

// Student.prototype.greeting = function(){
//     console.log("hello "+ this.name);
// }


// console.log(std1);
// console.log(std2);

// OOP
// var date = new Date();


// Classes

// class ClassName {
//      constructor(){

//      }
// }

// class A{
//     constructor(){
//         console.log("A");
//     }
// }
// class Student{

// }
// class Teacher{

// }
// class Admin{

// }

class User {
    constructor(name, email) {
        console.log("i am constructor");
        this.name = name;
        this.email = email;
    }
}
class Student extends User {
    constructor(name, email) {
        super(name, email);
        // console.log(name, email);
    }
}
var std = new Student("saad", "abc@abc.com");
console.log(std.name, std.email);
class Teacher extends User {

}
class Admin extends User {

}

// var std = new Student();
// std.studentCancelation();

class mobile {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    call() {
        console.log("calling");
    }
    message() {
        console.log("messaging");
    }

    dailling() {
        console.log("dailling");
    }
}
class Iphone extends mobile {
    constructor(name, model) {
        super(name, model)
    }
}
var iPhone = new Iphone("abc mobile", "2023");
iPhone.call();
class Sansung extends mobile {

}

// class Student {
//     name = "";
//     age = "";
//     email = '';
//     phone = "";
// }
// class visiter extends Student {
//     purpose = "";
// }
// class perminent extends Student {

//     purpose = "";
// }
// class guest extends Student {
//     purpose = "";
// }

// multi level

// class A{

// }
//  class B extends A{

//  }
//  class C extends B{

//  }

// multipul

// class A {

// }
// class B {

// }
// class C {

// }