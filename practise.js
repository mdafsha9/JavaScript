
//closures

function myFunc(power){
  return function(num){
    return num ** power;
  }
}

const cube = myFunc(3);
const ans = cube(2);
console.log(ans);
