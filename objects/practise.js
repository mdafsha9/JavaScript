//create an object with constructor
function Person(first, last, age, eye){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
let myFather = new Person("Lorie", "Wright", 22, "Brown");
let myMother = new Person("Rose", "Marie", 25, "Black");

console.log(myFather.firstName);
