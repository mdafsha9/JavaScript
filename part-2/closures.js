//closures

//Example1

function outterFunction(firstName, lastName){
  function innerFunction(){
    console.log(firstName, lastName);
  }
  return innerFunction;
}
const ans = outterFunction("Lorie", "Wright");
ans();

//Exmaple2

function outFunc(x){
  const a = 2;
  const b = 4;
  function innFunc(){
    console.log(a,b,x);
  }
  return innFunc;
}
const answer = outFunc(3);
answer();


//Example3

function myFunc(power){
  return function(number){
    return number ** power;
  }
}
const cube = myFunc(3);
const finalAnswer = cube(2);
console.log(finalAnswer);
