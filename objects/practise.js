//spread operstor in Objects

const employee = {
  firstName : "Lorie",
  lastName : "Wright",
  age : 25,
}

const person = {
  color :"Black",
  nationality : "Indian"
}

let newObj = {...employee, ...person, eyeColor:"Brown"};
console.log(newObj);
