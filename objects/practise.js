//nested if else

let winningNumber = 19;
let userGuess = +prompt("Guees a number");
if(userGuess === winningNumber){
  console.log("You guess a right number");
}else{
  if(userGuess<winningNumber){
    console.log("Your number guess is low");
  }else{
    console.log("your number guess is high");
  }
}
