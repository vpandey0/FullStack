
// var x=7;
// function getName(){
//     console.log("NAMASTE javascript");

// }
// getName();
// console.log(x);
// console.log(getName);

//but if we do this instead
// getName();
// console.log(x);//it showing undefined
//   var x=7;// but if we x from here, then it will throw error..here comes the concept->> HOISTING
// function getName(){
//     console.log("NAMASTE javascript");

// }

//how functions in javascript
var x=1;
a();
b();
console.log(x);
function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}
