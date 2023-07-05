console.log("javascript");

// polymorphism


// overloading
// multipul method with same name in same class
// class Student {
//     constructor(name, id){
//         this.id = id || "000bac";
//         this.name = name || "student";

//     }
//     }
//     var std = new Student("is");
//     checkAttandance(id) {

//     }
//     checkAttandance(name, email) {

//     }
//     checkAttandance(id, name, email) {

//     }
// }

// class Student {
//     constructor(name, phone, email) {
//         this.name = name || "student";
//         this.phone = phone || "0000 00000000";
//         this.email = email;
//     }


// checkAttandance = function (name, email, phone) {
//     console.log("std " + name, email, phone);
// }

// }
// class Teacher {
//     checkAttandance = function (name, email, phone) {
//         console.log("teacher " + name, email, phone);
//     }
// }
// var std = new Student();
// std.checkAttandance("ahad", "abc@abc.com", "0233333333");

// var teacher = new Teacher();
// teacher.checkAttandance("abc", "abc@abc.com", "0233333333");




// overriding
// multipul method with same name in different class

// class Student {
//     checkAtt() {
//         console.log("std check att");
//     }
// }
// class Teacher {
//     checkAtt() {
//         console.log("teacher check att");
//     }
// }

// var std = new Student();
// var teacher = new Teacher();

// std.checkAtt();
// teacher.checkAtt();

// // encapsolation

// // public
// // private
// // protected
// // class User {
// //     constructor() {
//    this.user= user = id 
//     }
//     name;
//     get name() {
//         return this.name
//     }
//     set name(name) {
//         this.name = name;
//     }
//     static userName() {
//         return "abcd";
//     }
// }
// var user = new User();
// user.name = "abc"
// console.log(user.name);
// console.log(User.userName());
// function addTodo() {

// }
addTodo = (event) => {
    event.preventDefault();
    let todo = document.forms.todo;
    let form = FormData(todo);
    console.log(form);

}