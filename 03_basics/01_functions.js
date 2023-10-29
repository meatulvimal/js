console.log("a");
console.log("d");
console.log("fds");
console.log("dcd");

function sayTheWord(){
    console.log("a");
    console.log("d");
    console.log("fds");
    console.log("dcd");
}

// sayTheWord()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    return number1 + number2 
}

addTwoNumbers(2,null)

const result = addTwoNumbers(3,5)
// console.log("Result:", result);

function loginUserMessage(username= "sam"){
    if(!username){
        console.log("pls enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hscb"))
console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500, 2000))

const user = {
    username: "agsv",
    price: 832
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 1817
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,600]));
