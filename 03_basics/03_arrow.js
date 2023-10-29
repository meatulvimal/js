const user= {
    username: "ghdvc",
    price: 89,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username ="chdjsh"
//     console.log(this);
// }

// chai()

const chai =  () => {

    let username ="chdjsh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1+num2)

const addTwo = (num1, num2) => ({useranme: "higavs"})


console.log(addTwo(3,4));

// const myArray = [3,4,5,6]
// my