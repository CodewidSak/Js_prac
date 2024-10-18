const accountId = 1234;
console.log(accountId);
/*
accountId = 8574;
console.log(accountId);
const are the final variables.We cannot change its value.
*/

let accountEmail = "sakhack@1872gmail.com"
var accountName = "Sakshi Jain"
accountBal = 286361
let accountState; // it will be undefined untill we will provide its value;
console.table([accountId,accountEmail,accountName,accountBal,accountState]); //by using it we can print multiple variable in the form of table.


// Difference between var and let;

// It is legal in case of var.
console.log(name); // Undefined;
var name = 23;


// It is not legal in case of let
// console.log(bal);
// ReferenceError: Cannot access 'bal' before initialization
console.log(bal);
let bal = 23;
