//JavaScript Object Prototype

function Person(first, last, age, eye){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eye = eye;
}

Person.prototype.nationality = "Indian";

let myFather = new Person("Log", "Bhee", 56, "Brown");
let myMother = new Person("Louis", "Bord", 45, "Black");

console.log("My mother nationality is " + myMother.nationality);
