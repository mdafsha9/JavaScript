//rest parameters

function parameters(a,b, ...c){
  console.log(`a value is ${a}`);
  console.log(`b value is ${b}`);
  console.log(`c value is ${c}`);
}
parameters(1,5,6,3,2);

let total = 0;
function sumAllNum(...nums){
  for(let num of nums ){
    total =total+num;
  }
  return total;
}
console.log(sumAllNum(1,5,3,7));
