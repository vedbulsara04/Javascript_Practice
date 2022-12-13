/*-------------------------------------------------------
var can be changed anytime which makes the code insecure.
let is to be used in loops and conditional statements.
const to be used as often as you can.
---------------------------------------------------------*/

// variable type : let
if(true){
    let place = "Vancouver";
    console.log(place);
}

// let declared at the end : 
if(true){
    console.log(city_name);
    let city_name = "Toronto"; //ReferenceError: Cannot access 'city_name' before initialization.
}
// --------------------------------------------- //
