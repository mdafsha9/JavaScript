//closures
//Example 1
function outterFunction(firstName, lastName){
  function innerFunction(){
    console.log(firstName, lastName);
  }
  return innerFunction;
}
const ans = outterFunction("Lorie", "Wright");
ans();

//Example2

function outFunc(age){
  const firstName = "Megha";
  const lastName = "Roy";
  return function(){
    console.log(firstName, lastName, age);
  }

}
const answer = outFunc(25);
answer();


//Example3
function myFunc(power){
  return function(number){
    return number**power;
  }
}
const cube = myFunc(3);
const value = cube(2);
console.log(value);

//Example4
function myFunction(){
  let counter = 0;
  return function(){
    if(counter < 1){
      console.log("Hi! You called me.");
      counter++;
    }else{
      console.log("Hey! You already called me.");
    }
  }
}
const func = myFunction();
func();
func();
