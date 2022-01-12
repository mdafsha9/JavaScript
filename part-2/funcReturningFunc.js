//function returning functions

function myFunc(){
  function hello(){
    console.log("Hello World!");
  }
  return hello();
}
myFunc();
