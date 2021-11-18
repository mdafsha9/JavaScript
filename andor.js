// and(&&), or(||) operators

let firstName = "Royal";
let age = 19;
// if(firstName[0] === "R"){
//   console.log("Your name starts with R");
// }
//
// if(age>=18){
//   console.log("your age is above 18");
// }


//Now i want to return the above two statement at a time using and, or operator

if(firstName[0] === "R" && age>18 ){
  console.log("Your name starts with R and above 18");
} else{
  console.log("Must true both the statements in 'and' operator");
}
