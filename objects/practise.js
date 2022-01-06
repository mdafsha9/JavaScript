//dot vs bracket notation

let person = {
  firstName : "Gari",
  age : 22,
  "person hobbies" : ["Reading", "Playing", "Singing"]
}
console.log(person["person hobbies"]);

// to iterate Objects we use two types
//1.for in loop
//2.Object.keys

for(let key in person){
  console.log(key, ":", person[key]);
  //Below i am using backtics
  console.log(`${key} : ${person[key]}`);
}

for(let key of Object.keys(person)){
  console.log(person[key]);
}
