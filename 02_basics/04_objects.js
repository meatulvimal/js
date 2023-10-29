// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id ="hcbvi"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "jdscvs@gmail.com",
    fullname: {
        userfullname: {
            firstname: "a",
            lastname: "b"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);

const obj1 ={
    1:'a',
    2:'b'
}

const obj2 ={
    3:'c',
    4:'d'
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2) 
//console.log(obj3);

const obj3 = {...obj1, ...obj2}
//console.log(obj3)

const users=[
    {
        id: 1,
        email: "ajdkba@gmail.com"
    },
    {
        id: 2,
        email: "ajxscjndkba@gmail.com"
    },
    {
        id: 3,
        email: "ajdkdkjwbba@gmail.com"
    },
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename: "js",
    price: "99",
    courseInstructor: "sdhb"
}

// course.courseInstructor

// const {courseInstructor: instructor} =course

// console.log(courseInstructor);

// const navbar = () => {

// }

// navbar(company = "hcdk")


// {
//     name: "avw",
//     coursename: "js",
//     price: "free"
// }

