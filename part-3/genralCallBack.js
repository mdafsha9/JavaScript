//Understand callback
// //General function
function myFuncg(){
  console.log("This function doing task 1");
}
function myFuncg2(){
  console.log("This function is doing task 2");
}
myFuncg2();
myFuncg2();

//General callback
function myFunc(callback){
  console.log("This function doing task 1");
  callback();
}
function myFunc2(){
  console.log("callback");
}
myFunc(myFunc2);


//General callback with inside function

function myFuncI(callback){
  console.log("This function doing task 1");
  callback();
}
myFuncI(function(){
  console.log("Inside Function");
})

//General callback with arrow Function
function myFuncA(callback){
  console.log("This function doing task 1");
  callback();
}
myFuncA(() => {
  console.log("Arrow function");
})
