// function returning function
function fullName(firstName, lastName){
  function FName(){
    console.log(firstName, lastName);
  }
  return FName;
}
const ans = fullName("Marie", "Roy");
ans();
