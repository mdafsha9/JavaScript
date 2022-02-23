// function returning function
function func(){
  let counter = 0;
  return function(){
    if(counter < 1){
      console.log("Hi, You called me!");
      counter++;
    }else{
      console.log("You already called me!");
    }
  }
}
const myFunc = func();
myFunc();
myFunc();
