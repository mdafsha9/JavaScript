//Parameter destructuring

let person = {
  firstName : "Richards",
  gender:"Male"
}

function paraDestructuring(obj){
  console.log(obj.firstName, obj.gender);
}
paraDestructuring(person);
