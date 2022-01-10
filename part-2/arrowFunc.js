//Arrow function
//Arrow function is not hoisted. They must be defined before they are used
//using const is safer than var because a function expression is always a constant values
//we do not need a function keyword, return keyword and curly brackets

const x = (x,y) => x*y ;

console.log(x(2,5));

//We can only omit return keyword and curly brackets, if the function is a single statement. Because ofthis, it might be a good habit to always keep them.

const a = (a,b) => {
  return a*b;
}
console.log(a(1,9));
