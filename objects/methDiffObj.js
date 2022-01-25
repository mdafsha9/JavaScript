//store methods in different objects
const userMethod = {
  about : function(){
    return `${this.firstName} is ${this.age} years old`;
  },
  is18 : function(){
    return this.age>=18;
  }
}

function createUser(firstName, lastName, age, email, address){
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.email = email;
  user.address = address;
  user.about = userMethod.about;
  user.is18 = userMethod.is18;

  return user;
}

const user1 = new createUser("Manheet", "Preeth", 12, "preeti@gmail.com", "myAddress");
const user2 = new createUser("Royal", "Rao", 18, "royal@gmail.com", "myAddress1");
const user3 = new createUser("priya", "Roy", 19, "priya@gmail.com", "myAddress2");

console.log(user1);
console.log(user1.about());
console.log(user3.about());
