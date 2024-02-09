// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 2455768679804455n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman" , "naagraj" , "doga"]

let myObj = {
    name : "Darshu",
    age : 23,
}

const myFunction = function(){
    console.log("hello");
}

// console.log(typeof bigNumber);

// *****************************************************************************************************

// stack (Primitive) , Heap (Non-Primitive)

let myName = "Darshana"

let anotherName = myName
anotherName = "DJ"

console.log(anotherName);
console.log(myName);

let userOne = {
    email : "darshu@111",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "dd@1"

console.log(userOne.email);
console.log(userTwo.email);