/*-------------------------------------------------------
var can be changed anytime which makes the code insecure.
let is to be used in loops and conditional statements.
const to be used as often as you can.
---------------------------------------------------------*/

// variable type : const
const city = "Toronto";
console.log(city);

// const value changed : 
const city = "Vancouver";
console.log(city)       //SyntaxError: Identifier 'city' has already been declared//
// --------------------------------------------- //
