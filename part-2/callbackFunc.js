//Callback functions

//Any function that is passed as an argument is called callback function

 function myFunc2(name){
   console.log("Outside function!");
   console.log("Here my name is ", name)
 }
function myFunc(callback){
  console.log("Here is my main function!");
  callback("Lorie");
}


myFunc(myFunc2);
