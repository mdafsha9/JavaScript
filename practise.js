//Object destructuring


const person = {
  firstName : "Leela",
  lastName : "Roy",
  age :25,
  country : "India"
}

let {firstName, lastName, ...restProps} = person;

console.log(firstName);
console.log(lastName);
console.log(restProps);
