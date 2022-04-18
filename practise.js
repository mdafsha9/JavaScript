//forEach method


let numbers = [1,5,6,8,9];

function display(number){
  return number*2;
}

let displayNumbers = numbers.map(display);
console.log(displayNumbers);
