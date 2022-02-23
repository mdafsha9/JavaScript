// function returning function
function outterFunction(firstName, lastName){
    function innerFunction(arg){
      console.log(firstName, lastName);
    }
  return innerFunction;
}
const ans = outterFunction("Marie", "Lorie");
ans();
