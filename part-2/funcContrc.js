//function() constructor

const myFunc = new Function("a", "b", "return a+b");
console.log(myFunc(2,6));

const myFunction = function(c,d){
  return c*d;
}
console.log(myFunction(2,3));
