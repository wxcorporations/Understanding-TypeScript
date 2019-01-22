// Exercise 1 - Maybe use an Arrow Function?
// var double = function(value) {
//     return value * 2;
// };
// console.log(double(10));
let double = function( value : number ) : number {
    return value * 2 ;
};
console.log( double( 10 ) );


// Exercise 2 - If only we could provide some default values...
// var greet = function (name) {
//     if (name === undefined) { name = "Max"; }
//     console.log("Hello, " + name);
// };
// greet();
// greet("Anna");
let greet = function ( name : string = "Max") : void {
    console.log( name )
};
greet();
greet('fernando');


// Exercise 3 - Isn't there a shorter way to get all these Values?
// var numbers = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));
let numbers : number[] = [-3, 33, 38, 5];
console.log( Math.min.apply(Math , numbers) );


// Exercise 4 - I have to think about Exercise 3 ...
// var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
// console.log(newArray);
let newArray : number[] = [55, 20];
console.log( newArray.concat( numbers ) );


// Exercise 5 - That's a well-constructed array.
// var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
// console.log(result1, result2, result3);
let testResults : number[] = [3.89, 2.99, 1.38];
const [n1 , n2, n3] = testResults ;  // utilizando recurso destruturacao de array do es6
console.log( n1 , n2, n3);


// Exercise 6 - And a well-constructed object!
// var scientist = {firstName: "Will", experience: 12};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
// console.log(firstName, experience);
let scientist = { firstName : 'Fernando', experience : 10 } ;
const { firstName , experience } = scientist ;
console.log( firstName , experience );