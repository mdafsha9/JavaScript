//constructor function


function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

const myFather = new Person("John", "Hue", 25);
const myMother = new Person("Lorie", "Wright", 15);
console.log(myMother.firstName + ' '+ myMother.lastName + " is a " + myMother.age );

Person.prototype.nationality = "Indian";

console.log("My nationality is " + myMother.nationality);
