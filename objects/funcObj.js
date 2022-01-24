//methods
//function inside object

const person = {
  firstName : "Harry Poter",
  age : 12,
  about : function(){
    console.log(`My name is ${this.firstName} and my age is ${this.age}`);
  }
}
person.about();
