//callback function
function addTwoNum(a,b){
  console.log(a*b);
}

function myFunction(callback){
  callback(2,3);
}

myFunction(addTwoNum);
