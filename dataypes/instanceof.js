const cities = ["Mumbai", "Vancouver", "Toronto", "Calgary"];
const num = 1;
const str = "Hello World";
const b = true;
const person = {
    firstName : "Ved",
    lastName : "Bulsara",
};

function sayHello(person){
    console.log("Hello " + person.firstName);
}

console.log("#--------------instanceof--------------#");
console.log(cities instanceof Array)
console.log(num instanceof Number)  
console.log(str instanceof String)
console.log(b instanceof Boolean)
console.log(person instanceof Object)
console.log(sayHello instanceof Function)

const num2 = new Number(2);  //Using a constructor      //const num = 1; 
console.log(typeof num2)
console.log(num2 instanceof Number)
