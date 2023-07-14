console.log("hello, world!!");


// OOP

// inheritance

// abstraction      js not support this

// encapsolation

// polymorphisum


// constructor function

// function Person(name, email){
//     this.name = name
// }

//  object
// var mobarry = ["samsung"];
// mobarry[0];


// var mobile = {
//     name : "samsung",
//     model:"2023"
// }

// function Mobile(name, model){
//     this.name = name;
//     this.model = model;
//     this.call = function(){
//         console.log("calling");
//     }
// }

// Mobile.prototype.message = function () {
//     console.log("messaging")
// }
// var mob = new Mobile("nokia","3310");
// var mob2 = new Mobile("samsung","s2");

// console.log(mob.model)
// mob.call();
// console.log(mob, mob2)


// OOP

// inheritance



class Mobile {
    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price
    }
    call() {
        console.log("calling");
    }
    message() {
        console.log("messaging");
    }
}
var mobile = new Mobile("samsung", "S5", "50k");
console.log(mobile);


// single level

// class A{

// }
// class B extends A {

// }

// multi level 

// class A {

// }
// class B extends A{

// }
// class C extends B {

// }

// herarcal 


// class A{

// }
// class B extends A{

// }
// class C extends A{

// }


// abstraction      js not support this

// encapsolation

// private 
// public
// protected
// internal
// default

// polymorphisum

// overloading
// class A {
    // studentData(name){

    // }
    // studentData(name, email){

    // }
    // studentData(name, email, id){

    // }
    //  studentData(name = "", email="", id=""){

    // }
// }
// overriding

// class A {
//     studentData() {

//     }
    
// }
// class B {
//     studentData() {

//     }
// }

// var obj = new Object ();


// var heading = document.getElementById("head1");
var heading = document.getElementsByClassName("heading");
console.log(heading[1].innerHTML);
heading[0].innerText = "abdul";
heading[1].innerText = "ahad";
// heading.style.color = "red";
