//Spread operator in Arrays and objects
//Arrays
const array1 = ["item1", "item2", "item3"];
const array2 = ["item4", "item5", "item6"];
const newArray = [...array1, ...array2, "item69", "item45"];
console.log(newArray);

const alphabets = [..."ABCDEFGHIJKLMNOPNQRSTUVWXYZ"];
console.log(alphabets);

//in objects
const obj1 = {
  firstName : "Lorie",
  LastName : "Wrights"
}
const obj2 = {
  age : 25,
  country : "Indian"
}
const newObject = {...obj1, ...obj2, eyeColor:"Brown"};
console.log(newObject);
