//iterate objects
const employee = {
  name : "Wright",
  age : 25,
  hobbies : ["cricket", "Reading", "Dancing"]
}
for(let key in employee){
  console.log(key);
  console.log(employee[key]);
}
