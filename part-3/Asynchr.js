//Asynchronous programming

//setTimeout
console.log("script start");
function hello(){
  console.log("Inside script");
}
setTimeout(hello, 1000);

console.log("Script end");

//setTimeout with arrow function
console.log("Script start");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000)
