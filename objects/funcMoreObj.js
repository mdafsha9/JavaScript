//two or more objects and 1 function outside

function myFunc(){
  console.log(`My name is ${this.firstName} and my age is ${this.age}`);
}

const person1 = {
  firstName : "Lorie",
  age : 12,
  about:myFunc
}

const person2 = {
  firstName : "Wright",
  age : 18,
  about:myFunc
}

const person3 = {
  firstName : "Moria",
  age : 15,
  about:myFunc
}

person1.about();
person2.about();
person3.about();
