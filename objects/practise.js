//call, apply and bind method

const user = {
  firstName : "Holly",
  age : 12,
  about : function(hobby, favDish){
    return `${this.firstName} is ${this.age} years old and my hobbby is ${hobby}, ${favDish} `;
  }
}

const user1 = {
  firstName:"Marie",
  age:15
}

console.log(user.about.apply(user1, ["Reading", "Fish"]));
