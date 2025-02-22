//  Primitive

//  7 types  : String, Number, Boolean, null, undefined, Symbol, BigINt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

// let userEmail = undefined

// or

let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')

// console.log(id === anotherId); 

// const bigNumber = 5449876541649646n


// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"] ;

let myObj = {
    name:"rehan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof anotherId);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitve)

let myYoutubename = "sayedrehandotcom"

let anothername = myYoutubename
anothername = "chay aur code"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rehan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

