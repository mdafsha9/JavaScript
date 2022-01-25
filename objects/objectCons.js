//create functions to create mutiple Objects
//object constructor
function createUser(fName, lName, email, age, address){
  const user = {};
  user.firstName = fName;
  user.lastName = lName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function(){
    return `${this.firstName} is ${this.age} years old`;
  }
  user.is18 = function(){
    return this.age>=18;
  }
  return user;
}
const user1 = new createUser('Anand', 'Lorie', 'lo@fjgk', 22, "myAddress");
console.log(user1);

const about = user1.about();
console.log(about);

const is18 = user1.is18();
console.log(is18);
