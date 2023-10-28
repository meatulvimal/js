// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ===anotherId);

const bigNumber = 634324836478327643287n


// Reference (Non primitive)

// Array, Objects, Functions

const heros =["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Atul",
    age: 22,
}
const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof scoreValue);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let myChannel = "brainy"

let anotherName = myChannel
anotherName = "chaiaurcode"

console.log(myChannel);
console.log(anotherName);

let userOne = {
    email:"user@google.com",
    upi:"acs@apl"
}

let userTwo = userOne

userTwo.email = "2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);