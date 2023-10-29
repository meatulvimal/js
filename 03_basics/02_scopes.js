// var c = 300
let a = 300

if (true){
    let a = 10 
    const b=20
    // var c = 30
    console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
console.log(a);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

function one(){
    const username = "hcbh"

    function two() {
        const website = "tcb"
        console.log(username);

    }
    // console.log(website)
    two()
}

one()

if (true) {
    const username = "jcbhd"
    if (username == "jcbhd") {
        const website = "kscb"
        console.log(username + website);
    }
    // console.log(website);

}

// console.log(username);


// ++++++++++++++++++++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++

function addOne(params) {
    return params +1
    
}
console.log(addOne(5))

const addTwo =function (num) {
    return num +2
}
// console.log(addTwo(5))


