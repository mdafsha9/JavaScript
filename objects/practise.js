//And or operator

let firstName = "Hanish";
let age = 19;

// and operator must give true conditions both otherwise it returns else block
if(firstName[0]==="H" && age>18){
  console.log("Your name starts with H and above 18");
}else{
  console.log("wrong data");
}

//or operator either one conition is true

if(firstName[0]==="R" || age>18){
  console.log("inside if");
}else{
  console.log("inside else");
}
