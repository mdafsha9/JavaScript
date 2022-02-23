//function inside function

function myFunction(){

  function addTwoNum(a,b){
    console.log( a+b);
  }
  function mulTwoNum(c,d){
    console.log(c*d);
  }
  console.log("Global function");
  addTwoNum(4,2);
  mulTwoNum(5,6);
}
myFunction();
