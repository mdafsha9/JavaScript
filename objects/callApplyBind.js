//call, apply and bind methods

//with call, apply and bind methods we can write a function that can be used in different objects

//difference between call, apply and bind methods
//call() method invokes a function and allows you to pass in arrguments one by one
//apply() method invokes a function and allows you to pass in arrguments as an array
//bind() method returns new function,allowing you to pass in an array and any number of arguments

function about(hobby, favMusic){
  console.log(this.firstName +" age is "+ this.age +" and his hobby and favourite music is " + hobby, favMusic);
}

const person1 = {
  firstName : "Mohan",
  age : 12
}

const person2 = {
  firstName : "Rohan",
  age : 15
}

//call() method
about.call(person2, "dancing", "Juzz");

//apply() methods
about.apply(person1, ["Singing", "Melody"]);

//bind() methods
const func = about.bind(person2, "Reading", "Rock");
func();
