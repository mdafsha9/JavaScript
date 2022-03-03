
//filter method

const digits = [2,5,3,8,7,9];

function isEven(num){
  return num%2 === 0;
}

const EvenNumber = digits.filter(isEven);
console.log(EvenNumber);
