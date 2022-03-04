
//closures

function outterFunction(age){
  const firstName = "Lorie";
  const lastName = "Wright";
  function innerFunction(){
    console.log(firstName, lastName, age);
  }
  return innerFunction;
}
const ans = outterFunction(20);
ans();
