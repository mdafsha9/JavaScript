// function returning function
function outterFunction(x){
  const firstName = "Lahari";
  const lastName = "Tommy";
  return function(){
    console.log(x,firstName,lastName);
  }
}
const ans = outterFunction("Puppy");
ans();
