let num1 = "150";
let flo1 = "1.50";

console.log("#---------------Converting strings to Integers---------------------")
console.log(parseInt("100"));
console.log(parseInt(num1));
console.log(parseInt(flo1));
console.log(parseInt("ABC"));
console.log(parseInt("0xF"))    //Hexadecimal number.

console.log("#---------------Converting strings to Float-------------------------")
console.log(parseFloat("1.00"));
console.log(parseFloat(flo1));
console.log(parseFloat("ABC"));

console.log("#---------------Converting numbers to Strings-------------------------")
let num2 = 120;
let flo2 = 1.22;
console.log(num2.toString());
console.log(flo1.toString());
console.log((100).toString());

