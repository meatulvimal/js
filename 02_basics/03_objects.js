// singleton

//Object.create

// object literals

const mySym = Symbol("key1")
// const mySym = Symbol("key")

const JsUser={
    name: "A",
    "full name": "ab",
    [mySym]: "myKey1",
    age: 22,
    location: "UK",
    email: "jdbia@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Tuesday', 'Wednesday']
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "kdfbdhb@gmail.com"
// Object.freeze(JsUser)
JsUser.email= "jncjjed@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

