//Function inside function

function insideFunc(){
  const addTwoNum = (x,y) => x+y;

  const mul = (x,y) => {
    return x*y;
  }

  console.log("Hello JavaScript Function!");
  console.log(addTwoNum(2,3));
  console.log(mul(1,5));
}
insideFunc();
