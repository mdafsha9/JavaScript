//Default parameters

function addTwoNum(a, b=1){
  return a+b;
}
console.log(addTwoNum(5)); //Here b value is undefined then it will take default parameter above we given here 1
console.log(addTwoNum(2,6));
