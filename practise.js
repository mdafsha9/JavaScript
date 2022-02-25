// closures




function outFunc(){
  let counter = 0;
  return function(){
    if(counter<1){
      console.log("Hi, You called me!");
      counter++;
    }else{
      console.log("Hey! You already called me.");
    }
  }
}
const func = outFunc();
func();
func();
