//Lexical scope
//A variable defined outside the function can be accessible inside another function after defining function declaration,
//But the opposite is not true, the varible defined inside the function cannot be accessible outside the function
const myVar = "Value1";
function myFunc(){
  const lexiFunc = function(){
    console.log("Inside function", myVar);
  }
  console.log("Main function!");
  lexiFunc();
}
myFunc();
