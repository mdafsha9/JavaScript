//Function hoisting
//Hoisting is a JavaScript default behaviour of moving declarations to the top of the current scope
//Hoisting applies to variable declaration and function declaration.
//because of this, function can be called before they are declared
//function can be defined using an expression are not hoisted

function myFunction(a, b){
  return a+b;
}
console.log(myFunction(1,5));
