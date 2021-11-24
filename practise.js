//nested if else
let num = prompt("Guess a Number");
let winningNumber=19;
if(num === winningNumber){
  console.log("You win!");
}else{
  if(num<winningNumber){
    console.log("Too low!");
  }else{
    console.log("Too high!");
  }
}
console.log(num);
