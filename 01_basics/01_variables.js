const accountId = 1444323
let accountEmail = "atul@gmail.com"
var accountPassword = "qwerty"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@gmail.com"
accountPassword = "215456543"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])