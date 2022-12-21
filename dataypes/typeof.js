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

console.log("#---------------typeof-----------------#")
console.log(typeof cities)
console.log(typeof num)
console.log(typeof str)
console.log(typeof b)
console.log(typeof person)
console.log(typeof sayHello)
