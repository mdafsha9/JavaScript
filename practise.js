// map method

const numbers = [1,2,3,4,5,6,7,8,9,10];

function table(number){
  return number*5;
}

const fifthTable = numbers.map(table);
console.log(fifthTable);
