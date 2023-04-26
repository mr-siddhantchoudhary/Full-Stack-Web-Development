// Values

//----------Primitive Date Type---------------//
// Single Value

// 1 => INT
// 8.1 => Float
// Number

//--------------------------//

// 'Siddhant'
// "Siddhant"
// String

//--------------------------//

// true and false
// Boolean Values

//--------------------------//

// null => Doesn't have value
// undefined => Not Defined

//-------------------------------------------------------------------//

//--------------------Non-Primitive Values-------------//
// Multi values

// array => [] => Indexes
// object => {} => Key:Value

// !!!!!!!___Everything in javaScript is treated as Object____!!!!!!!


// Variable

// var => we never use var in JavaScript!!!!!!!!
// let
// const

// let number;
// number = 100;

// console.log(number);





//__________ Operations

//___________Assignment Operator
// = 
// +=
// -=
// *=
// /=
// %=
// **=

//___________Arithmatic Operator
// + => Addition
// - => Subtraction
// * => Multiplication
// / => Divison
// % => Remainder (Bacha Hua)
// ** => Exponentiation
// ++ => Increment
// -- => Decrement

//___________Comparison Operators
// == => equal to
// === => equal value and equal type
// != => not equal
// !== => not equal value or not equal type
// > => greater than 
// < => less than
// >= => greater than or equal to
// <= => less than or equal to
// ? => ternary operator

//___________Logical Operators
// && => Logical AND
// || => Logical OR
// ! => Logical Not


//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Assignment JavaScript 1

//1q reate a jaascript file, using jaascript comments, List all the datatypes of Jaascript, and specify an
//example for each of them.

/**
 * String: " I am happy to join PW Skills FSWD Course"
 * Number:-
 *  i) Integer: 9
 *  ii) Floating Value: 10.2
 *  iii) Infinity: Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
 *  iv) Not a Number: NaN
 * BigInt: 1024n
 * Boolean: true, false
 * Undefined: undefined
 * Null: null
 * Symbol: Symbol('PW SKILLS')
 * Objects:-
 * i) Array: [1,2,3]
 * ii) Objects: {name: "pwskills", course: "FSWD"}
 */


// Create an array of 10 products that you have recently purchased or viewed on an e-commarce site.

let a = [
    "iPhone",
    "MacBook Pro",
    "Flower Pot",
    "Water Bottle",
    "Mac Studio Mini",
    "Watch",
    "Tennis Ball",
    "Mouse pad",
    "Keyboard",
    "Lens",
];


//3. Create an object of a student registry of 5 students whoes key is the registeration number and the value is the student name. Registration number starts from 1 and continues. 

let b = {
    1: "Mithun",
    2: "Alka",
    3: "Anurag",
    4: "Prabir",
    5: "Shivam",
};


// VARIABLES AND TYPEOF
// 1. Specify an example for all the datatypes in JavaScript, store the values in a variables, and verify the types of value stored.

//1. String

let var1 = "I am happy boy";
console.log(typeof var1);

// 2 Number
// i) Integer

let var2 = 9;
console.log(typeof var2);

// ii) Floating Value

let var3 = 10.2;
console.log(typeof var3);

// iii) Infinity

let var4 = Number.POSITIVE_INFINITY;
console.log(typeof var4);

//iv) Not a Number

let var5 = NaN;
console.log(typeof var5);

// 3) BigInt

let var6 = 1024n;
console.log(typeof var6);

// Boolean

let var8 = true;
console.log(typeof var8);

// Undefined

let var9 = undefined;
console.log(typeof var9);

// Null

let var10 = null;
console.log(typeof var10);

// Symbol

let var11 = Symbol('PWK SKILLS');
console.log(typeof var11);

// Objects
// Array

let var12 = [1, 2, 'PW'];
console.log(typeof var12);

// Object 

let var13 = {a:'ajshaj', b:'asasa'};
console.log(typeof var13);


//2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and error messages.

//Valid variables

let name = "PW SKills";
console.log(name);
let iAmHappy = true;
console.log(iAmHappy);


//Invalid variables

let 1name = "PW SKILLS "
console.log(1name);

let var = 13
console.log(var);



//OPERATORS