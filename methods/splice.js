//splice() methods

let myArray = ["item1", "item2", "item3", "item4"];
console.log(myArray);
  // start delete insert

  //delete item2 in an array
myArray.splice(1,1);
console.log(myArray);

//insert item in an Array
myArray.splice(1,0,"insert item");
console.log(myArray);
