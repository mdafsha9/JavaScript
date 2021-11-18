// nested if else

//winningNumber = 19
// too Below
// too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number");
if(userGuess === winningNumber){
  console.log("Your guess a right number");
}else{
  if(userGuess<winningNumber){
    console.log("Too low!!!");
  }else{
    console.log("Too high!!!");
  }
}
