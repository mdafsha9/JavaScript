//iterate objects
const employee = {
  name : "Wright",
  age : 25,
  hobbies : ["cricket", "Reading", "Dancing"]
}
//using for in loop
// for(let key in employee){
//   console.log(key);
//   console.log(employee[key]);
// }


//using Object.keys
for(let key of Object.keys(employee)){
  console.log(employee[key]);
}
