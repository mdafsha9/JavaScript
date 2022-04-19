//JavaScript Object constructor function

function Person(first, last, age, eye){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.about = function(){
    return this.firstName + " " + this.lastName;
  }
}

let myFather = new Person("John", "Doe", 25, "Black");
let myMother = new Person("Marry", "Doe", 15, "Brown");

console.log("My father name is " + myFather.about());
