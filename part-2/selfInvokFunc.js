//self-invoking functions
//function expression can be made self-invoking.
//self-invoking expression is invoked automatically, wihtout being called
//function expression will be executed automatically, if the expression is followed by ()
//we cannot self-invoke a function declarations
//we have to add paranthesis around the function, to indicated that it is a function expression

(function(){
  console.log("Self-invoking function");
})()
