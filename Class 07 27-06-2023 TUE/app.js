// variable scope
// var a = "abc";
// if (a != "") {
//     var b = 34;
// }
// console.log(b);

//for eachloop
// var arr = ["a","b","c","d","e"];
// arr.forEach(function (element){
//     console.log(element);
// });

// arr.map(function (element) {
//     console.log(element);
// })
// var numbers = [1,2,22,32,56,43,23,55,42,64,88];

// var evenNumber = numbers.filter(function(num){
//     return num % 2 === 0;
// })
// console.log(evenNumber);

// even_number
// evenNumberFor
// EvenNumberFor

// objects

// var personObj = {
//     name : "Abdul Ahad",
//     phone: 222200,
//     address:"jjjjjjjjjjj",
//     dateOfBirth: "2023-06-02",
//     age: function(dateOfBirth){
//         return 2023 - dateOfBirth;
//     }
// }

// DOM manipulation

// document.getElementById(2).style.backgroundColor = "red";
// console.log(document.getElementById("1"));
// document.getElementById("3").style.backgroundColor = "red";

// var div = document.getElementsByClassName("div");
// console.log(div[2])
// document.getElementsByClassName("div")[3].style.backgroundColor = 'red';
// for (i = 0; i <= div.length - 1; i++) {
//     div[i].style.background = "red";
// };
// function changeColor() {
//     var div = document.getElementsByClassName("div");

//     for (i = 0; i <= div.length - 1; i++) {
//         if (div[i].style.background == 'red') {
//             div[i].style.background = 'blue'
//         } else {
//             div[i].style.background = 'red';
//         }
//     };
// }
function changeText(){
    var p = document.getElementsByTagName("p")[0];
    p.innerText = 'text is changed!!';
    console.log(p);
}