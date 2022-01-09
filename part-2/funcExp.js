//Function expressions
//JavaScript function can be defined using function Expression. Function expression can be stored in a variable.
//After function expression stored in a variable, that variable can be used as a function. This function is actually an anonymous function (without a function name).
////Function stored in a variable do not need a function name. They are always invoked with a variable.
//This function always ends with a semicolon, because it is a part of executable statement

const sumTwoNum = function(a,b){
  return a+b;
}
console.log(sumTwoNum(2,5));
