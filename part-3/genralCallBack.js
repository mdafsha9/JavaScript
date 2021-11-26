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

//Example
function getTwoNumbers(number1, number2, callback){
  callback(number1, number2)
}
getTwoNumbers(4,5, (num1, num2) => {
  console.log(num1+num2);
})

//another Example
function addTwoNumbers(number3, number4, onSuccess, onFailure){
  if(typeof number3 === "number" && typeof number4 === "number"){
      onSuccess(number3, number4)
  }else{
    onFailure();
  }
}
addTwoNumbers("4",8, (num3, num4,) => {
  console.log(num3+num4);

}, ()=>{
    console.log("Wrong Data Type");
})
